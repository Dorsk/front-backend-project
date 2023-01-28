import React, { Component } from 'react'
import ItemsService from '../../services/ItemsService'

class ViewItemsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            items: {}
        }
    }

    componentDidMount() {
        ItemsService.getItemsById(this.state.id).then(res => {
            this.setState({ items: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> Items Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <div> {this.state.items.name}</div>
                        </div>
                        <div className="row">
                            <div> {this.state.items.langue}</div>
                        </div>
                        <div className="row">
                            <div> {this.state.items.description}</div>
                        </div>
                        <div className="row">
                            <div> {this.state.items.gold}</div>
                        </div>
                        <div className="row">
                            <div> {this.state.items.intelligence}</div>
                        </div>
                        <div className="row">
                            <div> {this.state.items.force}</div>
                        </div>
                        <div className="row">
                            <div> {this.state.items.agility}</div>
                        </div>
                        <div className="row">
                            <div> {this.state.items.armorDefence}</div>
                        </div>
                        <div className="row">
                            <div> {this.state.items.armorDefence}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewItemsComponent
