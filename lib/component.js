import { render as renderToString } from 'preact-render-to-string';

import { StyletronProvider, styled } from 'styletron-preact';

// thank you treeshaking
import StyletronClient from 'styletron-client';
import StyletronServer from 'styletron-server';

// function that creates whatever kind of object our framework needs
const el = (name, style) => styled(name, style);

const renderBrowserComponent = src => {
    const styleElements = document.getElementsByClassName(
        '_styletron_hydrate_',
    );
    return renderToString(
        <StyletronProvider styletron={new StyletronClient(styleElements)}>
            {src}
        </StyletronProvider>,
        document.getElementById('app'),
    );
};

const renderServerComponent = src => {
    const styletron = new StyletronServer();
    const html = renderToString(
        <StyletronProvider styletron={styletron}>
            {src}
        </StyletronProvider>,
    );
    return { html, css: styletron.getStylesheetsHtml() };
};

const render = BROWSER ? renderBrowserComponent : renderServerComponent;

export { render, el };
