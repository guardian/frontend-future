/** @jsx h */

import { h, render, Component } from 'preact';
import FaciaCardMetaSocial from './FaciaCardMetaSocial.jsx';

export default class FaciaCardMetaSocialContainer extends Component {
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
      <FaciaCardMetaSocial count={state.count} />
    );
  }
}
