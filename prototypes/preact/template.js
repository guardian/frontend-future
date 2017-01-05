export default ({ body, title }) => `
  <!doctype html>
  <html>
  <head>
    <title>${title}</title>
      <link rel="stylesheet" href="http://pasteup.guim.co.uk/0.0.5/css/fonts.pasteup.min.css">
      <link rel="stylesheet" href="/normalize.css">
      <link rel="stylesheet" href="/base-styles.css">
      <link rel="stylesheet" href="/preact/dist/assets/style.css">
  </head>
  <body>
    <h1>Preact</h1>
    <div class='main'>${body}</div>
    <script src="dist/main.js"></script>
  </body>
  </html>
  `;
