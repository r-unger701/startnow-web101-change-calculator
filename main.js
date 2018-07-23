$(document).ready(function() {
function calcChange() {
  var totalSale = $('#amount-due').val() * 100;
  var amountTendered = $('#amount-received').val() * 100;
  var result = Math.floor(amountTendered - totalSale);

  //Dollars returned
  var dollars = Math.floor(result / 100);
  $('#dollars-output').text('Dollars returned: $' + dollars);

  //Quarters returned
  var quarters = Math.floor((result - dollars * 100) / 25);
  $('#quarters-output').text('Quarters returned: ' + quarters);

  //Dimes returned
  var dimes = Math.floor((result - dollars * 100 - quarters * 25) / 10);
  $('#dimes-output').text('Dimes returned: ' + dimes);

  //Nickels returned
  var nickels = Math.floor(
    (result - dollars * 100 - quarters * 25 - dimes * 10) / 5);
  $('#nickels-output').text('Nickels returned: ' + nickels);

  //Pennies returned
  var pennies = Math.floor(
    (result - dollars * 100 - quarters * 25 - dimes * 10 - nickels * 5) / 1);
  $('#pennies-output').text('Pennies returned: ' + pennies);
}

  $('#calculate-change').click(function() {
    calcChange();
  })

})