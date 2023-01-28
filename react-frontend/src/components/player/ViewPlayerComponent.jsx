import React, { Component } from 'react'
import PlayerService from '../../services/PlayerService'

class ViewPlayerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            player: {}
        }
    }

    componentDidMount() {
        PlayerService.getPlayerById(this.state.id).then(res => {
            this.setState({ player: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Player Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> First Name : </label>
                            <div> {this.state.player.firstName}</div>
                        </div>
                        <div className="row">
                            <label> Last Name : </label>
                            <div> {this.state.player.lastName}</div>
                        </div>
                        <div className="row">
                            <label> Email : </label>
                            <div> {this.state.player.emailId}</div>
                        </div>
                        <div className="row">
                            <label> Pseudo : </label>
                            <div> {this.state.player.pseudo}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPlayerComponent
