import render from 'preact-render-to-string';

import { StyletronProvider, styled } from 'styletron-preact';

// rollup will elminate the unused bundle here
import StyletronClient from 'styletron-client';
import StyletronServer from 'styletron-server';

const el = (name, style) => styled(name, style);

const renderBrowserComponent = src => {
    const styleElements = document.getElementsByClassName(
        '_styletron_hydrate_',
    );
    return render(
        <StyletronProvider styletron={new StyletronClient(styleElements)}>
            {src}
        </StyletronProvider>,
        document.getElementById('app'),
    );
};

const renderServerComponent = src => {
    const styletron = new StyletronServer();
    const html = render(
        <StyletronProvider styletron={styletron}>
            {src}
        </StyletronProvider>,
    );
    return { html, css: styletron.getStylesheetsHtml() };
};

const renderComponent = BROWSER
    ? renderBrowserComponent
    : renderServerComponent;

export { renderComponent as render, el };
