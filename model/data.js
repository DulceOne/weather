var db = require('../db');

exports.checkWeather = function(weather,cb){
    db.get().collection('weather').find({
            city:weather.city,
            date:weather.date
        }).toArray(function(err,res){
            cb(err,res);
        })
}

exports.saveWeather = function(weather,cb){
    db.get().collection('weather').insert({
        city:weather.city,
        date:weather.date,
        body:weather.body
    },function(err,res){
        cb(err,res);
    })
}