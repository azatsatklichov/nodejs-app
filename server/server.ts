//@ts-checkts-ch
//import * as express from 'express';
import express = require("express");
//import * as _ from "lodash";
import * as path from "path";

//import { Form } from "../@types/question";
import { Question } from "../@types/question";

//_.c  you see all function for lodash

// const forms : Form[] =  [{
//           id: 23,
//           name: "Semada",
//           //address : "Optional Addr"  //not required, but both above must exist
// }];

const questions: Question[] = [
  {
    title: "Are dividends tax deductible?",
    content: "I have recently decided to invest in....",
    answerCount: 2,
  },
  {
    title: "Is it smart to invest in commodities?",
    content: "My bank has recently offered a new....",
    answerCount: 1,
  },
];

const port: string | number = process.env.PORT || 3001;
const app: express.Application = express();

app.use(express.static("./forms")); //static content

//http://localhost:3001/forms
app.get("/forms", (_req, res) => {
  // putting _ in front means we do not want to use it here, so stop never-used warning
  // res.send('Hello From Express Server! - Watch Mode :) ');
  res.json(questions);
});

//any name can be used besides serve-client or /main.js as well
app.get("/main.js", (_req, res) => {
  // putting _ in front means we do not want to use it here, so stop never-used warning

  debugger;

  //pass to client.js, and build directory (out) - out/client/client.js
  //res.send(path.resolve(__dirname, "..", "client", "client.js" ));    //C:\workspace\nodejs-app\out\client\client.js
  res.sendFile(path.resolve(__dirname, "..", "client", "client.js"));
});

app.get("/main2.js", (_req, res) => {
  debugger;

  //pass to client.js, and build directory (out) - out/client/client.js
  //res.send(path.resolve(__dirname, "..", "client", "client.js" ));    //C:\workspace\nodejs-app\out\client\client.js
  res.sendFile(path.resolve(__dirname, "..", "client", "test.js"));
});

/*
app.get("/client.js.map", (_req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "client", "client.js.map"));
});
app.get("/src/client/client.ts", (_req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "..", "src", "client", "client.ts"));
});
failed attempt to get source files working via serving... attempting to inline instead */

app.get("/questions", (_req, res) => {
  res.json(questions);
});

// app.get("/new", (req, res) => {

//     const question : Question = req.query;
//     questions.push(question);

//     res.json({

//         status: "OK",
//         questions

//     })

// });

app.listen(port);
console.log("Listening port: " + port);

//sourceMaps – maps transpiled JS code to TS. All browsers support this. Helpful for debugging
