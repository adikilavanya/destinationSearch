import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {DestinationsList} = this.props

    const searchResults = DestinationsList.filter(eachUser =>
      eachUser.name.toLowerCase.includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg">
        <h1 className="heading">Destination Search</h1>
        <div>
          <input
            type="search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <img
            alt="destinationsList"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            className="img"
          />
        </div>
        <ul>
          {searchResults.map(eachUser => (
            <DestinationItem
              key={eachUser.id}
              destinantionDetails={this.eachUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
