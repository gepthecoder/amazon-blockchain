import {books} from "../books.js";


function Results({category, rating, priceMin, priceMax}) {

    // filter by rating -> by price (over Min) -> by price (under Max)
    const bookCategory = books[category].filter(x => x.rating >= rating).filter(x => x.price > priceMin).filter(x => x.price <= priceMax);
    console.log(bookCategory);
    
    return (
        <div>Results</div>
    )
}

export default Results