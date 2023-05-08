import React from "react";
import {
  CommentDetails,
  CommentsWrapper,
  CustomerTitle,
  StarsWrapper,
} from "./styles";

const Comment = ({ title, startsImg, description }) => {
  return (
    <CommentsWrapper>
      <CustomerTitle>{title}</CustomerTitle>
      <StarsWrapper>
        <img src={startsImg} alt="Five-Stars" />
      </StarsWrapper>
      <CommentDetails>{description}</CommentDetails>
    </CommentsWrapper>
  );
};

export default Comment;
