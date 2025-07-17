

const coins = ["BTC", "ADA", "ETH", "WMTx", "XRP", "SNEK", "MIN", "BASE"]

function topCoin() {
    id = Math.floor(Math.random() * coins.length)
    //console.log(coins[id])
    return coins[id]
}

function howMuch() {
   return  Math.random() * 1000
}


function iDeclare(amount, coin)  {
    return `I am going to purchase $${amount} of ${coin}!!!`
}

myCoin = topCoin();
amountCoin = howMuch()
sentence = iDeclare(amountCoin, myCoin)

console.log(sentence)