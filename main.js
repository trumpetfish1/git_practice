const options = ["Buy", "Sell"]
const coins = ["BTC", "ADA", "ETH", "WMTx", "XRP", "SNEK", "MIN", "BASE", "DOGE"];
const button = document.getElementById("button");
const hiddenText = document.getElementById("textContainer");


function topCoin() {
    const id = Math.floor(Math.random() * coins.length);
    //console.log(coins[id]);
    return coins[id];
}

function howMuch() {
   return  (Math.random() * 1000).toFixed(2);
}

function buyOrSell() {
    return options[Math.round(Math.random())]
}

function tellFortune(optionType, amount, coin)  {
    return `${optionType} $${amount} in ${coin} to become a millionaire!!!`;
}

function handleClick() {
    const optionType = buyOrSell()
    const myCoin = topCoin();
    const amountCoin = howMuch();
    const sentence = tellFortune(optionType, amountCoin, myCoin);

    hiddenText.innerHTML = `<p>${sentence}</p>`; 
    hiddenText.style.display = "block";

}



button.addEventListener("click", handleClick);
