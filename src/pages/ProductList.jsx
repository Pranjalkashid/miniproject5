import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Products from "../components/Products";

const Container = styled.div`
`;
const Title = styled.h1`
   margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
     font-size: 20px;
     font-weight:  600;
     margin-right:20px;
 `;
const Select = styled.select`
    padding: 10px;
    margin-right:20px;
`;
const Option = styled.option`
`;
const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Devices</Title>
        <FilterContainer>
            <Filter>
                 <FilterText>Filter Products:</FilterText> 
                 <Select>
                    <Option disabled selected>
                        Items
                    </Option>
                    <Option>Laptop</Option>
                    <Option>Camera</Option>
                    <Option>T.V</Option>
                    <Option>Washing Machine</Option>
                    <Option>Refregirator</Option>
                    <Option>Mobile</Option>
                 </Select>
                 <Select>
                    <Option disabled selected>
                        color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Navy Blue</Option>
                    <Option>Blue</Option>
                    <Option>Grey</Option>
                 </Select>
            </Filter>
            <Filter> 
                <FilterText>Products color:</FilterText>
                <Select>
                    <Option disabled selected>
                        Price
                    </Option>
                    <Option>1K-5K</Option>
                    <Option>5K-10K</Option>
                    <Option>10K-20K</Option>
                    
                 </Select>
            </Filter>
        </FilterContainer>
        <Products/>
    </Container>
  )
}
export default ProductList
