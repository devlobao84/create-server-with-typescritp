"use strict";
//  importando bibliotecas typescript 
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var query_string_1 = require("query-string");
var url = __importStar(require("url"));
var fs_1 = require("fs");
var port = 5000;
var server = (0, http_1.createServer)(function (request, response) {
    var urlparse = url.parse(request.url ? request.url : '', true);
    var respons;
    var params = (0, query_string_1.parse)(urlparse.search ? urlparse.search : '');
    if (urlparse.pathname == "/create-user") {
        // Save user 🍧
        (0, fs_1.writeFile)('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
            if (err)
                throw err;
            console.log('Create Saved!');
            respons = 'Usuario criado com sucesso unsado Typescript';
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/palin');
            response.end(respons);
        });
    }
    // response.end('Hellow Word 🌐!!');
    else if (urlparse.pathname == "/select-user") {
        (0, fs_1.readFile)('users/' + params.id + '.txt', function (err, data) {
            console.log('Select Save!');
            respons = data;
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(respons);
        });
    }
    // Remove user ☢️
    else if (urlparse.pathname == "/remove-user") {
        (0, fs_1.unlink)('users/' + params.id + '.txt', function (err) {
            console.log('usuario removido');
            respons = err ? "Ops, nao encotramos esse usuario!" : "Usuario REMOVIDO com sucesso";
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/palin');
            response.end(respons);
        });
    }
});
// Execução
server.listen(port, function () {
    console.log("Server running on ".concat(port));
});
