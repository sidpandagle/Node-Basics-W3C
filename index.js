const http = require('http');
const dt = require('./date');
const url = require('url');
const fs = require('fs');
const events = require('events');
http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.end(dt.newDate());
    // res.end(req.url);
    //
    // const val = url.parse(req.url, true).query;
    // const year = val.year;
    // res.end(year);
    //
    // fs.writeFile('test.txt', 'Hello World!', (err) => {
    //   if (err) throw err;
    //   console.log('Saved File');
    // });
    //
    // fs.unlink('data.txt', (err) => {
    //   if (err) throw err;
    //   console.log('Saved File');
    // });
    // fs.readFile('test.txt', (err, data) => {
    //   res.end(data);
    // });
    // fs.rename('test.txt', 'renamed.txt', (err, data) => {
    //   res.end(data);
    // });
    //
    // const webLink =
    //   'http://localhost:8080/default.htm?year=2017&month=february';
    // const parsed = url.parse(webLink, true);
    // console.log(parsed.slashes);
    // console.log(parsed.host);
    // console.log(parsed.port);
    // console.log(parsed.hostname);
    // console.log(parsed.search);
    // console.log(parsed.pathname);
    // console.log(parsed.path);
    // console.log(parsed.href);
    // console.log(parsed.query.year);
    // console.log(parsed.query.month);
    // console.log(parsed.protocal);
    // res.write(JSON.stringify(parsed));
    //
    // const readStream = fs.createReadStream('renamed.txt');
    // readStream.on('open', (err, data) => {
    //   console.log('file opened');
    //   readStream.pipe(res);
    // });
    //
    // const em = new events.EventEmitter();
    // em.on('scream', () => console.log('heard scream'));
    // em.emit('scream');
    //

    return res.end();
  })
  .listen(8000);
