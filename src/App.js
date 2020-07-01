import React, {Component} from 'react';
import './App.css';
import List from "./List";
import NewFilmInput from "./NewFilmInput";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            films: []
        }

        this.addFilm = this.addFilm.bind(this);
        this.deleteFilm = this.deleteFilm.bind(this);
    }

    addFilm(filmName) {
        const filmsBefore = this.state.films;
        const filmsNow = [...filmsBefore, filmName];
        this.setState({
            films: filmsNow
        });
    }

    deleteFilm(filmName) {
        const films = [...this.state.films];
        const index = films.indexOf(filmName);

        films.splice(index, 1);

        this.setState({
            films: films
        });
    }

    render() {
        return (
            <div>
                <h2>Films to watch</h2>
                <List
                    films={this.state.films}
                    deleteFilm={this.deleteFilm}/>
                <NewFilmInput onSubmit={this.addFilm}/>
            </div>
        );
    }
}

export default App;
