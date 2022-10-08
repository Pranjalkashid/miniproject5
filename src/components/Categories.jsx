import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { NavLink } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;
const Categories = () => {
  return (
    <Container>      
        {categories.map(item => (
          <NavLink to="ProductList"><CategoryItem item={item} key={item.id} /> </NavLink>       
      ))}    
    </Container>
  )
}

export default Categories