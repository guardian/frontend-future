/** @jsx h */

import { h } from 'preact';

import RichLink from './RichLink';

export default (data) => {
  const richLink = JSON.parse(data);
  return (<RichLink
    tone={richLink.tone}
    title={richLink.title}
  />);
};
