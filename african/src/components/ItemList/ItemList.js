import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ItemCard from "../ItemCard/ItemCard";
import Navbar from "../NavBar/LoggedinNav";
import Footer from "../Footer/Footer";
import {
  Wrapper,
  ItemWrapper,
  Title,
  SearchBar,
  Heading,
  SearchInput
} from "./Item_List_Styles";
import { InputGroupAddon, InputGroupText, Spinner } from "reactstrap";
import { FaSearch } from "react-icons/fa";
import { fetchProducts } from "../../actions/actions";

const ItemList = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    props.fetchProducts();
    console.log("Fetching Products....");
  }, []); //Get Product Data Use Effect

  //SearchBar Functionality
  useEffect(() => {
    const results = props.productData.filter(
      descriptions =>
        descriptions.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        descriptions.category
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        descriptions.market_area
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, props.productData]);

  const handleChanges = event => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    // console.log(event.target.value);
  };

  var listRender;
  if (searchTerm.length === 0) {
    listRender = (
      <>
        <ItemWrapper>
          {props.productData.map(item => (
            <ItemCard
              key={item.id}
              data={item}
              allData={props.productData}
              username={props.productData.username}
            />
          ))}
        </ItemWrapper>
        <Footer />
      </>
    );
  } else {
    listRender = (
      <>
        <ItemWrapper>
          {searchResults.map(item => (
            <ItemCard
              key={item.id}
              data={item}
              allData={props.productData}
              username={props.productData.username}
            />
          ))}
        </ItemWrapper>
        <Footer />
      </>
    );
  }

  console.log(props);

  return (
    <>
      <Navbar market={true} />
      <Wrapper>
        <Heading>
          <Title>MARKET PLACE</Title>
          <SearchBar>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FaSearch />
              </InputGroupText>
            </InputGroupAddon>
            <SearchInput
              onChange={handleChanges}
              value={searchTerm}
              type="search"
              placeholder="Search Products"
              name="search"
            />
          </SearchBar>
        </Heading>
        {props.isFetching ? (
          <div>
            <Spinner color="danger" />
            <br />
            <p>Loading...</p>
          </div>
        ) : (
          listRender
        )}
      </Wrapper>
    </>
  );
};

export default connect(
  state => {
    return {
      productData: state.productData,
      isFetching: state.isFetching,
      error: state.error
    };
  },
  { fetchProducts }
)(ItemList);
