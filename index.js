
require('dotenv').config();
const server = require('./server.js');

const port = process.env.PORT || 4000;
server.listen(port, function() {
	console.log(`\n Server is listening on port ${port} \n`);
});