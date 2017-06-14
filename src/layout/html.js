import Body from 'layout/body';

import render from 'lib/render-server';

const { css, html } = render(<Body />);

export default () =>
    <html lang="en">
        {/* eslint-disable react/no-danger */}
        <head dangerouslySetInnerHTML={{ __html: css }} />
        <body>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <script src="/bundle.browser.js" />
        </body>
        {/* eslint-enable react/no-danger */}
    </html>;
