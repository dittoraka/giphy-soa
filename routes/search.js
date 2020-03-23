const express = require("express");
const router = express.Router();
var request = require("request");
const config = require('../config.js');
const mykey = config.RANDOM_KEY;

function Sticker(q){
    return new Promise(function(resolve,reject){
        var src = {
            'method':'GET',
            'url':'https://api.giphy.com/v1/stickers/search?api_key='+mykey+'&q='+q+'&limit=25&offset=0&rating=G&lang=en'
        };
        request(src,function(error,response){
            if(error){
                reject(new Error(error));
            }else{
                resolve(response.body);
            }
        });
    });
}

function Gif(q){
    return new Promise(function(resolve,reject){
        var src = {
            'method':'GET',
            'url':'https://api.giphy.com/v1/gifs/search?api_key='+mykey+'&q='+q+'&limit=25&offset=0&rating=G&lang=en'
        };
        request(src,function(error,response){
            if(error){
                reject(new Error(error));
            }else{
                resolve(response.body);
            }
        });
    });
}

router.get("/stickers/:q",async function(req,res){
    try {
        const rando = JSON.parse(await Sticker(req.params.q));
        res.send(rando.data);
    } catch (error) {
        res.send(error);
    }
});

router.get("/gifs/:q",async function(req,res){
    try {
        const rando = JSON.parse(await Gif(req.params.q));
        res.send(rando.data);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
