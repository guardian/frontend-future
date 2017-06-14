import { render } from 'preact';
import { StyletronProvider } from 'styletron-preact';
import StyletronClient from 'styletron-client';

import Root from 'layout/root';

const container = document.getElementById('root');

function renderApp() {
    render(
        <StyletronProvider
            styletron={
                new StyletronClient(
                    document.getElementsByClassName('_styletron_hydrate_')
                )
            }>
            <Root />
        </StyletronProvider>,
        container.parentElement,
        container
    );
}

if (module.hot) {
    module.hot.accept();
    module.hot.accept('layout/root', renderApp);
}

renderApp();
