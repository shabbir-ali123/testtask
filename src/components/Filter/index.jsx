import React from "react";
import Wrapper, { CheckWrapper, Title } from "./styles";
import { Form } from "react-bootstrap";

const FilterCard = ({ title, options, isClickable = true }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <CheckWrapper>
        {options.map((option) => {
          if (isClickable) {
            return <Form.Check inline label={option} />;
          }
          return <Form.Label>{option}</Form.Label>;
        })}
      </CheckWrapper>
    </Wrapper>
  );
};

export default FilterCard;
