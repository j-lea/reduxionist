import React, {Component} from "react";

export default class NewFormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmName: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            filmName: e.currentTarget.value
        });
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.filmName);
        this.setState({
            filmName: ''
        });
    }

    render() {
        return (<form onSubmit={this.onFormSubmit}>
            <label>
                Film Name
                <input
                    type='text'
                    name='film-name'
                    value={this.state.filmName}
                    onChange={this.handleChange}
                />
            </label>
            <input type='submit' value='Add Film'/>
        </form>)
    }
}