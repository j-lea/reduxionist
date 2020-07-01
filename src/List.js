import React, {Component} from "react";

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
          films: props.films
        };
    }

    render() {
        return (
        <ul>
            {this.state.films.map(film => <li
                className='film'
                key={film}>
                {film}
            </li>)}
        </ul>);
    }
}