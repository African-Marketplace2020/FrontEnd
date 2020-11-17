import styled from "styled-components";
import { Card, CardImgOverlay, CardSubtitle, Button } from "reactstrap";

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;
export const ProductCard = styled(Card)`
  width: 50%;
  background: black;
  border: none;
`;
export const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 2.5%;
  margin-bottom: 0;
  text-decoration: none;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
  p {
    text-decoration: none;
  }
`;
export const Price = styled(CardSubtitle)`
  color: white;
  background-color: black;
  font-weight: bold;
  font-size: 1rem;
  padding: 2%;
  z-index: 1;
`;
export const SubTitle = styled(CardSubtitle)`
  color: #e33734;
  font-weight: bold;
  font-size: 1rem;
  margin: 1%;
`;
export const ProductImg = styled.img`
  opacity: 0.35;
`;
export const CardOverlay = styled(CardImgOverlay)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 0;
`;
export const OverlayButton = styled.a`
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  background: #000000b8;
  border: 0;
  padding: 5%;
  width: 50%;
  &:hover {
    background: #e33734;
    text-decoration: none;
  }
`;
export const DescriptionButton = styled(Button)`
  background: white;
  color: #e33734;
  width: 100%;
  border: 0;
  border-radius: 0;
  font-weight: 600;
  z-index: 1;
  &:hover {
    background: white;
    color: #e33734;
  }
`;
