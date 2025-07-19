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

function tellFortune(amount, coin)  {
    return `Buy $${amount} in ${coin} to become a millionaire!!!`;
}

function handleClick() {
    const myCoin = topCoin();
    const amountCoin = howMuch();
    const sentence = tellFortune(amountCoin, myCoin);

    hiddenText.innerHTML = `<p>${sentence}</p>`; 
    hiddenText.style.display = "block";

}



button.addEventListener("click", handleClick);
