import styled from "styled-components";

import colors from "../theme/colors";
import { Link as ReactLink } from "react-router-dom";

export const Link = styled(ReactLink)`
  color: ${({ color }) => (color ? color : colors.copy.text)};
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  @font-face {
    font-family: "Montserrat", sans-serif;
    src: url("../../public/fonts/Montserrat/static/Montserrat-Regular.ttf")
      format("truetype");
  }
`;

export const IconContainer = styled.span`
  margin-right: ${({ icon, label }) => (icon && !label ? "0" : "10px")};
`;
