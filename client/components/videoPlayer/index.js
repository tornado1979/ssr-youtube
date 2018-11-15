import React from 'react'
import propTypes from 'prop-types'

export const VideoPlayer = ({
  video = {
    id: {
      videoId: 'S2H5ZL20j44',
    },
    snippet: {
      description: 'Summer Music Mix 2018 - Camila Cabello, Ed Sheeran, Justin Bieber, Coldplay - Chill Out',
      title: 'Summer 2018',
    },
  },
}) => {
  if (!video) {
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
