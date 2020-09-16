import mongoose from 'mongoose';

const DBHOST = process.env.DBHOST || 'localhost';
const DBPORT = process.env.DBPORT || '27017';
const DBNAME = process.env.DBNAME || 'to-do';

const url = `mongodb://${DBHOST}:${DBPORT}/${DBNAME}`;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false});

const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
});

export default db;