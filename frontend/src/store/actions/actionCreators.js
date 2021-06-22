import axios from "axios";
import * as actionTypes from "./actionTypes";



const Axios = axios.create({
    baseURL: 'http://localhost:3001/api',
    // baseURL: '/api',
    timeout: 5000
})

//current date
const currentUnixTime = 1624376238
    //===================================================================================//
    //===================================================================================//

export const setCryptoData = () => async dispatch => {
    const payload = await Axios.get("/crypto/ranking");
    // const payload = await Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h");
    const getStartUpData = await Axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin`)
        // console.log(getStartUpData)
    const getPriceHistory = await Axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1609515825&to=${currentUnixTime}`)

    // console.log(getStartUpData)

    dispatch({
        type: actionTypes.SET_CRYPTO_DATA,
        newCryptoDataArr: payload.data,
        newSelectedCryptoDisplay: { id: getStartUpData.data.id, name: 'Bitcoin', data: getStartUpData.data, priceHistory: getPriceHistory.data.prices },


    })

}


//===================================================================================//
//===================================================================================//
export const showCryptoData = (id) => async dispatch => {
    const payload = await Axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);

    // const getPriceHistory = await Axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`)
    const getPriceHistory = await Axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=1609515825&to=${currentUnixTime}`)
        // console.log(payload)

    dispatch({
        type: actionTypes.SHOW_CRYPTO_DATA_DISPLAY,
        newSelectedCryptoDisplay: { id: payload.data.id, name: payload.data.name, data: payload.data, priceHistory: getPriceHistory.data.prices },

    })
}


//===================================================================================//
//===================================================================================//
export const getCryptoPriceHistory = (id) => async dispatch => {
    // const getPriceHistory = await Axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`)
    const getPriceHistory = await Axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=1609515825&to=1618933425`)
    const payload = await Axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)

    // console.log(payload)
    dispatch({
        type: actionTypes.GET_CRYPTO_PRICE_HISTORY,
        // newSelectedCryptoDisplay: { priceHistory: payload }
        newSelectedCryptoDisplay: { id: payload.data.id, name: payload.data.name, data: payload.data, priceHistory: getPriceHistory.data.prices }
    })

}


//===================================================================================//
//===================================================================================//
export const getAllUsers = () => async dispatch => {
    const allUsers = await Axios.get("/users/get-users")
        // const targetedUser = await Axios.get(`/users/${id}`)
    console.log(allUsers)
        // console.log(targetedUser)

    dispatch({
        type: actionTypes.GET_ALL_USERS,
        allUsersArray: allUsers.data.allUsers,
        // newSelectedUser: targetedUser.data.foundUser

    })

}


//===================================================================================//
//===================================================================================//
export const getUserById = (id) => async dispatch => {
    const targetedUser = await Axios.get(`/users/${id}`)
    console.log(targetedUser)

    dispatch({
        type: actionTypes.GET_USER_BY_ID,
        newSelectedUser: targetedUser.data.foundUser
    })
}


//===================================================================================//
//===================================================================================//

export const addCryptoDataToUserCollection = (userId, cryptoData) => async dispatch => {

    const user = await Axios.post(`/users/add-to-collection`, {
        _id: userId,
        userCollection: cryptoData
    })
    console.log(user)
    dispatch({
        type: actionTypes.ADD_CRYPTO_DATA_TO_USER_COLLECTION,
        user: user
    })
}