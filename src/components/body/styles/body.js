import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 80vh;
  margin: 50px;
  padding: 100px;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 0px;
    padding: 0px;
  }
`;

export const TitleHolder = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    margin: 25px;
    padding: 25px;
  }
`;

export const TitleLine = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
  color: black;
  font-size: 40px;
  margin: 0;
  border-bottom: ${(props) => (props.border ? "5px solid #fdc546" : "0px")};

  @media (max-width: 1000px) {
    font-size: 26px;
  }
`;

export const SliderHolder = styled.div`
  display: flex;
  height: 100vh;
  background-color: #fffae2;
  width: 25%;
  position: absolute;
  top: 0px;
  right: 250px;
  margin: 0;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    position: static;
    height: 30vh;
    width: 100%;
  }
`;

export const Corn = styled.img`
  width: 130px;
  transform: rotate(25deg);
  transition: 0.5s;

  &:hover {
    transform: rotate(0deg);
  }

  @media (max-width: 1000px) {
    width: 80px;
  }
`;
