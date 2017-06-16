var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use('/', express.static('static'));

app.use(bodyParser());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

function calcPostageLettersStamped(wieght){
	if (weight == 1){
		return 0.49;
	}
	else if(weight == 2){
		return 0.70;
	}
	else if(weight == 3){
		return 0.91;
	}
	else if(weight == 3.5){
		return 1.12;
	}
}

function calcPostageLettersMetered(wieght){
	if (weight == 1){
		return 0.46;
	}
	else if(weight == 2){
		return 0.67;
	}
	else if(weight == 3){
		return 0.88;
	}
	else if(weight == 3.5){
		return 1.09;
	}
}

function calcPostageLargeEnvelopes(wieght){
	if (weight == 1){
		return 0.98;
	}
	else if(weight == 2){
		return 1.19;
	}
	else if(weight == 3){
		return 1.40;
	}
	else if(weight == 4){
		return 1.61;
	}
	else if(weight == 5){
		return 1.82;
	}
	else if(weight == 6){
		return 2.03;
	}
	else if(weight == 7){
		return 2.24;
	}
	else if(weight == 8){
		return 2.45;
	}
	else if(weight == 9){
		return 2.66;
	}
	else if(weight == 10){
		return 2.87;
	}
	else if(weight == 11){
		return 3.08;
	}
	else if(weight == 12){
		return 3.29;
	}
	else if(weight == 13){
		return 3.50;
	}
}

function calcPostageLargeEnvelopes(wieght){
	if (weight == 1){
		return 2.67;
	}
	else if(weight == 2){
		return 2.67;
	}
	else if(weight == 3){
		return 2.67;
	}
	else if(weight == 4){
		return 2.67;
	}
	else if(weight == 5){
		return 2.85;
	}
	else if(weight == 6){
		return 3.03;
	}
	else if(weight == 7){
		return 3.21;
	}
	else if(weight == 8){
		return 3.39;
	}
	else if(weight == 9){
		return 3.57;
	}
	else if(weight == 10){
		return 3.75;
	}
	else if(weight == 11){
		return 3.93;
	}
	else if(weight == 12){
		return 4.11;
	}
	else if(weight == 13){
		return 4.29;
	}

}



app.post('/getData', function(request, response){

	//
	var result,
	weight = Number(request.body.weight);

	switch(result.body.type){
		case '1':
		result = calcPostageLettersStamped(weight);
		break;
		case '2':
		result = calcPostageLettersMetered(weight);
		break;
		case '3':
		result = calcPostageLargeEnvelopes(wieght);
		break;
		case '4':
		result = calPostageParcel(weight);
		break;
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