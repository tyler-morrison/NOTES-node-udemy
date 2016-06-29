'use strict'

const configValues = require('./config');

module.exports = {
    getDBConnectionString: function() {
        return `mongodb://${configValues.uname}:${configValues.pwd}@ds023704.mlab.com:23704/nodetodo`;
    }
}
