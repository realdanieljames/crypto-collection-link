import React, {useRef, useEffect} from "react";
import Chart from "chart.js/auto";
import {connect} from "react-redux";
import {
    setCryptoData,
    // addCryptoData,
    showCryptoData,
    getCryptoPriceHistory
    } from "../../store/actions/actionCreators";


const CryptoChart = (props) => {

    
    const prices =()=> props.selectedCryptoDisplay.priceHistory.map((price)=>{

        return price[1]
    })
    const dates =()=> props.selectedCryptoDisplay.priceHistory.map((date)=>{
        
        return date[0]
    })
    

    const chartRef = useRef()
    
            // props.getCryptoPriceHistory(props.selectedCryptoDisplay.name)

    useEffect(()=>{
        props.getCryptoPriceHistory(props.selectedCryptoDisplay.data.id);


// const prices = props.selectedCryptoDisplay.priceHistory.map((price)=>{
//     return price[1]
// })
// const dates = props.selectedCryptoDisplay.priceHistory.map((date)=>{
//     return date[0]
// })




        if(chartRef && chartRef.current){
            const chartInstance = new Chart (chartRef.current, 
                {
                    type: 'line',
                    data: {
                        // labels: cryptoDatesArray(),
                        labels: dates(),
                        datasets: [{
                            label: `${props.selectedCryptoDisplay.name} / United States Dollar
                                        ${props.selectedCryptoDisplay.data.symbol.toUpperCase()} /  USD`, 
                            // data: [12, 19, 3, 5, 2, 3],
                            data: prices(),
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                }
                )
                // chartInstance.destroy()

            }
    },[])
  return (
    <div className="crypto__data__display__chart">
      <canvas id="myChart" width='250' height="100" ref={chartRef}></canvas>
    </div>
  );
};

const mapStateToProps = (state)=> {
    return {
        cryptoData: state.cryptoData,
        selectedCryptoDisplay:state.selectedCryptoDisplay
    }
}

export default connect(mapStateToProps, {setCryptoData, showCryptoData, getCryptoPriceHistory})(CryptoChart);
