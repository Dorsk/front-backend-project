import React, { Component } from 'react'
import ItemsService from '../../services/ItemsService';

class UpdateItemsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            langue: '',
            description: '',
            gold: '',
            intelligence: '',
            force: '',
            agility: '',
            armorDefence: '',
            magicDefence: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeLangueHandler = this.changeLangueHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeGoldHandler = this.changeGoldHandler.bind(this);
        this.changeIntelligenceHandler = this.changeIntelligenceHandler.bind(this);
        this.changeForceHandler = this.changeForceHandler.bind(this);
        this.changeAgilityHandler = this.changeAgilityHandler.bind(this);
        this.changeArmorDefenceHandler = this.changeArmorDefenceHandler.bind(this);
        this.changeMagicDefenceHandler = this.changeMagicDefenceHandler.bind(this);
        this.updateItems = this.updateItems.bind(this);
    }

    componentDidMount() {
        ItemsService.getItemsById(this.state.id).then((res) => {
            let Items = res.data;
            this.setState({
                id: Items.id,
                name: Items.name,
                langue: Items.langue,
                description: Items.description,
                gold: Items.gold,
                intelligence: Items.intelligence,
                force: Items.force,
                agility: Items.agility,
                armorDefence: Items.armorDefence,
                magicDefence: Items.magicDefence
            });
        });
    }

    updateItems = (e) => {
        e.preventDefault();
        let Items = {
            id: this.state.id, name: this.state.name, langue: this.state.langue, description: this.state.description, gold: this.state.gold,
            intelligence: this.state.intelligence, force: this.state.force, agility: this.state.agility, armorDefence: this.state.armorDefence, magicDefence: this.state.magicDefence
        };
        console.log('Items => ' + JSON.stringify(Items));
        console.log('id => ' + JSON.stringify(this.state.id));
        ItemsService.updateItems(Items, this.state.id).then(res => {
            this.props.history.push('/Items');
        });
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

    changeIntelligenceHandler = (event) => {
        this.setState({ intelligence: event.target.value });
    }

    changeForceHandler = (event) => {
        this.setState({ force: event.target.value });
    }

    changeAgilityHandler = (event) => {
        this.setState({ agility: event.target.value });
    }

    changeArmorDefenceHandler = (event) => {
        this.setState({ armorDefence: event.target.value });
    }

    changeMagicDefenceHandler = (event) => {
        this.setState({ magicDefence: event.target.value });
    }

    cancel() {
        this.props.history.push('/Items');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Items</h3>
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
                                            value={this.state.intelligence} onChange={this.changeIntelligenceHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Force" name="force" className="form-control"
                                            value={this.state.force} onChange={this.changeForceHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Agilité" name="agility" className="form-control"
                                            value={this.state.agility} onChange={this.changeAgilityHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Armure physique" name="armorDefence" className="form-control"
                                            value={this.state.armorDefence} onChange={this.changeArmorDefenceHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Armure magique" name="magicDefence" className="form-control"
                                            value={this.state.magicDefence} onChange={this.changeMagicDefenceHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateItems}>Save</button>
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

export default UpdateItemsComponent
