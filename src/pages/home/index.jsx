import { Link } from "react-router-dom"
import { baseURL } from "../../utilities/constants";
import { useAPI } from "../../hooks/api";
import SearchBar from "../../components/SearchBar/SearchBar";


export function Search() {
  return (
    <div>
      <SearchBar placeholder="Enter a product name" data={useAPI}/>
    </div>
  );
}

function Products({products, isLoading, isError }) {
  if (isLoading) {
    return <div>Loading</div>;
  } 
  if (isError) {
    return <div>Error</div>;
  }
  
  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => {
        const discount =
            ((product.price - product.discountedPrice) / product.price) * 100;

            const newPrice = product.discountedPrice.toFixed(2);  
          return (
            <div key={product.id}>
              <h2>
                <Link to={`/product/${product.id}`}>{product.title}</Link>
              </h2>
              <p>Price ${product.price.toFixed(2)}</p>
              {discount > 0 && (
                <p>
                  Discount: {discount.toFixed(2)}% (Save $
                  {(product.price - product.discountedPrice).toFixed(2)})
                </p>
              )}
             
                  {product.price !== product.discountedPrice && (
      <p>New Price ${newPrice}</p>
    )}
              
              <img src={product.imageUrl} alt={product.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}



 export function Home(){
  const {data, isLoading, isError} = useAPI(baseURL);
  if(!isLoading){
    console.log(data)
  }
  
  return(
    <div>
      <Products products={data} isLoading={isLoading} isError={isError} />
    </div>
  )
}

export default Home