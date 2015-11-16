var current = document.getElementById("current_price");
var freebeer = document.getElementById("freebeer");
var donation = document.getElementById("donation");
var stat = document.getElementById("status");
var fund = document.getElementById("fund");
var estoque = document.getElementById("estoque");
var qto_falta = document.getElementById("qto_falta");

var beers_available = 20;
var costs = 100;
var lucro_minimo = 100;
var donation_fund = 0;
var full_income = 0;
var current_price = 0;

function round_money_value(v){
  return Math.floor(v*100)/100;
}
function update_price(){
  if ((costs + lucro_minimo - full_income) <= 0){
      current_price = 0;
      current.innerHTML = "Free Beer!";
  } else {
    current_price = (costs + lucro_minimo - full_income) / beers_available;
    current.innerHTML = "R$ " + round_money_value(current_price);
  }
  
  if (beers_available == 0){
      current.innerHTML = "-- ESGOTADO --";
  }
}

update_price();

function pay(value, donation){
  if (beers_available == 0) return;

  beers_available--;
  full_income += value

  if (donation){
    donation_fund += (value - current_price)
  } else {
    update_price()
  }
  stat.innerHTML = "voce pagou " + round_money_value(value) + " reais!";
  fund.innerHTML = round_money_value(donation_fund);
  estoque.innerHTML = round_money_value(beers_available);
  qto_falta.innerHTML = round_money_value((costs + lucro_minimo) - full_income);
}

freebeer.onclick = function(){
  var rnd_value = 5 + Math.round(Math.random() * 15);
  pay(rnd_value, false);
}

donation.onclick = function(){
  var rnd_value = Math.round(current_price + Math.random() * current_price);
  pay(rnd_value, true);
}