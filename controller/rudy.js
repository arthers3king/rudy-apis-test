
class RudyController {
    constructor() { }

    getPlace(keyword) {
        return new Promise(function (resolve, reject) {

            const googleMapsClient = require('@google/maps').createClient({
                key: 'AIzaSyB5XnVjuB4-XC7sBX187k5gF-BoC-US9uQ',
                Promise: Promise
            });

            const resp = googleMapsClient.placesNearby({
                location: '13.809490,100.537682',
                type: 'restaurant',
                keyword: keyword || 'bangsue',
                radius: 5000
            })
                .asPromise()
                .then((response) => {
                    console.log(response.json.results);
                    return resolve(response);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }

    findXYZ() {
        return new Promise(function (resolve, reject) {
            try {
                const value = [3, 5, 9, 15, 'X', 'Y', 'Z'];
                const resp = value.filter(key => key == 'X' || key == 'Y' || key == 'Z');
                return resolve(resp);
            }
            catch (e) {
                return reject(e);
            }
        });
    }
}


module.exports = new RudyController();