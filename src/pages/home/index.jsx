import { Link } from "react-router-dom";
import { baseURL } from "../../utilities/constants";
import { useAPI } from "../../hooks/api";
import AutocompleteSearchBar from "../../components/SearchBar/SearchBar";
import backgroundImage from "../../assets/images/background-image2.jpg";
import {
  CardContainer,
  ProductCard,
  ProductImage,
  Button,
  ProductPrice,
  DiscountInfo,
  
} from "../../components/layout/ProductCard/styled";


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
        const discount =
          ((product.price - product.discountedPrice) / product.price) * 100;
        const newPrice = product.discountedPrice.toFixed(2);
        const isValid = product.price === product.discountedPrice;

        return (
          <div key={product.id}>
            <div style={{ position: "relative" }}>
              <ProductImage src={product.imageUrl} alt={product.title} />
              {discount > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "28px",
                    left: "28px",
                    padding: "5px",          
                    backgroundColor: "#F01211",
                    borderRadius: "10px",
                 
                  }}
                >
                    <DiscountInfo  style={{color: "white" }}>
                    -{discount.toFixed(2)}% 
                    </DiscountInfo>
                </div>
              )}

              {discount > 0 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "32px",
                    left: "28px",
                    padding: "5px",
                    backgroundColor: "#E8CE58",
                    borderRadius: "10px",
                  }}
                >


              <DiscountInfo>
                   Save kr {(product.price - product.discountedPrice).toFixed(2)}
              </DiscountInfo> 
                </div>
              )}

            </div>
            <h2>{product.title}</h2>
            <ProductPrice isValid={isValid}>
              {isValid ? (
                `kr ${product.price.toFixed(2)}`
              ) : (
                <>
                  <span style={{ textDecoration: "line-through" }}>
                    kr {product.price.toFixed(2)}
                  </span>{" "}
                   Now kr {newPrice}
                </>
              )}
            </ProductPrice>

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
      <div style={{ backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      height: "450px",
      backgroundPosition: "center" 
       }}>
        <AutocompleteSearchBar products={data} />
      </div>
      <h1>Products</h1>
      <CardContainer>
        <Products products={data} isLoading={isLoading} isError={isError} />
      </CardContainer>
    </div>
  );
}

export default Home;

