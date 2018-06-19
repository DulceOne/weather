var db = require('../db');

exports.checkWeather = function(weather,cb){
    db.get().collection('weather').findOne({
            city:weather.city,
            date:weather.date
        },function(err,res){
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