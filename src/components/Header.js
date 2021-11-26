import React, { useState} from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice'
function Header() {



    const [burgerStatus, setburgerStatus] = useState(false);
    const cars = useSelector(selectCars);


    
    return (
       <Container>
           <Logo src="/images/logo.svg"></Logo>
           <Menu>
               {cars && cars.map((car, index)=>(
                   <a href="#">{car}</a>
               ))}


           </Menu>
           <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>

                <CustomMenu onClick={()=> setburgerStatus(true)}>


                </CustomMenu>
           </RightMenu>
           
           <BurgerNav show={burgerStatus} >
               <CloseWrapper>
                        <CustomClose onClick={()=> setburgerStatus(false)} />
                </CloseWrapper>
                {cars && cars.map((car, index)=>(
                    <li key={index}><a href="">{car}</a></li>
               ))}
               <li><a href="">Existing Invetory</a></li>
               <li><a href="">Used Invetory</a></li>
               <li><a href="">Trade-in</a></li>
               <li><a href="">Cybertruck</a></li>
               <li><a href="">Roadster</a></li>

           </BurgerNav>
           
       </Container>
    )
}

export default Header
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;

`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding 20px;
    flex-direction: column;
    text-align: start;
    transition: transform 0.25s;
    li {

        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        a{
            font-weight: 600;
        }
    }
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    
`

const CustomMenu = styled(MenuIcon)`

cursor: pointer;
`
const RightMenu = styled.div`

display: flex;
align-items: center;
a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    margin-right: 10px;
    align-items: center;
    
}
`
const Menu = styled.div`
display: flex;
flex: 1;
justify-content: center;
align-items: center;
a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}

@media(max-width: 768px){
    display: none;
}
`
const Container = styled.div`
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    min-height: 60px;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1;

`
const Logo = styled.img`


`