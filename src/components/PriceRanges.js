import "./PriceRanges.css";

function PriceRanges({priceMin, setPriceMin, priceMax, setPriceMax}) {   
    function changePrice(min,max){
        setPriceMin(min);
        setPriceMax(max);
    }
    return (
       <>
            <h2>
                Price Ranges
            </h2>
            <p className="prices" onClick={() => changePrice(0,5)}>Under $5</p>
            <p className="prices" onClick={() => changePrice(5,10)}>$5 to $10</p>
            <p className="prices" onClick={() => changePrice(10,20)}>$10 to $20</p>
            <p className="prices" onClick={() => changePrice(20,100)}>$20 & Above</p>
       </>
    )
}

export default PriceRanges