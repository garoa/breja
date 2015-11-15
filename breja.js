var current = document.getElementById("current");
var freebeer = document.getElementById("freebeer");
var donation = document.getElementById("donation");
var stat = document.getElementById("status");

var beers_available = 50;
var costs = 300;
var donation_fund = 0;
var full_income = 0;
var current_price = 0;

function round_money_value(v){
  return Math.floor(v*100)/100;
}
function update_price(){
  current_price = (costs - full_income) / beers_available;
  current.innerHTML = round_money_value(current_price);
}

update_price();

function pay(value, donation){
  beers_available--;
  full_income += value

  if (donation){
    donation_fund += value
  } else {
    update_price()
  }
  stat.innerHTML = "you paid " + round_money_value(value) + " reais!";
}

freebeer.onclick = function(){
  var rnd_value = Math.round(Math.random() * 10);
  pay(rnd_value, false);
}

donation.onclick = function(){
  var rnd_value = Math.round(Math.random() * 10);
  pay(rnd_value, true);
}