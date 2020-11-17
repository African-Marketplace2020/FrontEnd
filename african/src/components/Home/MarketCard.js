import React from "react";
import {
  ProductImg,
  ProductCard,
  Title,
  CardOverlay,
  OverlayButton
} from "./Home_Card_Styles";
import { FaStore } from "react-icons/fa";
import Market from "../../imgs/market.jpeg";

const MarketCard = props => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  console.log("Market Card:", props);
  return (
    <ProductCard>
      <ProductImg top width="100%" src={Market} alt="Market" />
      <CardOverlay>
        <OverlayButton href="/item-list">
          <Title>
            <FaStore size="2em" /> VISIT MARKET
          </Title>
        </OverlayButton>
      </CardOverlay>
    </ProductCard>
  );
};

export default MarketCard;
