import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import serialize from 'serialize-javascript';
import App from 'client/App';
import configureStore from 'client/store/configureStore';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST); //eslint-disable-line

const render = (req, res) => {
  // Create a Redux store instance
  const store = configureStore();

  const context = {};
  const sheet = new ServerStyleSheet();
  // Render the component to a string
  const markup = renderToString(
    sheet.collectStyles(
      <StaticRouter context={context} location={req.url}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>,
    ),
  );

  const styles = sheet.getStyleTags();

  // Grab the initial state from our Redux store
  const finalState = store.getState();

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send(`<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Passport pocket</title>
         ${styles}
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
          window.__PRELOADED_STATE__ = ${serialize(finalState)}
        </script>
    </body>
</html>`);
  }
};

export default render;
