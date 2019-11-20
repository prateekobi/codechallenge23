
function myFunction() {
  let price = document.getElementById('price').value;
  let tip = '';
  console.log('PRICE: ', price);
  if (!price) {
    tip = 'Please enter an amount';
  } else if (price <= 50) {
    tip = (price * 20) /100;
  } else if (price > 50 && price < 200 ) {
    tip = (price * 15) / 100;
  } else if (price >= 200) {
    tip = (price * 10) / 100;
  }
  document.getElementById('tip').innerHTML = tip;
  return false;
};
