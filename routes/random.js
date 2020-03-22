const express = require("express");
const router = express.Router();
var request = require("request");
const config = require('../config.js');
const mykey = config.RANDOM_KEY;

function Sticker(){
    return new Promise(function(resolve,reject){
        var rng = {
            'method':'GET',
            'url':'https://api.giphy.com/v1/stickers/random?api_key='+mykey+'&tag=&rating=G'
        };
        request(rng,function(error,response){
            if(error){
                reject(new Error(error));
            }else{
                resolve(response.body);
            }
        });
    });
}

function Gif(){
    return new Promise(function(resolve,reject){
        var rng = {
            'method':'GET',
            'url':'https://api.giphy.com/v1/gifs/random?api_key=MMnnpq3mKhcoDugZuicj10rNyNCsslHF&tag=&rating=G'
        };
        request(rng,function(error,response){
            if(error){
                reject(new Error(error));
            }else{
                resolve(response.body);
            }
        });
    });
}

router.get("/stickers",async function(req,res){
    try {
        const rando = JSON.parse(await Sticker());
        res.send(rando.data);
    } catch (error) {
        res.send(error);
    }
});

router.get("/gifs",async function(req,res){
    try {
        const rando = JSON.parse(await Gif());
        res.send(rando.data);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
