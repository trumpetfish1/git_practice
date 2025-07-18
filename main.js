const coins = ["BTC", "ADA", "ETH", "WMTx", "XRP", "SNEK", "MIN", "BASE"];

const button = document.getElementById("button");
const hiddenText = document.getElementById("textContainer");


function topCoin() {
    let id = Math.floor(Math.random() * coins.length);
    //console.log(coins[id]);
    return coins[id];
}

function howMuch() {
   return  (Math.random() * 1000).toFixed(2);
}

function iDeclare(amount, coin)  {
    return `I am going to purchase $${amount} in ${coin}!!!`;
}

function handleClick() {
    const myCoin = topCoin();
    const amountCoin = howMuch();
    const sentence = iDeclare(amountCoin, myCoin);
    hiddenText.innerHTML = `<p>${sentence}</p>`;  // Display the fortune text
    hiddenText.style.display = "block";

}



button.addEventListener("click", handleClick);
