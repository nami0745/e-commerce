const MongoClient = require('mongodb').MongoClient;



const state = {

    db: null

};



module.exports.connect = async function (done) {

    const url = 'mongodb://127.0.0.1:27017';

    const dbName = 'shopping';



    try {

        const client = await MongoClient.connect(url);

        state.db = client.db(dbName);

        done();

    } catch (err) {

        done(err);

    }

};