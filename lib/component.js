import render from 'preact-render-to-string';

import { StyletronProvider, styled } from 'styletron-preact';
import Styletron from 'styletron-server';

const styletron = new Styletron();

const renderComponent = src => {
    const html = render(
        <StyletronProvider styletron={styletron}>
            {src}
        </StyletronProvider>,
    );
    return { html, css: styletron.getStylesheetsHtml() };
};

export const el = (name, style) => styled(name, style);
export { renderComponent as render };
