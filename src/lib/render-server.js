import { render } from 'preact-render-to-string';
import { StyletronProvider } from 'styletron-preact';
import StyletronServer from 'styletron-server';

export default src => {
    const styletron = new StyletronServer();
    const html = render(
        <StyletronProvider styletron={styletron}>
            {src}
        </StyletronProvider>
    );
    return {
        html,
        css: styletron.getStylesheetsHtml(),
    };
};
