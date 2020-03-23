const express = require("express");
const router = express.Router();
var request = require("request");
const config = require('../config.js');
const mykey = config.RANDOM_KEY;

function trending(){
    return new Promise(function(resolve, reject){
        var trending = {
            'method':'GET',
            'url':'https://api.giphy.com/v1/trending/searches?api_key='+mykey
        };
        request(trending, function(error, response){
            if(error){
                reject(new Error(error));
            }else{
                resolve(response.body);
            }
        });
    });
}

function gifcategories(){
    return new Promise(function(resolve, reject){
        var list = {
            'method':'GET',
            'url':'https://api.giphy.com/v1/gifs/categories?api_key='+mykey
        };
        request(list, function(error, response){
            if(error){
                reject(new Error(error));
            }else{
                resolve(response.body);
            }
        });
    });
}

router.get("/trending", async function(req, res){
    try {
        const test = JSON.parse(await trending());
        res.send(test.data);
    } catch (error) {
        res.send(error);
    }
});

router.get("/gifcategories", async function(req, res){
    try {
        const test = JSON.parse(await gifcategories());
        res.send(test.data);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
