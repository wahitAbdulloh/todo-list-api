import {readFileSync} from 'fs';

const config = readFileSync('.env', 'utf-8');
const allLine = config.split('\r\n');
const database = allLine.filter( line => line.search(/database\./g) == 0);
const databaseConfig = {};
database.forEach(db => {
    const dt = db.replace(/database\./g,'').split(' = ');
    databaseConfig[dt[0]] = dt[1];
});

export default databaseConfig;