function tipCalculator(subTotal) {
	var tipPercent = prompt('Tip Percentage')/100;
	var finalTotal = subTotal * (1 + tipPercent);
	alert('Your final total is $' + finalTotal + '.');
}

tipCalculator(88);
