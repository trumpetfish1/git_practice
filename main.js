const coins = ["BTC", "ADA", "ETH", "WMTx", "XRP", "SNEK", "MIN", "BASE"];

button = document.getElementsByName("button");
hiddenText = document.getElementById("textContainer");


function topCoin() {
    id = Math.floor(Math.random() * coins.length);
    //console.log(coins[id]);
    return coins[id];
}

function howMuch() {
   return  Math.random() * 1000;
}


function iDeclare(amount, coin)  {
    return `I am going to purchase $${amount} in ${coin}!!!`;
}

function handleClick() {
    myCoin = topCoin();
    amountCoin = howMuch();
    sentence = iDeclare(amountCoin, myCoin);
    hiddenText.style.display="block";
    console.log(sentence);





button.addEventListener("click", handleClick);


