import React from "react";
import {
  ProductImg,
  ProductCard,
  Title,
  CardOverlay,
  OverlayButton
} from "./Home_Card_Styles";
// import { CardText, CardBody, Collapse, Button } from "reactstrap";
import { MdFileUpload } from "react-icons/md";
import Form from "../../imgs/form.jpg";

const PostItemCard = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  return (
    <ProductCard>
      <ProductImg top width="100%" src={Form} alt="Market" />
      <CardOverlay>
        <OverlayButton href="/item-form">
          <Title>
            <MdFileUpload size="2em" /> ADD PRODUCT
          </Title>
        </OverlayButton>
      </CardOverlay>
    </ProductCard>
  );
};

export default PostItemCard;