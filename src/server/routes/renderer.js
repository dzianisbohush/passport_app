import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import getHtmlTemplate from 'server/templates/html';
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

  const styledComponentsStyles = sheet.getStyleTags();

  // Grab the initial state from our Redux store
  const finalState = store.getState();

  if (context.url) {
    res.redirect(context.url);
  } else {
    const html = getHtmlTemplate({
      assets,
      styledComponentsStyles,
      markup,
      finalState,
    });

    res.status(200).send(html);
  }
};

export default render;
