// // @flow
// /* eslint-disable global-require */
import { render as renderToString } from 'preact-render-to-string';
import { StyletronProvider } from 'styletron-preact';
import StyletronServer from 'styletron-server';

import Body from 'layouts/body';

const styletron = new StyletronServer();

const body = props =>
    <StyletronProvider styletron={styletron}>
        <Body {...props} />
    </StyletronProvider>;

// the main export for the JVM JS interpreter to run
// eslint-disable-next-line import/prefer-default-export
export const render = (props: Object) => `
    <html lang="en">
        <head>
            <title>${props.page.headline} | ${props.page
    .section} | The Guardian</title>
            <style>
            *, * > * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            </style>
            ${styletron.getStylesheetsHtml()}
            <script>window.guardian = ${JSON.stringify(
                props,
                null,
                2
            )};</script>
            <script src="/bundle.browser.js" async defer></script>
        </head>
        ${renderToString(body(props))}
    </html>
`;
