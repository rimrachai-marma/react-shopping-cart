import { Container, Row, Col } from 'react-bootstrap';

import storeItems from './data/items.json';
import Layout from './components/layout/Layout';
import StoreItem from './components/StoreItem';

function App() {
  return (
    <Layout>
      <Container>
        <h3 className="text-uppercase">Store items</h3>
        <Row xs={1} sm={2} md={3} lg={4} className="g-3">
          {storeItems.map((item) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}

export default App;
