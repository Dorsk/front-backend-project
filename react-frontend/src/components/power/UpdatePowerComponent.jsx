import React, { Component } from 'react'
import PowerService from '../../services/PowerService';

class UpdatePowerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            description: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.updatePower = this.updatePower.bind(this);
    }

    componentDidMount() {
        PowerService.getPowerById(this.state.id).then((res) => {
            let Power = res.data;
            this.setState({
                name: Power.name,
                description: Power.description
            });
        });
    }

    updatePower = (e) => {
        e.preventDefault();
        let Power = { name: this.state.name, description: this.state.description };
        console.log('Power => ' + JSON.stringify(Power));
        console.log('id => ' + JSON.stringify(this.state.id));
        PowerService.updatePower(Power, this.state.id).then(res => {
            this.props.history.push('/Powers');
        });
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

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Power</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input placeholder="Name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Description" name="description" className="form-control"
                                            value={this.state.description} onChange={this.changeDescriptionHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updatePower}>Save</button>
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

export default UpdatePowerComponent
