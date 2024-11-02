//const express = require("express");
//const http = require("http");
const app = require("./app");


const url = `http://127.0.0.1:${8080}`;

//const server = http.createServer(app);

app.listen(8080, () => {
    console.log(`server runing on ${url}`);
});