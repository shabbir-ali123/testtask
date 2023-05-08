import styled from "styled-components";

export const CommentsWrapper = styled("div")({
  background: "#FFFFFF",
  borderRadius: "7.2px",
  padding: "14px",
  marginLeft: "14px",
  marginTop: "16px",
});

export const CustomerTitle = styled("div")({
  fontWeight: "600",
  fontSize: "16px",
  marginBottom: "10px",
});
export const CommentDetails = styled("p")({
  fontSize: "14px",
  letterSpacing: ".4px",
  color: "#6A6A6A",
});

export const StarsWrapper = styled("div")({
  display: "flex",
  width: "150px",
  marginBottom: "10px",
  "& img": {
    width: "100%",
    height: "100%",
  },
});
