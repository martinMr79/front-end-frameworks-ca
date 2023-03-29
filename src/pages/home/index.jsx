import { Link } from "react-router-dom"
import { baseURL } from "../../utilities/constants";
import { useAPI } from "../../hooks/api";
import AutocompleteSearchBar from "../../components/SearchBar/SearchBar";
import { CardContainer } from "../../components/layout/ProductCard/styled"; 
import { ProductCard, ProductImage, Button} from "../../components/layout/ProductCard/styled";



function Products({ products, isLoading, isError }) {
  if (isLoading) {
    return <div>Loading</div>;
  } 
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <ProductCard>
      {products.map((product) => {
        const discount = ((product.price - product.discountedPrice) / product.price) * 100;
        const newPrice = product.discountedPrice.toFixed(2);

        return (
          <div key={product.id}>
            <div style={{ position: 'relative' }}>
              <ProductImage src={product.imageUrl} alt={product.title} />
              <div style={{ position: 'absolute', top: '0', left: '0', padding: '10px', backgroundColor: 'white' }}>
                {product.price !== product.discountedPrice && <p>New Price kr {newPrice}</p>}
                {discount > 0 && (
                  <p>
                    Discount: {discount.toFixed(2)}% (Save kr
                    {(product.price - product.discountedPrice).toFixed(2)})
                  </p>
                )}
              </div>
            </div>
            <h2>{product.title}</h2>
            <p>Price kr {product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`}> 
              <Button>View more</Button> 
            </Link>
          </div>
        );
      })}
    </ProductCard>
  );
}




export function Home() {
  const { data, isLoading, isError } = useAPI(baseURL);

  return (
    <div>
      <div>
        <AutocompleteSearchBar products={data} />
      </div>
      <CardContainer>
      
          <Products products={data} isLoading={isLoading} isError={isError} />
       
      </CardContainer>
    </div>
  );
}

export default Home