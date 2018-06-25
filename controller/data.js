var data = require('../model/data');
var request = require('request');
exports.checkWeather = function(req,res){
    var weather = {
        city:req.query.city,
        date:req.query.date
    }
    console.log(weather.city)
    data.checkWeather(weather,function(err,result){
        if(result)
            return    res.send(result);
        request(`http://api.openweathermap.org/data/2.5/forecast/?q=${weather.city}&appid=4934a8acfe7e7632fc25391a747ebd16`, function (error, response, body) {
            if(!error){
                console.log(error);
                weather.body = JSON.parse(body);
                data.saveWeather(weather,function(err2,docs){
                    if(!err2)
                        return res.send(docs.ops[0])
                    res.send(err2);
                })
            }
            else{
                re.send(error);
            }
        });
        
    })
}