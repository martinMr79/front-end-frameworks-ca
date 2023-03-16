import { Link } from "react-router-dom"
import { baseURL } from "../../utilities/constants";
import { useAPI } from "../../hooks/api";
import AutocompleteSearchBar from "../../components/SearchBar/SearchBar";
import { CardContainer } from "../../components/layout/ProductCard/styled"; 
import { ProductCard, ProductCards, ProductImage } from "../../components/layout/ProductCard/styled";



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
            <ProductImage src={product.imageUrl} alt={product.title} />
            <h2>
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </h2>
            <p>Price kr {product.price.toFixed(2)}</p>
            {discount > 0 && (
              <p>
                Discount: {discount.toFixed(2)}% (Save kr
                {(product.price - product.discountedPrice).toFixed(2)})
              </p>
            )}
            {product.price !== product.discountedPrice && <p>New Price kr {newPrice}</p>}
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
        <ProductCards>
          <Products products={data} isLoading={isLoading} isError={isError} />
        </ProductCards>
      </CardContainer>
    </div>
  );
}

export default Home