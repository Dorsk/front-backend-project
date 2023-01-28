import React, { Component } from 'react'
import ItemsService from '../../services/ItemsService'

class ListItemsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
        this.addItems = this.addItems.bind(this);
        this.editItems = this.editItems.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
    }

    deleteItems(id) {
        ItemsService.deleteItems(id).then(res => {
            this.setState({ items: this.state.items.filter(items => items.id !== id) });
        });
    }
    viewItems(id) {
        this.props.history.push(`/view-items/${id}`);
    }
    editItems(id) {
        this.props.history.push(`/update-items/${id}`);
    }

    componentDidMount() {
        ItemsService.getItems().then((res) => {
            this.setState({ items: res.data });
        });
    }

    addItems() {
        this.props.history.push('/add-items/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Items List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addItems}> Add Items</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Name</th>
                                <th> langue</th>
                                <th> Description</th>
                                <th> Gold</th>
                                <th> Intel</th>
                                <th> Force</th>
                                <th> Agilité</th>
                                <th> Armure Physique</th>
                                <th> Armure magique</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.items.map(
                                    items =>
                                        <tr key={items.id}>
                                            <td> {items.name} </td>
                                            <td> {items.langue}</td>
                                            <td> {items.description}</td>
                                            <td> {items.gold}</td>
                                            <td> {items.intelligence}</td>
                                            <td> {items.force}</td>
                                            <td> {items.agility}</td>
                                            <td> {items.armorDefence}</td>
                                            <td> {items.magicDefence}</td>
                                            <td>
                                                <button onClick={() => this.editItems(items.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteItems(items.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewItems(items.id)} className="btn btn-info">View </button>
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

export default ListItemsComponent
