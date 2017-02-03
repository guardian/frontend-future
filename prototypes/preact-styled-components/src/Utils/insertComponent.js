export default ({
  mountId,
  renderCb,
}) => {
  const componentContainers = document.querySelectorAll(`[data-mountComponent="${mountId}"]`);

  for (let i = 0; i < componentContainers.length; i += 1) {
    renderMetaContainer(componentContainers[i]);
  }

  function renderMetaContainer(el) {
    renderCb(el);
    // render(component(data || el.getAttribute(dataAttr)), el);
  }
};
