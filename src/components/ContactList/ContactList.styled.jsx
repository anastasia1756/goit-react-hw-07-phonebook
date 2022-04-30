import styled from "styled-components";

export const ContactsList = styled.ul`
  margin: 0;
  padding: ${(props) => props.theme.spacing(5)};
`;
export const Button = styled.button`
  display: inline-block;
  margin-left: ${(props) => props.theme.spacing(6)};
  width: 80px;
  height: 24px;
  background: repeating-linear-gradient(45deg, black, transparent 100px);
  color: ${(props) => props.theme.colors.craftPapper};
  cursor: pointer;
  transition: ${(props) => props.theme.animation()};

  :hover {
    color: ${(props) => props.theme.colors.newspapper};
    background-color: ${(props) => props.theme.colors.metalic};
    box-shadow: 1px 1px 25px 10px rgba(34, 25, 9, 0.4);
  }
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(224, 218, 206, 0.4),
      transparent
    );
    transition: all 650ms;
  }
`;
