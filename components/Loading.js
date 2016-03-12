import React, { PropTypes, Component } from 'react'
let timerId = 0

export default class Loading extends Component {
  componentDidMount() {
    this.setBarWidth(0)
  }

  componentWillUnmount() {
    clearTimeout(timerId)
  }

  setBarWidth(width) {
    const num = width + 1
    timerId = window.setTimeout(() => {
      this.setBarWidth(num)
    }, 5)
  }

  render() {
    const width = this.props.width

    return (
      <div className="overlay" id="loading">
        <div className="progress">
          <div className="bar" style={ { width } }></div>
        </div>
      </div>
    )
  }
}

Loading.defaultProps = { width: 10 }
Loading.propTypes = { width: PropTypes.number }
