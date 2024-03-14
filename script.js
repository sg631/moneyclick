var money = 0;
var boost = 1;
var diffiMultForBoost = 100;
var diffiMultForRebirth = 1000000;
var diffiDirectionOne = 2;
var diffiDirectionTwo = 200;
var rebirthboost = 1;
var rebirthcount = 0;
function mainBttnClick() {
  money += boost*rebirthboost;document.getElementById('moneydisplay').innerHTML = '$' + money.toString();
}
function boostIncreaseBttnClick() {
  if (money > boost * diffiMultForBoost) {
    money -= boost * diffiMultForBoost;
    boost = boost * 2;
    diffiMultForBoost += diffiDirectionOne;
    diffiDirectionOne *= 2;
    if (diffiMultForBoost > 130) {
        diffiDirectionOne = -2
    }
    document.getElementById('moneydisplay').innerHTML = '$' + money.toString();
    document.getElementById('boostIncreaseBttn').innerHTML = '$' + (boost * diffiMultForBoost).toString()
  }
}
