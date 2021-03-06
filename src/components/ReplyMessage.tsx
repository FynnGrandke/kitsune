import React from 'react';
import { addReply } from '../auxiliary/addReply';

interface State {
  message: string;
  id: string;
}

// FIXME: If the button is clicked again the name changes but the messages and everything stays the same

// Allows to write a reply to a random message
export class ReplyMessage extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);

    this.state = {
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      id: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.createCapitalLetter = this.createCapitalLetter.bind(this);
  }

  async componentDidMount(): Promise<void> {
    const reply = await fetch('/entries');
    const myJson = await reply.json();

    this.setState({ message: myJson.message, id: myJson.id });
  }

  buttonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    addReply({ id: this.state.id, reply: this.state.message });

    event.preventDefault();
  }

  createCapitalLetter() {
    return String.fromCharCode(Math.floor((Math.random() * (90 - 65)) + 65));
  }

  handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <div className="w-full max-w-xl inputField rounded">
        <div className="w-full max-w-xl rounded overflow-hidden">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Message from {this.createCapitalLetter()}.</div>
            <p className="text-gray-700 text-base">
              {this.state.message}
            </p>
          </div>
        </div>
        <form className="rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Your Reply
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline messageInput"
              rows={6}
              id="message"
              placeholder="Can you give a helpful reply?"
              onChange={this.handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              onClick={this.buttonClick}
            >
              Send Reply
            </button>
          </div>
        </form>
      </div>
    );
  }
}

