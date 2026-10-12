import http from 'node:http';
import {readFile} from 'node:fs/promises';
const allowed = {'/':'index.html','/index.html':'index.html','/styles.css':'styles.css','/app.js':'app.js','/music.js':'music.js','/songs.js':'songs.js'};
const types={html:'text/html',css:'text/css',js:'text/javascript'};
http.createServer(async(req,res)=>{try{const file=allowed[new URL(req.url,'http://localhost').pathname];if(!file){res.writeHead(404);return res.end('Not found');}res.setHeader('Content-Type',types[file.split('.').pop()]+'; charset=utf-8');res.end(await readFile(new URL(file,import.meta.url)));}catch{res.writeHead(500);res.end('Unable to load songbook');}}).listen(4173,'127.0.0.1',()=>console.log('Songbook: http://localhost:4173'));
