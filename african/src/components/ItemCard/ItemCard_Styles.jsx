import styled from "styled-components";
import {
  Card,
  CardImgOverlay,
  CardText,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;
export const ProductCard = styled(Card)`
  width: 25%;
  margin: 1%;
  background: #f8f9fa !important;
  border: none;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;
export const Title = styled(CardTitle)`
  color: white;
  background-color: #e33734;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 2.5%;
  margin-bottom: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  z-index: 1;
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
  height: 250px;
`;
export const CardOverlay = styled(CardImgOverlay)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 0;
`;
export const OverlayText = styled(CardText)`
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  background: #000000b8;
  padding: 5%;
`;
export const DescriptionButton = styled.div`
  background: white;
  color: #e33734;
  width: 100%;
  border: 0;
  border-radius: 0;
  font-weight: 600;
  z-index: 1;
  padding-bottom: 3%;
  &:hover {
    background: white;
    color: #e33734;
  }
  &:focus{
    border: none;
  }
`;

export const ProfileImg = styled.img`
  border-radius: 100%;
  border: 1px solid white;
  height: 70px;
  width: 70px;
  object-fit: cover;
  margin-bottom: 15px;
`;
