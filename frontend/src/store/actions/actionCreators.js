import axios from "axios";
import * as actionTypes from "./actionTypes";


//===================================================================================//
//===================================================================================//

export const setCryptoData = () => async dispatch => {
    const payload = await axios.get("http://localhost:3001/api/crypto/ranking");
    // const payload = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h");
    const getStartUpData = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin`)
        // console.log(getStartUpData)
    const getPriceHistory = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1609515825&to=1618933425`)

    // console.log(getStartUpData)

    dispatch({
        type: actionTypes.SET_CRYPTO_DATA,
        newCryptoDataArr: payload.data,
        newSelectedCryptoDisplay: { id: getStartUpData.data.id, name: 'Bitcoin', data: getStartUpData.data, priceHistory: getPriceHistory.data.prices },
        // newSelectedCryptoDisplay: { id: 'bitcoin', name: 'Bitcoin', data: getStartUpData.data, priceHistory: getPriceHistory.data.prices },
    })

}

//===================================================================================//
//===================================================================================//

// export const addCryptoData = (id) => async dispatch => {
//     const payload = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);

//     dispatch({
//         type: actionTypes.ADD_CRYPTO_DATA,
//         newCryptoData: payload.data
//     })
// }


//===================================================================================//
//===================================================================================//
export const showCryptoData = (id) => async dispatch => {
    const payload = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);

    // const getPriceHistory = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`)
    const getPriceHistory = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=1609515825&to=1618933425`)
        // console.log(payload)

    dispatch({
        type: actionTypes.SHOW_CRYPTO_DATA_DISPLAY,
        newSelectedCryptoDisplay: { id: payload.data.id, name: payload.data.name, data: payload.data, priceHistory: getPriceHistory.data.prices },

    })
}


//===================================================================================//
//===================================================================================//
export const getCryptoPriceHistory = (id) => async dispatch => {
    // const getPriceHistory = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`)
    const getPriceHistory = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=1609515825&to=1618933425`)
    const payload = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)

    // console.log(payload)
    dispatch({
        type: actionTypes.GET_CRYPTO_PRICE_HISTORY,
        // newSelectedCryptoDisplay: { priceHistory: payload }
        newSelectedCryptoDisplay: { id: payload.data.id, name: payload.data.name, data: payload.data, priceHistory: getPriceHistory.data.prices }
    })

}