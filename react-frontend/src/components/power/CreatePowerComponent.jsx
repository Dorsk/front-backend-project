import React, { Component } from 'react'
import PowerService from '../../services/PowerService';

class CreatePowerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            description: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveOrUpdatePower = this.saveOrUpdatePower.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            PowerService.getPowerById(this.state.id).then((res) => {
                let Power = res.data;
                this.setState({
                    id: Power.id,
                    name: Power.name,
                    description: Power.description
                });
            });
        }
    }
    saveOrUpdatePower = (e) => {
        e.preventDefault();
        let Power = { name: this.state.name, description: this.state.description };
        console.log('Power => ' + JSON.stringify(Power));

        // step 5
        if (this.state.id === '_add') {
            PowerService.createPower(Power).then(res => {
                this.props.history.push('/Powers');
            });
        } else {
            PowerService.updatePower(Power, this.state.id).then(res => {
                this.props.history.push('/Powers');
            });
        }
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }

    cancel() {
        this.props.history.push('/Powers');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Power</h3>
        } else {
            return <h3 className="text-center">Update Power</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input placeholder="Nom" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Description" name="description" className="form-control"
                                            value={this.state.description} onChange={this.changeDescriptionHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdatePower}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreatePowerComponent
