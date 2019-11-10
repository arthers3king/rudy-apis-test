const RudyController = require('../controller/rudy');

class Rudy {
    constructor() {
    }

    callPlace(keyword) {
        return new Promise(function (resolve, reject) {
            try {
                return RudyController.getPlace(keyword).then(function (rs) {
                    return resolve(rs);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    }
    findArray() {
        return new Promise(function (resolve, reject) {
            try {
                return RudyController.findXYZ().then(function (rs) {
                    return resolve(rs);
                });
            }
            catch (e) {
                return reject(e);
            }
        })
    }

}

module.exports = new Rudy();