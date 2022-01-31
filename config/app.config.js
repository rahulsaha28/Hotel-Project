const dotEnv = require('dotenv');
// dot env configaration
dotEnv.config();

module.exports = {
    'app':{
        'port':parseInt(process.env.PORT)
    },
    'db':{
        'url':process.env.URL
    }
}