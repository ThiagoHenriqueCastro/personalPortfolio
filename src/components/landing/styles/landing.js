import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 90vh;
  background-color: ${(props) => props.color};
  margin: 50px;
  padding: 100px;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 25px;
    padding: 35px;
    justify-content: initial;
  }
`;

export const TitleHolder = styled.div`
  margin-right: 20px;

  @media (max-width: 1000px) {
    margin-bottom: 75px;
  }
`;

export const Title = styled.h1`
  text-align: ${(props) => (props.right ? "right" : "left")};
  color: white;
  font-weight: bold;
  font-size: 60px;

  @media (max-width: 1000px) {
    font-size: 45px;
  }
`;

export const SubTitle = styled.h1`
  text-align: ${(props) => (props.right ? "right" : "left")};
  color: white;
  font-weight: bold;
  font-size: 40px;

  @media (max-width: 1000px) {
    font-size: 16px;
  }
`;

export const Me = styled.img`
  width: 300px;
  transform: rotate(10deg);
  transition: 0.5s;

  &:hover {
    transform: rotate(0deg);
  }

  @media (max-width: 1000px) {
    width: 150px;
    margin-bottom: 75px;
  }
`;
