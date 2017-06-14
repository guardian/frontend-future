export default props =>
    <html lang="en">
        {/* eslint-disable react/no-danger */}
        <head dangerouslySetInnerHTML={{ __html: props.css }} />
        <body>
            <div dangerouslySetInnerHTML={{ __html: props.html }} />
            <script src="/bundle.browser.js" />
        </body>
        {/* eslint-enable react/no-danger */}
    </html>;
