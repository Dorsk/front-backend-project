import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="/" className="navbar-brand"><h2>Game</h2></a></div>

                        <div><a href="/Items" className="navbar-brand">Items</a></div>

                        <div><a href="/Players" className="navbar-brand">Players</a></div>

                        <div><a href="/Powers" className="navbar-brand">Powers</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
