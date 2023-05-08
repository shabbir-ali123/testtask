import { Form } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled("div")({
  width: "256px",
  background: "#FAFAFA",
});
export const Title = styled("div")({
  marginLeft: "10px",
  fontFamily: "Inter",
  fontWeight: "700",
  fontSize: "12px",
});
export const CheckWrapper = styled(Form.Check)({
  display: "flex",
  flexDirection: "column",
  marginLeft: "21px",
  marginTop: "5px",
  "& input:focus": {
    boxShadow: "inherit",
  },
  "& label": {
    fontWeight: "500",
    fontSize: "12px",
  },
});
export default Wrapper;
