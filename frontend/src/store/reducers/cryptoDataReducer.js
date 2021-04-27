import * as actionTypes from "../actions/actionTypes";

//===================================================================================//
//===================================================================================//
const initialState = {
    cryptoData: [],
    selectedCryptoDisplay: {
        id: '',
        name: '',
        data: {},
        priceHistory: {}
    },
    userData: [],
    selectedUser: {}

}

//===================================================================================//
//===================================================================================//

const cryptoDataReducer = (state = initialState, action) => {

    switch (action.type) {
        // case actionTypes.ADD_CRYPTO_DATA:
        //     return {
        //         cryptoData: [...state.cryptoData, action.newCryptoData]
        //     }
        //===================================================================================//
        //===================================================================================//
        case actionTypes.SET_CRYPTO_DATA:
            // console.log(action)
            return {
                ...state,
                cryptoData: action.newCryptoDataArr,
                // cryptoData: [...state.cryptoData, action.newCryptoDataArr],
                selectedCryptoDisplay: {

                    id: action.newSelectedCryptoDisplay.id === '' ? 'bitcoin' : action.newSelectedCryptoDisplay.id,
                    name: action.newSelectedCryptoDisplay.name,
                    // name: state.selectedCryptoDisplay.name === '' ? 'bitcoin' : state.selectedCryptoDisplay.name,
                    data: action.newSelectedCryptoDisplay.data,
                    priceHistory: action.newSelectedCryptoDisplay.priceHistory
                }
            }
            //===================================================================================//
            //===================================================================================//
        case actionTypes.SHOW_CRYPTO_DATA_DISPLAY:
            // console.log(action)
            // state.cryptoData.map((value) => console.log(value))


            return {
                ...state,
                // cryptoData: [...state.cryptoData],
                // cryptoData: [...state.cryptoData],
                selectedCryptoDisplay: {
                    id: action.newSelectedCryptoDisplay.id,
                    name: action.newSelectedCryptoDisplay.name,
                    data: action.newSelectedCryptoDisplay.data,
                    priceHistory: action.newSelectedCryptoDisplay.priceHistory
                }


            }
            //===================================================================================//
            //===================================================================================//
        case actionTypes.GET_CRYPTO_PRICE_HISTORY:
            // console.log(state)
            // console.log(action)
            return {
                // cryptoData: [...state.cryptoData],
                ...state,
                // selectedCryptoDisplay: {...state.selectedCryptoDisplay, priceHistory: action.newSelectedCryptoDisplay.priceHistory }
                selectedCryptoDisplay: {
                    id: state.selectedCryptoDisplay.id,
                    name: action.newSelectedCryptoDisplay.name,
                    data: action.newSelectedCryptoDisplay.data,
                    priceHistory: action.newSelectedCryptoDisplay.priceHistory
                }

            }
            //===================================================================================//
            //===================================================================================//


        case actionTypes.GET_ALL_USERS:
            // console.log(action)

            return {
                ...state,
                userData: action.allUsersArray
            }


            //===================================================================================//
            //===================================================================================//




        case actionTypes.GET_USER_BY_ID:
            console.log(action)
            return {
                ...state,
                selectedUser: action.targetedUserObj
            }

            //===================================================================================//
            //===================================================================================//
        default:
            return state;
    }
}


//===================================================================================//
//===================================================================================//
export default cryptoDataReducer;