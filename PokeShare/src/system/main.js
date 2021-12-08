const electron = require('electron')
const { BrowserWindow, app, ipcMain, Menu } = electron;
//const daoHandler = require('../dao/PokeShareDAOHandler.js').getInstance()

const eventHandler = require('./eventHandler.js');
// console.log(daoHandler);
// const path = require('path');
// const url = require('url');
// var PokeApi = require('pokeapi');

// const pdf = require("html-pdf");
// const ejs = require("ejs")

// var Pokedex = require('pokedex-promise-v2');
// var P = new Pokedex();
