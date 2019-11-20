function myFunction() {
  let price = document.getElementById('price').value;
  let tip = '';
  if (!price) {
    document.getElementById('tip').innerHTML = 'Please enter an amount';
    return false;
  } else if (price <= 50) {
    tip = (price * 20) /100
    document.getElementById('tip').innerHTML = tip;
    return false;
  } else if (price > 50 && price < 200 ) {
    tip = (price * 15) / 100;
    document.getElementById('tip').innerHTML = tip;
    return false;
  } else if (price >= 200) {
    tip = (price * 10) / 100;
    document.getElementById('tip').innerHTML = tip;
    return false;
  }
  return false;
};
