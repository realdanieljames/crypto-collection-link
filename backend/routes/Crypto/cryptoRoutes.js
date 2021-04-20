const express = require('express')
const router = express.Router();




const cryptoController = require('./controller/cryptoController');



router.get('/ranking', cryptoController.getAllCrypto)



// const payload = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h");

//     axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h")

//     .then((response) => {
//         // console.log(response.data)
//         res.send(response.data)
//     }).catch((error) => {
//         console.log(error)
//         res.send(error)
//     })
// })





module.exports = router;