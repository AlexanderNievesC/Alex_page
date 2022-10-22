import styled from "@emotion/styled";
import { colors } from "../../styles";

const StyledButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: ${colors.yellow[400]};
  color: ${colors.black};
  margin: 4px 2px;
  cursor: pointer;
`;

function Button({ size, children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
