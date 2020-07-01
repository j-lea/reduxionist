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
    }

    addFilm(filmName) {
        const filmsBefore = this.state.films;
        const filmsNow = [...filmsBefore, filmName];
        this.setState({
            films: filmsNow
        });
    }

    render() {
        return (
            <div>
                <h2>Films to watch</h2>
                <List films={this.state.films}/>
                <NewFilmInput onSubmit={this.addFilm.bind(this)}/>
            </div>
        );
    }
}

export default App;
