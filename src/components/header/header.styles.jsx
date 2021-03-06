import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  img {
    height: 100%;
    width: 70px;
  }
`;
export const OptionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  font-weight: 700;
  cursor: pointer;
`;
