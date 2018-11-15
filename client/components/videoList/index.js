import React from 'react'
import propTypes from 'prop-types'
import { VideoItem } from '../videoItem'

export const VideoList = ({ videos, onVideoSelect }) => {
  if (!videos.length) {
    return <div>Loading...</div>
  }

  const videoItems = videos.map(video => {
    return (
      <VideoItem
        key={video.etag}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    )
  })

  return (
    <ul className="videoList">
      {videoItems}
    </ul>
  )
}

VideoList.propTypes = {
  videos: propTypes.arrayOf(VideoItem).isRequired,
  onVideoSelect: propTypes.func.isRequired,
}
