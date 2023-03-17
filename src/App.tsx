import "bootstrap/dist/css/bootstrap.min.css";
import { Filters } from "components/filters";
import { Header } from "components/header";
import { Products } from "components/products";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useStore } from "store/use-store";

function App() {
  const fetchProducts = useStore((store) => store.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <div className="overflow-auto">
        <Container className="flex flex-column">
          <Row className="mb-3 mt-3">
            <Filters />
          </Row>
          <Products />
        </Container>
      </div>
    </div>
  );
}

export default App;
