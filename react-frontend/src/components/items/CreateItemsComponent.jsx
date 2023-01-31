import React, { Component } from 'react'
import Combobox from "react-widgets/Combobox";
import ItemsService from '../../services/ItemsService';

class CreateItemsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            langue: '',
            description: '',
            gold: '',
            intelligence: '',
            force: '',
            agility: '',
            armorDefence: '',
            magicDefence: '',
            emplacement: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeLangueHandler = this.changeLangueHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeGoldHandler = this.changeGoldHandler.bind(this);
        this.changeIntHandler = this.changeIntHandler.bind(this);
        this.changeForHandler = this.changeForHandler.bind(this);
        this.changeAgiHandler = this.changeAgiHandler.bind(this);
        this.changeArmorDefenceHandler = this.changeArmorDefenceHandler.bind(this);
        this.changeArmorMagicHandler = this.changeArmorMagicHandler.bind(this);
        this.changeEmplacementHandler = this.changeEmplacementHandler.bind(this);
        this.saveOrUpdateItems = this.saveOrUpdateItems.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            ItemsService.getItemsById(this.state.id).then((res) => {
                let Items = res.data;
                this.setState({
                    name: Items.name,
                    langue: Items.langue,
                    description: Items.description,
                    gold: Items.gold,
                    intelligence: Items.intelligence,
                    force: Items.force,
                    agility: Items.agility,
                    armorDefence: Items.armorDefence,
                    magicDefence: Items.magicDefence,
                    emplacement: Items.emplacement
                });
            });
        }
    }
    saveOrUpdateItems = (e) => {
        e.preventDefault();
        let Items = {
            name: this.state.name, langue: this.state.langue, description: this.state.description, gold: this.state.gold,
            intelligence: this.state.intelligence, force: this.state.force, agility: this.state.agility, armorDefence: this.state.armorDefence,
            magicDefence: this.state.magicDefence, emplacement: this.state.emplacement
        };
        console.log('Items => ' + JSON.stringify(Items));

        // step 5
        if (this.state.id === '_add') {
            ItemsService.createItems(Items).then(res => {
                this.props.history.push('/Items');
            });
        } else {
            ItemsService.updateItems(Items, this.state.id).then(res => {
                this.props.history.push('/Items');
            });
        }
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    changeLangueHandler = (event) => {
        this.setState({ langue: event.target.value });
    }

    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }

    changeGoldHandler = (event) => {
        this.setState({ gold: event.target.value });
    }

    changeIntHandler = (event) => {
        this.setState({ intelligence: event.target.value });
    }

    changeForHandler = (event) => {
        this.setState({ force: event.target.value });
    }

    changeAgiHandler = (event) => {
        this.setState({ agility: event.target.value });
    }

    changeArmorDefenceHandler = (event) => {
        this.setState({ armorDefence: event.target.value });
    }

    changeArmorMagicHandler = (event) => {
        this.setState({ magicDefence: event.target.value });
    }

    changeEmplacementHandler = (event) => {
        this.setState({ emplacement: event.target.value });
    }

    cancel() {
        this.props.history.push('/Items');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Items</h3>
        } else {
            return <h3 className="text-center">Update Items</h3>
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
                                        <input placeholder="Name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Langue" name="langue" className="form-control"
                                            value={this.state.langue} onChange={this.changeLangueHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Decription" name="description" className="form-control"
                                            value={this.state.description} onChange={this.changeDescriptionHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Gold" name="gold" className="form-control"
                                            value={this.state.gold} onChange={this.changeGoldHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Intelligence" name="intelligence" className="form-control"
                                            value={this.state.intelligence} onChange={this.changeIntHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Force" name="force" className="form-control"
                                            value={this.state.force} onChange={this.changeForHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Agilité" name="agility" className="form-control"
                                            value={this.state.agility} onChange={this.changeAgiHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Armure physique" name="armorDefence" className="form-control"
                                            value={this.state.armorDefence} onChange={this.changeArmorDefenceHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Armure magique" name="magicDefence" className="form-control"
                                            value={this.state.magicDefence} onChange={this.changeArmorMagicHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Emplacement" name="emplacement" className="form-control"
                                            value={this.state.emplacement} onChange={this.changeEmplacementHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateItems}>Save</button>
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

export default CreateItemsComponent
