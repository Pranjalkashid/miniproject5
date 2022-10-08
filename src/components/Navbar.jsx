import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px ;
    cursor: pointer;
    margin-left: 25px;
    `;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        Electro.
                    </Logo>
                </Center>
                <Right>
                    <NavLink to="/Register"><MenuItem >Register</MenuItem></NavLink>
                    <NavLink to="/Login"><MenuItem >Log In </MenuItem></NavLink>
                    <NavLink to="/Cart"><MenuItem>
                        <Badge badgeContent={2} color="primary">
                             <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                    </NavLink>
                </Right>
            </Wrapper>
        </Container >
    )
}

export default Navbar