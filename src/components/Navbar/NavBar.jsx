import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Flex, Box, Menu, MenuButton, MenuList, MenuItem, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Flex color='white' bg='#6a796a' align='center' p='20px' textAlign='center'>
            <Box flex='1'>
                <Link to='/'><Heading>TecnoHub</Heading></Link>
            </Box>
            <Box w='300px'>
                <Menu>
                    <MenuButton>
                        <Heading size='lg' noOfLines={1}>Filtrar</Heading>
                    </MenuButton>
                    <MenuList color='black'>
                        <Link to={'/category/Procesador'}><MenuItem >Procesadores</MenuItem></Link>
                        <Link to={'/category/Mother'}><MenuItem>Mothers</MenuItem></Link>
                        <Link to={'/category/Gpu'}><MenuItem>Placas</MenuItem></Link>
                    </MenuList>
                </Menu>
            </Box>
            <Box w='300px' align='center'>
                <CartWidget />
            </Box>
        </Flex>
    )
}

export default NavBar