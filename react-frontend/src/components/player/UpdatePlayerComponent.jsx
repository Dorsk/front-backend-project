import React, { Component } from 'react'
import PlayerService from '../../services/PlayerService';

class UpdatePlayerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            pseudo: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePseudoHandler = this.changePseudoHandler.bind(this);
        this.updatePlayer = this.updatePlayer.bind(this);
    }

    componentDidMount() {
        PlayerService.getPlayerById(this.state.id).then((res) => {
            let Player = res.data;
            this.setState({
                id: Player.id,
                firstName: Player.firstName,
                lastName: Player.lastName,
                emailId: Player.emailId,
                pseudo: Player.pseudo
            });
        });
    }

    updatePlayer = (e) => {
        e.preventDefault();
        let Player = { id: this.state.id, firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, pseudo: this.state.pseudo };
        console.log('Player => ' + JSON.stringify(Player));
        console.log('id => ' + JSON.stringify(this.state.id));
        PlayerService.updatePlayer(Player, this.state.id).then(res => {
            this.props.history.push('/Players');
        });
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }

    changePseudoHandler = (event) => {
        this.setState({ pseudo: event.target.value });
    }

    cancel() {
        this.props.history.push('/Players');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Player</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control"
                                            value={this.state.emailId} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Pseudo: </label>
                                        <input placeholder="Pseudo" name="pseudo" className="form-control"
                                            value={this.state.pseudo} onChange={this.changePseudoHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.updatePlayer}>Save</button>
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

export default UpdatePlayerComponent
