/** @jsx preact.h */

import preact, { render } from 'preact';

import FaciaCardMeta from 'specifics/FaciaCard/FaciaCardMeta/FaciaCardMeta';
import MetaSocialContainer from 'specifics/Social/MetaSocialContainer';
import RichLinkContainer from 'specifics/RichLink/RichLinkContainer';

import insertComponent from 'utils/insertComponent';

// Pure functional component
insertComponent({
  mountId: 'itemMeta',
  renderCb: el => render(FaciaCardMeta(el.getAttribute('data-componentData')), el),
});

// Simulate ajax request, data probably got from the data attribute again
insertComponent({
  mountId: 'metaSocial',
  renderCb: el => render(<MetaSocialContainer count="3000" />, el),
});

// Lets mount some rich-links shall we
insertComponent({
  mountId: 'richLink',
  renderCb: el => render(RichLinkContainer(el.getAttribute('data-componentData')), el),
});
