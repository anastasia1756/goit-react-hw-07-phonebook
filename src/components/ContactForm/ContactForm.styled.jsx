import styled from "styled-components";

export const Form = styled.form`
  border: ${(props) => `2px solid ${props.theme.colors.tin}`};
  max-width: 400px;
  padding: ${(props) => props.theme.spacing(2)};
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
`;
export const Label = styled.label`
  display: block;
`;
export const Input = styled.input`
  margin-left: ${(props) => props.theme.spacing(3)};
`;
export const Button = styled.button`
  width: 150px;
  height: 32px;
  margin-bottom: 12px;
  position: relative;
  overflow: hidden;
  color: ${(props) => props.theme.colors.newspapper};
  background-color: ${(props) => props.theme.colors.tin};
  transition: background-color ${(props) => `${props.theme.animation()}`};
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.colors.black};
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
  :hover:before {
    left: 100%;
  }
`;
