import React from "react";
import fiveStarts from "../../assets/images/five-starts.png";
import {
  AvatarTitle,
  AvatarWrapper,
  CircleIcon,
  CircleWrapper,
  DetailsWrapper,
  Emoji,
  StarsWrapper,
  Likes,
  PcTitle,
  ProductImage,
  ProductPrice,
  ProductReview,
  Reactions,
  Wrapper,
  InstalmentWrapper,
  Instalment,
  InstalmentDetails,
  DeliveryWrapper,
  DeliverTitle,
  FreeDelivery,
  FreeTitle,
  FreeDetails,
  Cash,
  ServiceWrapper,
  ServiceTitle,
  Return,
  ReturnTitle,
  ReturnDetails,
  Warranty,
  Location,
  StyledContainer,
  ProductDetails,
  ProductTitle,
  CommentTitle,
} from "./styles";
import { HeartIcon } from "../../components/Svgs";
import { Card, Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import { useLocation, useParams } from "react-router-dom";
import Comment from "../../components/Comment";

const SingleProduct = ({ products }) => {
  const { id } = useParams();
  const { state } = useLocation();
  const product = state || products.find((p) => p.id === id);
  return (
    <Layout>
      <Wrapper>
        <Container>
          <Row>
            <Col xs={12} lg={4}>
              <ProductImage>
                <img src={product.image} alt="Product" />
              </ProductImage>
            </Col>
            <Col xs={12} lg={4}>
              <DetailsWrapper>
                <Card.Text>{product.title}</Card.Text>
              </DetailsWrapper>
              <ProductReview>
                <Reactions>
                  <StarsWrapper>
                    <img src={fiveStarts} alt="Five-Stars" />
                  </StarsWrapper>
                  <Likes>{product.likes}</Likes>
                </Reactions>
                <Emoji>
                  <HeartIcon width="26" height="26" />
                </Emoji>
              </ProductReview>
              <AvatarWrapper>
                <AvatarTitle>{product.avatarName}</AvatarTitle>
              </AvatarWrapper>
              <ProductPrice>
                <span>$</span> {product.price}
              </ProductPrice>
              <CircleWrapper>
                <CircleIcon />
                <PcTitle>{product.pcTitle}</PcTitle>
              </CircleWrapper>
              <InstalmentWrapper>
                <Instalment>Instalment Offers :</Instalment>
                <InstalmentDetails>
                  Installment Offers available up to 36 months
                </InstalmentDetails>
              </InstalmentWrapper>
            </Col>
            <Col xs={12} lg={4}>
              <DeliveryWrapper>
                <DeliverTitle>Delivery</DeliverTitle>
                <Location>Rio de Janeiro, Brazil - Copacabana Beach</Location>
                <FreeDelivery>
                  <FreeTitle>
                    <span>Free Delivery</span> <p>9 May - 10 May</p>
                  </FreeTitle>
                  <FreeDetails>
                    Enjoy free shipping promotion with minimum spend Rs. 39,826
                    in certain area
                  </FreeDetails>
                </FreeDelivery>
                <Cash>Cash on Delivery Available</Cash>
                <ServiceWrapper>
                  <ServiceTitle>Service</ServiceTitle>
                  <Return>
                    <ReturnTitle>7 Days Returns</ReturnTitle>
                    <ReturnDetails>
                      Change of mind is not applicable
                    </ReturnDetails>
                  </Return>
                  <Warranty>1 Year Brand Warranty</Warranty>
                </ServiceWrapper>
              </DeliveryWrapper>
            </Col>
          </Row>
        </Container>
        <StyledContainer>
          <ProductTitle>Details</ProductTitle>
          <ProductDetails>
            Cartoons have been a beloved form of entertainment for decades,
            captivating audiences of all ages with their humor, colorful
            characters, and engaging storylines. The earliest cartoons were
            hand-drawn animations, created frame-by-frame by animators and then
            played back at high speeds to give the illusion of movement. Over
            time, new techniques and technologies have emerged, leading to the
            development of computer-generated animation, 3D animation, and other
            innovative approaches. Cartoons have a unique ability to convey
            complex ideas and emotions through simple and accessible means. They
            can be used to entertain, educate, and inspire, providing a window
            into different cultures, experiences, and perspectives. Cartoons can
            also serve as a powerful tool for social commentary, offering biting
            satire and commentary on politics, society, and other topical
            issues. Perhaps the greatest appeal of cartoons is their universal
            appeal. Regardless of age, gender, or cultural background, everyone
            can find something to enjoy in the world of cartoons. From the silly
            antics of classic Looney Tunes characters like Bugs Bunny and Daffy
            Duck, to the heartfelt messages of modern animated films like Up and
            Toy Story, cartoons have a unique ability.
          </ProductDetails>
          <CommentTitle>Comments</CommentTitle>
          <Row>
            <Col md={6}>
              <Comment
                title="Jack"
                startsImg={fiveStarts}
                description=" Whether you prefer classic hand-drawn animation or
                  cutting-edge CGI, there has never been a better time to dive
                  into the wonderful"
              />
            </Col>
            <Col md={6}>
              <Comment
                title="Reyan Reynold"
                startsImg={fiveStarts}
                description=" Whether you prefer classic hand-drawn animation or
                  cutting-edge CGI, there has never been a better time to dive
                  into the wonderful"
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Comment
                title="Mike Bill"
                startsImg={fiveStarts}
                description=" Whether you prefer classic hand-drawn animation or
                  cutting-edge CGI, there has never been a better time to dive
                  into the wonderful"
              />
            </Col>
            <Col md={6}>
              <Comment
                title="Harry Moran"
                startsImg={fiveStarts}
                description=" Whether you prefer classic hand-drawn animation or
                  cutting-edge CGI, there has never been a better time to dive
                  into the wonderful"
              />
            </Col>
          </Row>
        </StyledContainer>
      </Wrapper>
    </Layout>
  );
};

export default SingleProduct;
