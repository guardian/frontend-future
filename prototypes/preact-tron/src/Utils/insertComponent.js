/* @flow */
type args = {mountId: string; renderCb: Function};
export default (arg: args) => {
  const componentContainers = document.querySelectorAll(`[data-mountComponent="${arg.mountId}"]`);

  for (let i = 0; i < componentContainers.length; i += 1) {
    renderMetaContainer(componentContainers[i]);
  }

  function renderMetaContainer(el) {
    arg.renderCb(el);
    // render(component(data || el.getAttribute(dataAttr)), el);
  }
};
