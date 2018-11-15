import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'
import { SearchBar } from '../../components/searchBar'
import { VideoPlayer } from '../../components/videoPlayer'
import { VideoList } from '../../components/videoList'

const YT_API = 'AIzaSyAO0bjnZkdHR5ZUCijnlCG5bgQi5FzdlLY' // app-name ssr-youtube

export class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null,
    }

    this.searchYoutube('')
    this.searchVideo = this.searchVideo.bind(this)
  }

  searchYoutube(term) {
    YTSearch({
      key: YT_API,
      term,
    }, (videos) => {
      this.setState({
        selectedVideo: videos[0],
        videos,
      })
    })
  }

  searchVideo(value) {
    setTimeout(() => {
      return this.searchYoutube(value)
    }, 300)
  }

  render() {
    const {
      selectedVideo,
      videos,
    } = this.state

    return (
      <main>
        <div className="container">
          <div className="left">
            <SearchBar
              onChange={searchTerm => (this.searchVideo(searchTerm))}
            />
            <VideoPlayer
              video={selectedVideo || {}}
            />
          </div>
          <div className="right">
            <VideoList
              onVideoSelect={() => { this.setState({ selectedVideo }) }}
              videos={videos || []}
            />
          </div>
        </div>
      </main>
    )
  }
}
