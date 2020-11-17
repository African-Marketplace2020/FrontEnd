import React, { useState, useEffect } from "react";
import {
  ProductImg,
  ProductCard,
  Title,
  SubTitle,
  Price,
  CardOverlay,
  DescriptionButton,
  OverlayText,
  ProfileImg
} from "./ItemCard_Styles";
import { CardText, CardBody, Collapse } from "reactstrap";
import { GiGrain, GiMeat, GiFruitBowl, GiFruiting } from "react-icons/gi";
import Fruits from "../../imgs/fruits.jpg";
import Meats from "../../imgs/meats.jpg";
import Vegetables from "../../imgs/vegetables.jpg";
import Wheat from "../../imgs/wheat.jpg";
import Other from "../../imgs/other.jpg";

const ItemCard = props => {
  const [iconState, setIcon] = useState();
  const [imgURL, setImg] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (props.data.category === "Grains") {
      setIcon(<GiGrain />);
      setImg(Wheat);
    }
    if (props.data.category === "Meats") {
      setIcon(<GiMeat />);
      setImg(Meats);
    }
    if (props.data.category === "Vegetables") {
      setIcon(<GiFruiting />);
      setImg(Vegetables);
    }
    if (props.data.category === "Fruits") {
      setIcon(<GiFruitBowl />);
      setImg(Fruits);
    }
    if (props.data.category === "Other") {
      setImg(Other);
    }
  }, [props.data.category]);

  return (
    <ProductCard>
      <Title>{props.data.name}</Title>
      <ProductImg top width="100%" src={imgURL} alt={props.data.name} />
      <CardOverlay>
        {props.data.image_url ? (
          <ProfileImg src={props.data.image_url} />
        ) : (
          <div></div>
        )}
        <OverlayText>User: {props.data.username}</OverlayText>
      </CardOverlay>
      <DescriptionButton onClick={toggle}>Description</DescriptionButton>
      <Collapse isOpen={isOpen}>
        <CardBody>
          {/* <SubTitle>Vendor: {props.data.username}</SubTitle> */}
          {/* <SubTitle>
            <img src={props.data.image_url} />
          </SubTitle> */}
          <SubTitle>
            Category: {iconState} {props.data.category}
          </SubTitle>
          <SubTitle>Market Area: {props.data.market_area}</SubTitle>
          <SubTitle>Description: {props.data.description}</SubTitle>
          <CardText></CardText>
        </CardBody>
      </Collapse>
      <Price>Price: {props.data.price}</Price>
    </ProductCard>
  );
};

export default ItemCard;
