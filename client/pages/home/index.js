import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'
import { SearchBar } from '../../components/searchBar'
import { VideoPlayer } from '../../components/videoPlayer'
import { VideoList } from '../../components/videoList'


const YT_API = 'AIzaSyAO0bjnZkdHR5ZUCijnlCG5bgQi5FzdlLY' // app-name ssr-youtube

export class Home extends Component {
  onSearchSubmit(value) {
    console.log('form submited', value)
  }

  render() {
    return (
      <main>
        <div className="container">
          <div className="left">
            <SearchBar onFormSubmit={this.onSearchSubmit} />
            <VideoPlayer />
          </div>
          <div className="right">
            <VideoList />
          </div>
        </div>
      </main>
    )
  }
}
