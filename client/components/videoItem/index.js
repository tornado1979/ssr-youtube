import React from 'react'
import propTypes from 'prop-types'

export const VideoItem = ({ video, onVideoSelect }) => {
  const imgUrl = video.snippet.thumbnails.default.url

  return (
    <li className="list-group-item">
      <div aria-pressed="false" className="video-list media" onClick={() => { onVideoSelect(video) }} role="button" tabIndex="0">
        <div className="media-left">
          <img alt={video.snippet.title} className="media-object" src={imgUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}

VideoItem.propTypes = {
  video: propTypes.shape({
    id: propTypes.shape({
      videoId: propTypes.string.isRequired,
    }),
    snippet: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
  }).isRequired,
  onVideoSelect: propTypes.func.isRequired,
}
