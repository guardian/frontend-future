import render from 'lib/render-client';
import Body from 'layout/body';

const container = document.getElementById('gu');

function renderApp() {
    const body = <Body />;

    render(body, container);
}

if (module.hot) {
    module.hot.accept();
    module.hot.accept('layout/body', renderApp);
}

renderApp();
