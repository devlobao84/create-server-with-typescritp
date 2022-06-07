//  importando bibliotecas typescript 

import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'query-string';
import * as url from 'url';
import { writeFile, readFile, unlink } from 'fs';

const port = 5000;
const server = createServer((request: IncomingMessage, response: ServerResponse) => {

    const urlparse = url.parse(request.url ? request.url : '', true)
    let respons;
    const params = parse(urlparse.search ? urlparse.search : '');

    if (urlparse.pathname == "/create-user") {
        // Save user 🍧
        writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err: any) {
            if (err) throw err;
            console.log('Create Saved!');

            respons = 'Usuario criado com sucesso unsado Typescript';
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/palin');
            response.end(respons);
        });
    }
    // response.end('Hellow Word 🌐!!');

    else if (urlparse.pathname == "/select-user") {
        readFile('users/' + params.id + '.txt', function (err: any, data: any) {
            console.log('Select Save!')
            respons = data;
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(respons);
        });
    }
    // Remove user ☢️
    else if (urlparse.pathname == "/remove-user") {
        unlink('users/' + params.id + '.txt', function (err: any) {
            console.log('usuario removido')
            respons = err ? "Ops, nao encotramos esse usuario!" : "Usuario REMOVIDO com sucesso";
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/palin');
            response.end(respons);
        })
    }
});

// Execução
server.listen(port, () => {
    console.log(`Server running on ${port}`)
});