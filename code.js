// var a = 124;
// var b = 48;
// var c = 258;

function tipArrCalculator(a, b, c) {
  var arr = [a, b, c];
  var tipArr = [];
  var totalArr = [];

  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var tip = 0;
    var total = 0;

    if(arr[i] <= 50) {
      tip = arr[i] * 20/100;
      total = tip + arr[i];
      tipArr.push(tip);
      totalArr.push(total);
    } else if (arr[i] > 50 && arr[i] <= 200) {
      tip = arr[i] * 15/100;
      total = tip + arr[i];
      tipArr.push(tip);
      totalArr.push(total);
    } else if (arr[i] > 200) {
      tip = arr[i] * 10/100;
      total = tip + arr[i];
      tipArr.push(tip);
      totalArr.push(total);
    }
  }
  obj.tip = tipArr;
  obj.total = totalArr;
  return obj;
}
