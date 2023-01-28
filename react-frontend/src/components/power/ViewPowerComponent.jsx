import React, { Component } from 'react'
import PowerService from '../../services/PowerService'

class ViewPowerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            power: {}
        }
    }

    componentDidMount() {
        PowerService.getPowerById(this.state.id).then(res => {
            this.setState({ power: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Power Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <div> {this.state.power.name}</div>
                        </div>
                        <div className="row">
                            <div> {this.state.power.description}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPowerComponent
