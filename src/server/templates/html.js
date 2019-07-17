import serialize from 'serialize-javascript';

const htmlPage = ({ assets, styledComponentsStyles, markup, state }) => `
  <!doctype html>
    <html lang="">
    <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet='utf-8' />
      <title>Passport pocket</title>
      ${styledComponentsStyles}
      <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
        ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </head>
    <body>
    <div id="root">${markup}</div>
    <script>
      window.__PRELOADED_STATE__ = ${serialize(state)}
    </script>
    </body>
    </html>
`;

export default htmlPage;
