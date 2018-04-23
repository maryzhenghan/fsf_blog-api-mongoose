const express = require('express');
const morgan = require('morgan');

const app = express();

const blogPostsRouter = require('./blogPostsRouter');

// to log the HTTP layer, use morgan
app.use(morgan('common'));
app.use(express.static('public'));

// reroute requests that come into `/blog-posts
app.use('/blog-posts', blogPostsRouter);

app.listen(process.env.PORT || 8080, () => {
	console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});