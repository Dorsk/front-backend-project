import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="fixed-bottom">
                <footer className="footer" >
                    <span className="text-muted">Game</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
