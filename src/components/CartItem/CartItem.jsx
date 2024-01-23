import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Text, Flex, Button } from '@chakra-ui/react'

const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext)

    return (
        <Flex justifyContent={'space-between'} p='15px' borderRadius='10px' backgroundColor='#eff2f7' align='center'>
            <Text w={'150px'}>{name}</Text>
            <Text w={'150px'}>Cantidad: {quantity}</Text>
            <Text w={'150px'}>Precio x unidad: {price}</Text>
            <Text w={'150px'}>Subtotal: {price * quantity}</Text>
            <Button onClick={() => removeItem(id)}>X</Button>
        </Flex>
    )
}

export default CartItem