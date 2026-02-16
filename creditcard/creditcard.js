function isCardNumberValid(number) {
	return number === '1234123412341234'
}

function displayError(msg) {
	// display error message
	document.querySelector('.errors').innerHTML = msg
}

function submitHandler(event) {
	event.preventDefault();
  let errors = [];
	displayError('');

  let cardNumber = document.querySelector('#card-number');
  const cardNum = cardNumber.value.trim();
    // Check if it's numeric and valid in one go
      if (!/^\d{16}$/.test(cardNum)) {
      errors.push('Card number must be 16 digits.');
      } else if (!isCardNumberValid(cardNum)) {
        errors.push('Card number is not valid.');
      }
    
    //check date
    const expYear = Number(document.querySelector('#year').value);   
    const expMonth = Number(document.querySelector('#month').value);
    const currentDate = new Date()

    const fullExpYear = 2000 + expYear;
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() +1;

    if (fullExpYear < currentYear || (fullExpYear === currentYear && expMonth < currentMonth)) {
        errors.push('Card is expired.') ;
    }

    if (errors.length > 0) {
        displayError(errors.join('<br>'));
        return;
    }

    // Success: show a confirmation message
    const formContainer = document.getElementById('checkoutForm');
    formContainer.innerHTML = '<h2>Thank you for your purchase.</h2>';
}
  
document.querySelector('#checkoutForm').addEventListener('submit', submitHandler)