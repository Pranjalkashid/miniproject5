import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'

const Containter = styled.div`
`;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
   font-weight: 300;
   text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weinght: 600;
  cursor: pointer;
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${props => props.type === "filled" && "white"}
`;
const TopTexts = styled.div``;
const TopText = styled.div`
  text-decoration: underline;
  cursor:pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width : 200px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`;
const ProductName = styled.span`
`;
const ProductId = styled.span`
`;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background:${props => props.color};
`;
const ProductSize = styled.span`
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
    display:flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;
const ProductPrice = styled.div`
     font-size: 30px;
     font-weight: 200;
`;
const Hr = styled.div`
    background-color: #eee;
    border: none;
    height: 1x;
`;

const Summary = styled.div`
    flex: 1;  
    border:0.5px solid lightgray;
    border-radius:10px;
    padding: 20px; 
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display:flex;
    justify-content: space-between;
    font-weight: ${props => props.type == " total" && "500"}
    font-size: ${props => props.type == " total" && "24px"}
`;
const SummaryItemText = styled.span`
`;
const SummaryItemPrice = styled.span`
`;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    backgroundcolor: black;
    color: white;
    font-weight: 600;

`;
const Cart = () => {
  return (
    <Containter>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton> CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled" > CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images-eu.ssl-images-amazon.com/images/I/81cEKnH692L._AC._SR360,460.jpg" />
                <Details>
                  <ProductName><b>Product:</b>Canon EOS 200D </ProductName>
                  <ProductId><b>ID:</b>4524425525 </ProductId>
                  <ProductColor color="black" />
                  <ProductSize><b>Size:</b>15cm width </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice> 5,000 Rs. </ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://images-eu.ssl-images-amazon.com/images/I/81cEKnH692L._AC._SR360,460.jpg" />
                <Details>
                  <ProductName><b>Product:</b>Canon EOS 200D </ProductName>
                  <ProductId><b>ID:</b>4524425525 </ProductId>
                  <ProductColor color="black" />
                  <ProductSize><b>Size:</b>15cm width </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice> 5,000 Rs. </ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryItem>
              <SummaryTitle>ORDER SUMMARY </SummaryTitle>
              <SummaryItemText>subtotal</SummaryItemText>
              <SummaryItemPrice>10,000</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>11,000</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>1,000</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemPrice>10,000</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW </Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Containter>
  )
}
export default Cart
