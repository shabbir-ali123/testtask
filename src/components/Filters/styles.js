import styled from "styled-components";

const Wrapper = styled("div")({
  display: "flex",
});
export const FilterWrapper = styled("div")({
  position: "fixed",
  marginTop: "4rem",
  "@media (max-width:991px)": {
    marginTop: "0",
  },
});
export const MainFiltersWrapper = styled("div")({
  width: "214px",
  maxWidth: "100%",
  background: "#FAFAFA",
  "@media (max-width: 991px)": {
    width: "100%",
    maxWidth: "none",
    marginTop: "0",
  },
});

export default Wrapper;
