var cheerio = require('cheerio');
var request = require('request');
var express = require('express');
var fs = require('fs');
var app = express();

  request('https://www.reddit.com/r/MaddenMobileForums/',function(error, response, html){
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('span.domain').each(function(){
        var a = $(this).prev();
        console.log(a.text());
      });
    }
  })


app.listen('3000')

console.log("magic happens on port 3000")

exports=module.exports=app;
