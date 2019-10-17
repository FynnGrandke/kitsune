import React from 'react';
import { WriteMessage } from './WriteMessage';
import { ReplyMessage } from './ReplyMessage';

interface State {
  visibleComponent: JSX.Element;
}

// The menu which enables to switch between writing a reply or a message
export class Menu extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      visibleComponent: <WriteMessage />
    };

    this.changeComponentToMessage = this.changeComponentToMessage.bind(this);
    this.changeComponentToReply = this.changeComponentToReply.bind(this);
  }

  changeComponentToMessage() {
    this.setState({ visibleComponent: <WriteMessage /> });
  }

  changeComponentToReply() {
    this.setState({ visibleComponent: <ReplyMessage /> });
  }

  render() {
    return (
      <div>
        <div className="absolute flex flex-row content-between z-10 menuButton">
          {/* TODO: Add fancier buttons instead of these ugly icons */}
          <button className="text-4xl overflow-hidden m-4 h-10" onClick={this.changeComponentToMessage}>❤️</button>
          <button className="text-5xl overflow-hidden m-4 h-10" style={{ lineHeight: '3.2rem' }} onClick={this.changeComponentToReply}>💌</button>
        </div>
        {this.state.visibleComponent}
      </div>
    );
  }
}

