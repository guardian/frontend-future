// @flow
import { render } from 'preact';
import { StyletronProvider } from 'styletron-preact';
import StyletronClient from 'styletron-client';

import Body from 'layout/body.jsx';

const container: ?Element = document.body;

function renderApp() {
    if (container) {
        render(
            <StyletronProvider
                styletron={
                    new StyletronClient(
                        document.getElementsByClassName('_styletron_hydrate_')
                    )
                }>
                <Body />
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
    module.hot.accept('layout/body', renderApp);
}

document.addEventListener('DOMContentLoaded', renderApp);
