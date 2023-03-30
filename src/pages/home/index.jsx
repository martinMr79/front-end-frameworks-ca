import { Link } from "react-router-dom";
import { baseURL } from "../../utilities/constants";
import { useAPI } from "../../hooks/api";
import AutocompleteSearchBar from "../../components/SearchBar/SearchBar";
import {
  CardContainer,
  ProductCard,
  ProductImage,
  Button,
  ProductPrice,
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
              <div
                style={{
                  position: "absolute",
                  top: "24px",
                  left: "24px",
                  padding: "10px",
                  backgroundColor: "#ff0099",
                }}
              >
                {discount > 0 && (
                  <p>
                    -{discount.toFixed(2)}% Save kr
                    {(product.price - product.discountedPrice).toFixed(2)}
                  </p>
                )}
              </div>
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
                  | Now kr {newPrice}
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
      <div>
        <AutocompleteSearchBar products={data} />
      </div>
      <CardContainer>
        <Products products={data} isLoading={isLoading} isError={isError} />
      </CardContainer>
    </div>
  );
}

export default Home;
