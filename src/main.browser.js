// @flow
import { render } from 'preact';
import { StyletronProvider } from 'styletron-preact';
import StyletronClient from 'styletron-client';

import Root from 'layout/root';

const container: ?Element = document.getElementById('root');

function renderApp() {
    if (container) {
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
            // preact uses react's flowtype definition for `render`, which is weird,
            // given https://preactjs.com/guide/differences-to-react#what-s-different-
            // $FlowFixMe
            container
        );
    }
}

if (module.hot) {
    module.hot.accept('layout/root', renderApp);
}

renderApp();
