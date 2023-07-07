import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    coinImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headsCount: 0,
    tailsCount: 0,
  }

  onCoinToss = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    const coinImg =
      tossResult === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    const heads = tossResult === 0 ? headsCount + 1 : headsCount
    const tails = tossResult !== 0 ? tailsCount + 1 : tailsCount
    this.setState({coinImage: coinImg, headsCount: heads, tailsCount: tails})
  }

  render() {
    const {coinImage, headsCount, tailsCount} = this.state
    return (
      <div className="app-container">
        <div className="app-card-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={coinImage} alt="toss result" />
          <button type="button" onClick={this.onCoinToss}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="count">Total: {headsCount + tailsCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
