// @flow
import { render } from 'preact-render-to-string';
import { StyletronProvider } from 'styletron-preact';
import StyletronServer from 'styletron-server';

import Body from 'layouts/body';

const styletron = new StyletronServer();

const bodyHTML = render(
    <StyletronProvider styletron={styletron}>
        <Body />
    </StyletronProvider>
);

export default `
    <html lang="en">
        <head>
            <title>${require('../package.json').name}</title>
            ${styletron.getStylesheetsHtml()}
            <script src="/bundle.browser.js" async defer></script>
        </head>
        ${bodyHTML}
    </html>
`;
