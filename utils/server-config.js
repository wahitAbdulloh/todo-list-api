import {readFileSync} from 'fs';

const config = readFileSync('.env', 'utf-8');
const allLine = config.split('\r\n');
const server = allLine.filter( line => line.search(/server\./g) == 0);
const serverConfig = {};
server.forEach(db => {
    const dt = db.replace(/server\./g,'').split(' = ');
    serverConfig[dt[0]] = dt[1];
});

export default serverConfig;