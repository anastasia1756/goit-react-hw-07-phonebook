import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.newspapper};
  margin: 0 auto;
  max-width: 600px;
  padding: ${(props) => props.theme.spacing(10)};
  border: 1px dashed black;
  border-radius: 8%;
  min-height: 650px;
`;
export const Title = styled.h1`
  margin: 0;
  margin-left: ${(props) => props.theme.spacing()};
`;
export const Contacts = styled.h2`
  margin: 0;
  font-weight: 700;
`;
