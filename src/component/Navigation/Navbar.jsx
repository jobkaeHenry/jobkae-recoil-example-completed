import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "./../Logo";
import logoElem from "../../assets/henry.jpg";
function Navbar() {
  return (
    <Header>
      <Wrapper>
        <Link to={"/"} aria-label="홈으로 이동">
          <Logo src={logoElem} alt="홈 아이콘"/>
        </Link>
        <Nav>
          <Link to={"/"} aria-label="홈으로 이동">홈</Link>
          <Link to={"/cart"} aria-label="장바구니로 이동">장바구니</Link>
        </Nav>
      </Wrapper>
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  height: 72px;
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: #fff;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
const Nav = styled.nav`
  max-width: 1024px;
  display: flex;
  justify-content: right;
  gap: 36px;
  align-items: center;
  > span {
    font-weight: bold;
    cursor: pointer;
  }
`;
export default Navbar;
