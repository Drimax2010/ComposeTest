module.exports = {
	name: 'API',
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 3100,
	base_url: process.env.BASE_URL || 'http://localhost:3100',
	db: {
		uri: process.env.MONGODB_URI || 'mongodb://composite-test-db:27017',
	},
};