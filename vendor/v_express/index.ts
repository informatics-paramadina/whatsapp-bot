import express from "express";


const createRoute = () => {
    return express.Router();
}

const createApp = () =>{
    return express();
}

export {
    createRoute,
    createApp
}