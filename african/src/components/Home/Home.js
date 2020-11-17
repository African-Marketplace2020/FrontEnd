import React from "react";
import Navbar from "../NavBar/LoggedinNav";
import MarketCard from "./MarketCard";
import PostItemCard from "./PostItemCard";
import { Wrapper, Heading, Title, CardWrapper } from "./Home_Styles";
import Footer from "../Footer/Footer";

const Home = props => {
  console.log("Props in Home", props);
  return (
    <>
      <Navbar home={true} />
      <Wrapper>
        <Heading>
          <Title>WELCOME TO EVENDS</Title>
        </Heading>
        <CardWrapper>
          <MarketCard history={props.history} />
          <PostItemCard history={props.history} />
        </CardWrapper>
      </Wrapper>
      {/* <Carousel/> */}
      <Footer />
    </>
  );
};

export default Home;
