import React, { Component, PropTypes } from 'react'

class Tour extends Component {
  render() {
    const { name, seasons, activeSeason, changeSeason } = this.props
    return (
      <div>
        <header className="contentheader">
          <h2>{name.toUpperCase()}</h2>
          <ul>
            {seasons.map((season, i) =>
              <li key={i} className={activeSeason === parseInt(season.id, 10) ? 'active' : ''}>
                <a href="#" onClick={changeSeason.bind(null, season.id)}>
                  {season.id}
                </a>
              </li>
            )}
          </ul>
        </header>
        <section className="content">
        </section>
      </div>
    )
  }
}

Tour.propTypes = {
  name: PropTypes.string.isRequired,
  seasons: PropTypes.array.isRequired,
  activeSeason: PropTypes.number,
  changeSeason: PropTypes.func.isRequired
}

export default Tour
