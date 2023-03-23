var express = require('express');
var app = express();

var port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/' , function(req, res){
    res.render('index.html');

});

function complextMath(num1, num2)
{
return parseInt(num1) + parseInt(num2);
}

app.get('/addTwoNumbers', (req, res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = complextMath(number1, number2);
    res.json({statuscode:200,data:result,Message:'Success'})
});

app.listen(port, () => {
    console.log("App is listening to: "+port);
});