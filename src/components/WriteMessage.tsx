import React from 'react';
import { sendMessage } from '../auxiliary/sendMessage';

interface State {
  message: string;
  id: string;
}

// Allows to write a random message to which others can reply
export class WriteMessage extends React.Component<{}, State> {

  constructor(props) {
    super(props);

    this.state = {
      message: '',
      id: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(event: React.MouseEvent) {
    event.preventDefault();

    const newId = this.createId();

    sendMessage({ id: newId, message: this.state.message });

    this.setState({ id: newId });
  }

  createId() {
    return Math.random().toString(36).substring(4);
  }

  handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <div className="w-full max-w-xl inputField rounded">
        {
          this.state.id === '' ?
            <form className="rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Your Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline messageInput"
                  rows={9}
                  id="message"
                  placeholder="What is on your mind? (Max. 240 signs)"
                  onChange={this.handleChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  onClick={this.buttonClick}
                >
                  Send Message
                </button>
              </div>
            </form>
            :
            <div className="w-full max-w-xl rounded overflow-hidden">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Thank you!</div>
                <p className="text-gray-700 text-base">
                  Check out the replies you got from strangers under this url
                </p>
                <a href={`http://www.kitsune.jp/${this.state.id}`}>{`http://www.kitsune.jp/${this.state.id}`}</a>
              </div>
            </div>
        }
      </div>
    );
  }
}

