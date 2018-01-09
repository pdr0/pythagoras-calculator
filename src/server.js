import path from 'path';
import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import {StaticRouter} from 'react-router';
import {Provider} from 'react-redux';
import store from './redux/store';
import preloadStore from './redux/preloadStore';
import indexTemplate from './views/index.pug';
import App from './components/App';
import config from './config/general';

const status = {
	error: 500,
	redirect: 302,
	success: 200,
	notFound: 404
};


// Data to send to pug template
const pugConfig = {
	title: config.title,
	description: config.description,
	scripts: ['/app.js']
};

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('*', async (req, res) => {

	preloadStore(store, req.originalUrl, req.user)
		.then((loadedStore) => {
			const context = {};
			const contentHtml = ReactDomServer.renderToString(<Provider store={loadedStore}><StaticRouter location={req.originalUrl} context={context}><App basePath={config.basePath} /></StaticRouter></Provider>);
			console.log(context);

			const variables = {...pugConfig, content: contentHtml, basePath: config.basePath, state: JSON.stringify(store.getState())};
			const html = indexTemplate(variables);
			res.status(status.success).send(html);
		}).catch((err) => {
			console.error(err);
			res.status(status.error).send('Server error loading page');
		});

});

app.listen(port, () => {
	/*eslint-disable no-console*/
	console.log(`Listening on ${port}`);
});
