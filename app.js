const app = require('./www/index');
const appConfig = require('./config/app.config');




// listening on port 3000
app.listen(appConfig.app.port, ()=>console.log(`Listening on port ${appConfig.app.port}.`))