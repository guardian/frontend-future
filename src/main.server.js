import { render } from 'preact-render-to-string';
import { StyletronProvider } from 'styletron-preact';
import StyletronServer from 'styletron-server';

import Html from 'layout/html';
import Root from 'layout/root';

const styletron = new StyletronServer();

const rootHtml = render(
    <StyletronProvider styletron={styletron}><Root /></StyletronProvider>
);

export default render(
    <Html html={rootHtml} css={styletron.getStylesheetsHtml()} />
);
