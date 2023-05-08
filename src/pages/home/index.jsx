import React from "react";
import Filters from "../../components/Filters";
import {
  FilterTitle,
  ProductFilter,
  ProductWrapper,
  StyledToggle,
  Wrapper,
} from "./styles";
import { Col, Dropdown, Row } from "react-bootstrap";
import Product from "../../components/Product";
import { products } from "../../components/Filters/data";

const Home = () => {
  return (
    <Wrapper>
      <Filters />
      <ProductWrapper>
        <ProductFilter>
          <FilterTitle>All items</FilterTitle>
          <Dropdown>
            <StyledToggle variant="light" id="dropdown-basic">
              Sort by featured ▼
            </StyledToggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                Price: Low to High
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Price: High to Low
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Customer Review</Dropdown.Item>
              <Dropdown.Item href="#/action-3">New</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Polygon:Low to High
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Polygon:High to Low
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ProductFilter>
        <Row>
          {products.map((products) => {
            return (
              <Col xs={12} md={12} lg={3}>
                <Product key={products.id} products={products} />
              </Col>
            );
          })}
        </Row>
      </ProductWrapper>
    </Wrapper>
  );
};

export default Home;
