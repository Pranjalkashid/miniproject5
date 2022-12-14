import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import { NavLink } from 'react-router-dom'

const Container = styled.div`
`;
const Wrapper = styled.div`
  padding: 50px;
  display:flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
   //width: 100%;
   // height: 90vh ;
   object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
    font-weight:200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainter = styled.div`
   width: 50%;
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;
`;

const Filter = styled.div`
   display: flex;
   align-items: center;
`;

const FilterTitle = styled.span`
   font-size: 20px;
   font-weight: 200;
`;

const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left:10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option`
`;
const AddContainter = styled.div`
    width: 50%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    
`;
const AmountContainter = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;

`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;

`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
    }
`;

const Product = () => {
  return (
    <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
        <ImgContainer>
          <Image src="https://images-eu.ssl-images-amazon.com/images/I/81cEKnH692L._AC._SR360,460.jpg" />
        </ImgContainer>
        <InfoContainer>
            <Title>
            Canon EOS 200D
            </Title>
            <Desc>Canon EOS 200D || 24.1MP 
                      Digital SLR Camera + EF-S 18-55mm f4 is STM Lens (Black)
                      Brand: Canon
            </Desc>
            <Price>10K</Price>
            <FilterContainter>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor>
                      <FilterColor color="grey"/>
                      <FilterColor color="black"/>
                    </FilterColor>
                </Filter>
                <Filter>
                    <FilterTitle>size</FilterTitle>
                    <FilterSize>
                      <FilterSizeOption>f</FilterSizeOption>
                      <FilterSizeOption>f</FilterSizeOption>
                      <FilterSizeOption>rg</FilterSizeOption>
                      <FilterSizeOption>grg</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainter>
            <AddContainter>
                <AmountContainter>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainter>
                  <NavLink to=" Cart"><Button>ADD TO CART</Button></NavLink>
            </AddContainter>
        </InfoContainer>
    </Wrapper>
    </Container>

  )
}

export default Product
