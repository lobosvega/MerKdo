//Packages required!
require('dotenv').config();
var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: rocess.env.DB_USER,
  password: "",
  database: process.env.DB_DATA
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connnected ad id ' + connection.threadId);
}
);
