import React, { useContext } from 'react'
import { IoMdCart } from "react-icons/io";
import { Flex, Text } from '@chakra-ui/react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to='/cart' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
      <Flex justify='center' backgroundColor='white' maxW='fit-content' p='10px' borderRadius='10px' color={'black'} gap={'3px'}>
        < IoMdCart size='30px' color='black' />
        <Text fontSize={'21px'}>{totalQuantity}</Text>
      </Flex>
    </Link>
  )
}

export default CartWidget