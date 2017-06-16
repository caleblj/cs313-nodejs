var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use('/', express.static('static'));

app.use(bodyParser());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

function calcPostageLettersMetered(wieght){
	if (weight == 1){
		return 0.46;
	}
}

app.post('/getData', function(request, response){

	//
	var result,
	weight = Number(request.body.weight);

	switch(Number(result.body.type)){
		case 2 :
		result = calcPostageLettersMetered(weight);
		break
	}

	response.render('result', {
		result: request.body.wieght

	})
console.log(request.body.wight);
console.log(request.body.type);
});

app.listen(process.env.PORT || 3000, function() {
	console.log('server is listening');
})