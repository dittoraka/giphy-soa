const express = require("express");
const router = express.Router();
var request = require("request");
const config = require('../config.js');
const mykey = config.RANDOM_KEY;

function Sticker(){
    return new Promise(function(resolve,reject){
        var trend = {
            'method':'GET',
            'url':'https://api.giphy.com/v1/stickers/trending?api_key='+mykey+'&limit=25&rating=G'
        };
        request(trend,function(error,response){
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
        var trend = {
            'method':'GET',
            'url':'https://api.giphy.com/v1/gifs/trending?api_key='+mykey+'&limit=25&rating=G'
        };
        request(trend,function(error,response){
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
        const test = JSON.parse(await Sticker());
        res.send(test.data);
    } catch (error) {
        res.send(error);
    }
});

router.get("/gifs",async function(req,res){
    try {
        const test = JSON.parse(await Gif());
        res.send(test.data);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
