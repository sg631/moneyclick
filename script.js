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
function rebirthBttnClick(){
  if (money > (rebirthcount + 1) * diffiMultForRebirth) {
    money = 0;
    diffiMultForBoost = 100;
    diffiDirectionOne = 2;
    boost = 1;
    rebirthcount++;
    rebirthboost *= 2;
    getElementById('moneydisplay').innerHTML = '$0';
    document.getElementById('boostIncreaseBttn').innerHTML = 100;
    document.getElementById('rebirthcountdisplay').innerHTML = rebirthcount
  } 
}
function rebirthShopUnlockBttnClick() {
  if (rebirthcount > 2) {
    rebirthcount -= 3;
    rebirthboost = 1;
    for (let i = rebirthcount; i > 0; i -= 1) {
        rebirthboost *= 2;
    }
}
}
