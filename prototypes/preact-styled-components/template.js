export default ({ body, title, styles }) => `
  <!doctype html>
  <html>
  <head>
    <title>${title}</title>
      <link rel="stylesheet" href="http://pasteup.guim.co.uk/0.0.5/css/fonts.pasteup.min.css">
      <link rel="stylesheet" href="/normalize.css">
      <link rel="stylesheet" href="/base-styles.css">
      <style>
        ${styles}
      </style>
  </head>
  <body>
    <div class="main-container">
      ${body}
    </div>
  </body>
  <script src="/preact-styled-components/dist/assets/bundle.js"></script>
  </html>
  `;
