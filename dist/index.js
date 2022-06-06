"use strict";
//  importando bibliotecas typescript 
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var port = 5000;
var server = (0, http_1.createServer)(function (request, response) {
    response.end('Hellow Word Moda Foca!!');
});
// Execução
server.listen(port, function () {
    console.log("Server running on ".concat(port));
});
