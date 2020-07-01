import React, {Component} from "react";
import ListItem from "./ListItem";

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
            {this.state.films.map(film =>
                <ListItem key={film} itemName={film} onDelete={() => this.deleteFilm(film)}/>
            )}
        </ul>);
    }
}