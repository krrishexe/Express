// const express = require("express");
// const app = express();

// can be also written as:
const app = require("express")();
const server = require('http').createServer(app);
const io = require('socket.io')(server,{
    //options
})