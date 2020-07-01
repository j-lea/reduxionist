import React, {Component} from "react";

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
          films: props.films
        };

        this.deleteFilm = this.deleteFilm.bind(this);
    }

    componentDidUpdate() {
        if (this.state.films !== this.props.films) {
            this.setState({
                films: this.props.films
            });
        }
    }

    deleteFilm(filmName) {
        this.props.deleteFilm(filmName);
    }

    render() {
        return (
        <ul>
            {this.state.films.map(film => <li
                className='film'
                key={film}>
                {film}
                <span
                    className='delete'
                    onClick={() => this.deleteFilm(film)}>
                    X
                </span>
            </li>)}
        </ul>);
    }
}