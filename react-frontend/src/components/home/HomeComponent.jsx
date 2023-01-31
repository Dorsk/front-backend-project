import React, { Component } from 'react';
import ListPlayerComponent from './../player/ListPlayerComponent';
import ListItemsComponent from './../items/ListItemsComponent';
import ListPowerComponent from './../power/ListPowerComponent';

class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div class="mx-auto"><ListPowerComponent /></div>
                    <div class="mx-auto"><ListPlayerComponent /></div>
                    <div class="mx-auto"><ListItemsComponent /></div>
                </div>
            </div >

        );
    }
}
export default HomeComponent;
