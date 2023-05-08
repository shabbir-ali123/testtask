import React from "react";
import { Card } from "react-bootstrap";
import fiveStarts from "../../assets/images/five-starts.png";
import { useNavigate } from "react-router-dom";
import {
  AvatarImage,
  AvatarTitle,
  AvatarWrapper,
  CircleIcon,
  CircleWrapper,
  DetailsWrapper,
  Emoji,
  ImageWrapper,
  Likes,
  PcTitle,
  ProductPrice,
  ProductReview,
  Reactions,
  ShoppingTitle,
  ShoppingWrapper,
  StyledCard,
} from "./styles";
import { HeartIcon, SaveIcon, ShopingIcon } from "../Svgs";

const Product = ({ products }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/products/${products.id}`, { state: products });
  };
  return (
    <StyledCard onClick={handleOnClick}>
      <Card.Img variant="top" src={products.image} />
      <Card.Body>
        <Card.Title>{products.title}</Card.Title>
        <ProductReview>
          <Reactions>
            <ImageWrapper>
              <img src={fiveStarts} alt="Five-Stars" />
            </ImageWrapper>
            <Likes>{products.likes}</Likes>
          </Reactions>
          <Emoji>
            <HeartIcon height="18" width="18" />
          </Emoji>
        </ProductReview>
        <AvatarWrapper>
          <AvatarImage>
            <img src={products.image} alt="Avatar" />
          </AvatarImage>
          <AvatarTitle>{products.avatarName}</AvatarTitle>
        </AvatarWrapper>
        <ProductPrice>
          <span>$</span> {products.price}
        </ProductPrice>
        <CircleWrapper>
          <CircleIcon />
          <PcTitle>{products.pcTitle}</PcTitle>
        </CircleWrapper>
        <DetailsWrapper>
          <Card.Text>{products.description}</Card.Text>
          <SaveIcon />
        </DetailsWrapper>
      </Card.Body>
      <ShoppingWrapper>
        <ShopingIcon />
        <ShoppingTitle>Add</ShoppingTitle>
      </ShoppingWrapper>
    </StyledCard>
  );
};

export default Product;
