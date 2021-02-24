const path = require('path');
const api = require('./restAPI');
const express = require('express');

class App {
    constructor() {
        this._app = express();
        this._app.use(express.json());
        this._app.use(express.static(path.resolve(__dirname, '../dist')));
        this._app.use(this.headerCors);

        this._app.get('/get-all-data', this.onGetData)
    }

    headerCors = (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        next();
    }

    onGetData = async (req, res) => {
        const data = await api.getAllUsers({ 
            user_token: "1ae22e526fbf0a2fb6e670f4c5c76b1f",
            branch_id: 1
        });

        res.json(data);
        res.end();
    }

    getApp = () => this._app;
}

module.exports = App;