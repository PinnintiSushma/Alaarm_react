import React, { Component } from 'react'
import './Alaram.css'
export default class Alaram extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clock: new Date()
        };
    }
    componentDidMount() {
        setInterval(() => { this.setState({ clock: new Date() }) })
    }
    componentDidUpdate() {
        if (this.state.clock.toLocaleTimeString() === '4:51:00 pm') {
            alert("Take a break")
        }
    }


    render() {
        return (
            <div className='para2'>
                <center>
                    <h1 className="ab">{this.state.clock.toLocaleTimeString()}</h1>
                </center>
            </div>
        )
    }
}




