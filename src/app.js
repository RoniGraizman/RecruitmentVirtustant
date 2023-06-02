//REQUERIMOS DOTENV PARA TENER VARIABLES DE ENTORNO
require("dotenv").config();

const express = require("express");
const session = require("cookie-session");
const app = express();

// REQUERIMOS PATH Y STATIC PARA LAS RUTAS
const { join } = require("path");
const { static } = require("express");

//SETEAMOS APP PARA Q MIRE DIRECTAMENTE LAS VISTAS EN VIEWS
app.set("view engine", "ejs");
app.set("views", join(__dirname, "./views"));


// public path
app.use(static(join(__dirname, "..", "public")));

app.use(session({secret:"Secreto", resave:false, saveUninitialized:false,}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//const mainRouter = require("./routers/main-router");

// MOUNT MAIN ROUTER

//app.use(mainRouter);

module.exports = app
