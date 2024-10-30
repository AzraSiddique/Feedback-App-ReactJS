import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {emojiClicked: false}

  loveEmoji = () => {
    this.setState(prevState => ({
      emojiClicked: !prevState.emojiClicked,
    }))
  }

  render() {
    const {emojiClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="container">
        <div className="sub-container">
          {emojiClicked ? (
            <div className="thankyou-container">
              <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
              <h1 className="heading">Thank you</h1>
              <p className="feedback-para">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </div>
          ) : (
            <div className="emoji-container">
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <div className="emojis-subcontainer">
                <ul className="emojis">
                  {emojis.map(eachEmoji => (
                    <li
                      className="list-item"
                      key={eachEmoji.id}
                      onClick={this.loveEmoji}
                    >
                      <img
                        src={eachEmoji.imageUrl}
                        className="emoji"
                        alt={eachEmoji.name}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
