import React from 'react'
import propTypes from 'prop-types'

export const VideoPlayer = ({ video }) => {
  if (!Object.keys(video).length) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?enablejsapi=1`

  return (
    <div className="videoPlayer">
      <div className="embed">
        <iframe
          frameBorder="0"
          id="player"
          src={videoSrc}
          style={{ border: 'solid 4px #37474F' }}
          title="video player"
          type="text/html"
        />
      </div>
      <div className="segment">
        <h4 className="header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

VideoPlayer.propTypes = {
  video: propTypes.shape({
    id: propTypes.shape({
      videoId: propTypes.string.isRequired,
    }),
    snippet: propTypes.shape({
      description: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
    }),
  }).isRequired,
}
