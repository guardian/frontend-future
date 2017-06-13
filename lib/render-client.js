import { render } from 'preact';
import { StyletronProvider } from 'styletron-preact';
import StyletronClient from 'styletron-client';

export default (src, target) =>
    render(
        <StyletronProvider
            styletron={
                new StyletronClient(
                    document.getElementsByClassName('_styletron_hydrate_')
                )
            }>
            {src}
        </StyletronProvider>,
        target.parentElement,
        target
    );
