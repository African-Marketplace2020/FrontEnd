import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Wrapper,
  FormWrapper,
  Form,
  InputWrapper,
  Title,
  Submit,
  TopBar,
  Heading
} from "./Add_Item_Form_Styles";
import {Input, Label, Alert} from 'reactstrap';

import LoggedinNav from "../NavBar/LoggedinNav";
import Footer from "../Footer/Footer";
import { createProduct } from "../../actions/actions";
import axiosWithAuth from "../../utils/axiosWithAuth";
import ImageUpload from "../ImageUpload/ImageUpload";


const initialValues = {
  category: "",
  market_area: "",
  name: "",
  description: "",
  price: "",
  image_url: ""
};

const AddItemForm = props => {
  const [newProduct, setNewProduct] = useState(initialValues);
  const [currentUser, setCurrentUser] = useState({
    currentUserId: null,
    currentUsername: ""
  });
  const [image, setImage] = useState("");
  const [error, setError] = useState(''); //Error State
  const [spinner, setSpin] = useState(false); //Spinner
  const [successAlert, setSuccessAlert] = useState(false); //Alert State
  const [visibleWarning, setWarning] = useState(false); //Alert State
  const [valid, setValid] = useState(false);
  const [invalid, setInValid] = useState(false);
  const onDismiss = () => {
    setSuccessAlert(false);
    setWarning(false);
}
  console.log('the product form values are:',newProduct);
  useEffect(() => {
    axiosWithAuth()
      .get("https://african-marketplace-webpt-tt95.herokuapp.com/api/users/current")
      .then(res => {
        console.log(res.data);
        setCurrentUser(res.data);
      })
      .catch(err => console.log(err.messsage));
  }, []);

  const handleChanges = e => {
    e.preventDefault();
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
      image_url: image
    });
    if(e.target.value === ''){
      e.target.classList.remove('is-valid')
    }else{
      e.target.classList.add('is-valid')
      setInValid(false);
    }
    console.log('The Target Is Valid:', e.target.value);
  };
  //handles submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateProduct(newProduct);
    (console.log('Uploading Product...', newProduct));
    if(isValid){
      setSpin(true);
      setSuccessAlert(true);
      setWarning(false);
      setTimeout(function(){ 
        props.history.push("/item-list");
      }, 3000);
      props.createProduct(newProduct, currentUser.currentUserId);
    }else{
      setWarning(true);
    }
  };
  //validates form
  const validateProduct = (props) =>{
    console.log('Register Validation Props:', props);
    if(props.name === '' && props.descriptions === '' && props.price === '' && props.market_area === '' && props.category === '' ){
      setError(`Fields Cannot Be Blank`);
      setValid(false);
      return false;
    }
    if(props.name === ''){
      setError(`Product Name Cannot Be Blank`);
      return false
    }
    if(props.description === ''){
      setError(`Description Cannot Be Blank`);
      return false
    }
    if(props.price === ''){
      setError(`Price Cannot Be Blank`);
      return false
    }
    if(props.market_area === ''){
      setError(`Market Area Cannot Be Blank`);
      return false
    }
    if(props.category === ''){
      setError(`Category Cannot Be Blank`);
      return false
    }
    return true;
  }
  console.log(newProduct);
  console.log(currentUser.currentUserId);
  console.group(`image: ${image}`);

  return (
    <div>
      <LoggedinNav postItems={true} />
      <Wrapper>
        <Heading>
            <Title>POST PRODUCTS</Title>
        </Heading>
        <FormWrapper>
          <TopBar>
            <Title>Fill Out The Form</Title>
          </TopBar>
          <Form onSubmit={handleSubmit}>
            <div>
              <InputWrapper>
                <Label>Product:</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Beans"
                  value={newProduct.product}
                  onChange={handleChanges}
                  valid={valid}
                  invalid={invalid}
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Description: </Label>
                <Input
                  type="text"
                  name="description"
                  placeholder="5 pounds/Kidney"
                  value={newProduct.description}
                  onChange={handleChanges}
                  valid={valid}
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Price: </Label>
                <Input
                  type="text"
                  name="price"
                  placeholder="300.00 RWF"
                  value={newProduct.price}
                  onChange={handleChanges}
                  valid={valid}
                />
              </InputWrapper>
              <InputWrapper>
              <Label>Category: </Label>
                <Input
                  type="select"
                  name="category"
                  placeholder="Vegetables"
                  value={newProduct.category}
                  onChange={handleChanges}
                  valid={valid}
                >
                  <option>Choose Category</option>
                  <option>Vegetables</option>
                  <option>Meats</option>
                  <option>Grains</option>
                  <option>Fruits</option>
                  <option>Other</option>
                </Input>
              </InputWrapper>
              <InputWrapper>
              <Label>Market Area:</Label>
                <Input
                  type="select"
                  name="market_area"
                  placeholder="Rwanda"
                  value={newProduct.market_area}
                  onChange={handleChanges}
                  valid={valid}
                >
                  <option>Choose Location</option>
                  <option>Rwanda</option>
                  <option>Kenya</option>
                  <option>Uganda</option>
                  <option>Ethiopia</option>
                </Input>
              </InputWrapper>
              <InputWrapper style={{textAlign:"center"}}>
                <ImageUpload setImage={setImage} />
              </InputWrapper>
              <Submit>Submit</Submit>
              <br></br>
              <Alert color="success" isOpen={successAlert} toggle={onDismiss}>
                    Item Posted Successfully!
                </Alert>
              <Alert color="danger" isOpen={visibleWarning} toggle={onDismiss}>
                {error}
            </Alert>
            </div>
          </Form>
        </FormWrapper>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default connect(
  state => {
    return {
      productData: state.productData,
      error: state.error,
      isFetching: state.isFetching
    };
  },
  { createProduct }
)(AddItemForm);
