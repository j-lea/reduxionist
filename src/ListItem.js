import React, {Component} from "react";

export default class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<li className='film' key={this.props.itemName}>
            <span className='name'>{this.props.itemName}</span>
            <span className='delete' onClick={() => this.props.onDelete()}>X</span>
        </li>)
    }
}