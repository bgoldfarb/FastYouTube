import React, {Component} from 'react'


//every class must have a render function
//classes give more funtionality than functions
class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {term: ""};
    }

    render() {
        return (
            <div className="search-bar">
                 <input
                 value = {this.state.term}
                 onChange = {event => this.onInputChange(event.target.value) } />
            </div>
        );
    }

    onInputChange(term){

        this.setState({term});
        this.props.onSearchTermChange(term)

    }

}


export default SearchBar;

//Create event handler
//pass event handler
//state is a javascript object that us used to record and react to user events
//each class based comp. has it's own state object
//whenever a state is changed the component immed. re renders
//forces all of its children to render 