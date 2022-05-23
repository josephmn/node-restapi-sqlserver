import app from './app';

// import './database/connection';

app.listen(app.get('port'));

console.log('server in port', app.get('port'));