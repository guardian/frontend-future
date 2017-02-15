/** @jsx h */

import { h, Component } from 'preact';

import MetaSocial from './MetaSocial/MetaSocial';

export default class MetaSocialContainer extends Component {
  constructor(props) {
    super();

    // Set the initial count
    this.state.count = props.count;
  }

  componentDidMount() {
        // update time every second
    this.timer = setInterval(() => {
      this.setState({ count: Math.round(Math.random() * 1000) });
    }, 2000);
  }

  render(props = {}, state) {
    return (
      <MetaSocial count={state.count} />
    );
  }
}
