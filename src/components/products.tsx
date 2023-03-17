import { Card, Col, Row } from "react-bootstrap";
import { useStore } from "store/use-store";

export function Products() {
  const products = useStore((store) => store.products);
  const isLoading = useStore((store) => store.isLoading);

  if (isLoading) return <div className="d-flex justify-content-center align-items-center w-100 h-100">Загрузка...</div>;

  if (products.length === 0) return <div className="d-flex justify-content-center align-items-center w-100 h-100">Ничего не найдено</div>;

  return (
    <Row xs={3} className="g-4">
      {products.map((product) => (
        <Col key={product.id}>
          <Card>
            <Card.Img className="h-14" variant="top" src={product.image} style={{ height: "200px", objectFit: "contain" }} />
            <Card.Body>
              <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{product.title}</Card.Title>
              <Card.Text style={{ height: "150px", overflow: "hidden" }}>{product.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text>{product.price} $</Card.Text>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
