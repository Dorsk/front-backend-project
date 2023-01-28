import React, { Component } from 'react'
import PowerService from '../../services/PowerService'

class ListPowerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            power: []
        }
        this.addPower = this.addPower.bind(this);
        this.editPower = this.editPower.bind(this);
        this.deletePower = this.deletePower.bind(this);
    }

    deletePower(id) {
        PowerService.deletePower(id).then(res => {
            this.setState({ power: this.state.power.filter(power => power.id !== id) });
        });
    }
    viewPower(id) {
        this.props.history.push(`/view-power/${id}`);
    }
    editPower(id) {
        this.props.history.push(`/update-power/${id}`);
    }

    componentDidMount() {
        PowerService.getPowers().then((res) => {
            this.setState({ power: res.data });
        });
    }

    addPower() {
        this.props.history.push('/add-power/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Power List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addPower}> Add Power</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Name</th>
                                <th> Description</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.power.map(
                                    power =>
                                        <tr key={power.id}>
                                            <td> {power.name} </td>
                                            <td> {power.description}</td>
                                            <td>
                                                <button onClick={() => this.editPower(power.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deletePower(power.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewPower(power.id)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListPowerComponent
