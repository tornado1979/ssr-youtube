import React from 'react'
import propTypes from 'prop-types'

export class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { query: '' }
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event) {
    this.setState({ query: event.target.value })
    const {
      onChange,
    } = this.props

    onChange(event.target.value)
  }

  render() {
    const {
      query,
    } = this.state
    return (
      <div className="search-bar segment">
        <form className="form">
          <div className="field">
            <input
              id="searchInput"
              name="searchInput"
              onChange={this.onInputChange}
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
  onChange: propTypes.func.isRequired,
}
