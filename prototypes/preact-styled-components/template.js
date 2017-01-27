export default ({ body, title, styles }) => `
  <!doctype html>
  <html>
  <head>
    <title>${title}</title>
      <link rel="stylesheet" href="http://pasteup.guim.co.uk/0.0.5/css/fonts.pasteup.min.css">
      <link rel="stylesheet" href="/normalize.css">
      <link rel="stylesheet" href="/base-styles.css">
      <link rel="stylesheet" href="/preact/dist/assets/style.css">
      <style>
        ${styles}
      </style>
  </head>
  <body>
    <h1>Preact</h1>
    <div class='main' id='main'>${body}</div>
    <script src="/preact/dist/assets/bundle.js"></script>
  </body>
  </html>
  `;
