function tipCalculator() {
	var subTotal = document.getElementById('sub').value;
	var tipPercent = document.getElementById('percentage').value;
	var tip = (tipPercent/100) + 1;
	var finalTotal = (tip * subTotal).toFixed(2);
	document.getElementById('final').style.visibility='visible';
	document.getElementById('total').innerHTML = '$'+finalTotal;
	var subTotal = document.getElementById('sub').value = ' ';
	var tipPercent = document.getElementById('percentage').value = ' ';
}
