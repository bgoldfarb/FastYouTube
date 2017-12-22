//In React we are building individual components or views, snippets of code that produces HTML
//Nest components together in different fashions to make complex pages
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import _ from 'lodash'

const API_KEY = 'AIzaSyAPfJlcwBEKaqA-WGmVM3eSIZfTsVGbikg'
//Create a new component, this component should product some HTML
//const is a ES6 Syntax, final value of App, constant 
//This is a component class we need a component instance to use ReactDOM
class App extends Component {

    constructor(props){
        super(props)
        this.state = { 
            videos: [],
            selectedVideo: null
         }

         this.videoSearch('Pokemon');
    }

    videoSearch(term){

        YTSearch({ key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos ,
                selectedVideo: videos[0]
            })
        })

    }

    //Passing data from parent to child with props! Looks at VideoList below
    render(){

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 600)

        return (
        <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})} 
            videos = {this.state.videos} />
        </div> 
        )
    }
}

// Take this component's HTML and put it in the DOM, or on the page
ReactDOM.render(<App />, document.querySelector('.container')) 