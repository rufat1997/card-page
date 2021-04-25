function valid_credit_card() {
	var value = document.getElementById('ccnum').value
  // Accept only digits, dashes or spaces
	if (/[^0-9-\s]+/.test(value)) return false;

	// The Luhn Algorithm. It's so pretty.
	let nCheck = 0, bEven = false;
	value = value.replace(/\D/g, "");

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

		nCheck += nDigit;
		bEven = !bEven;
	}

	var result = (nCheck !== 0) && (nCheck % 10) == 0 && value.length == 16;

	console.log(result);

	if(result == false)
	{
		document.getElementById('ccnum').style.borderColor = "red";
	} else {
		document.getElementById('ccnum').style.borderColor = "green";
	}

	return result;
}