import React from 'react'
import propTypes from 'prop-types'

export class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { query: '' }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.keyPress = this.keyPress.bind(this)
  }

  onInputChange(event) {
    this.setState({ query: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault()

    const {
      onFormSubmit,
    } = this.props

    const {
      query,
    } = this.state

    onFormSubmit(query)
  }

  keyPress(event) {
    if (event.keyCode === 13) {
      this.onFormSubmit(event)
    }
  }

  render() {
    const {
      query,
    } = this.state
    return (
      <div className="search-bar segment">
        <form className="form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <input
              id="searchInput"
              name="searchInput"
              onChange={this.onInputChange}
              onKeyDown={this.keyPress}
              placeholder="Search.."
              type="text"
              value={query}
            />
          </div>
        </form>
      </div>
    )
  }
}

SearchBar.propTypes = {
  onFormSubmit: propTypes.func.isRequired,
}
