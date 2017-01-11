import preact, { render } from 'preact';
import FaciaCardMeta from './src/FaciaCardMeta.jsx';
import FaciaCardMetaSocialContainer from './src/FaciaCardMetaSocialContainer.jsx';
/** @jsx preact.h */

// Pure functional component
insertComponent({
  containerClass: '.js-item__meta',
  renderCb: el => render(FaciaCardMeta(el.getAttribute('data-componentData')), el),
});

// Simulate ajax request, data probably got from the data attribute again
insertComponent({
  containerClass: '.js-item__meta--social',
  renderCb: el => render(<FaciaCardMetaSocialContainer count="3000" />, el),
});


// General function for inserting and mounting a component
function insertComponent({
  containerClass,
  renderCb,
}) {
  const componentContainers = document.querySelectorAll(containerClass);

  for (let i = 0; i < componentContainers.length; i += 1) {
    renderMetaContainer(componentContainers[i]);
  }

  function renderMetaContainer(el) {
    renderCb(el);
    // render(component(data || el.getAttribute(dataAttr)), el);
  }
}
