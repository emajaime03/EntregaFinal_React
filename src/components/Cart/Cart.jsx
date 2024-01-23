import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import { Text, Flex, Button, Box } from '@chakra-ui/react'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity == 0) {
        return (
            <Box justifyContent={'center'} textAlign={'center'}>
                <Text fontSize={'30px'} p={'10px'}>No hay items en el carrito</Text>
                <Link to='/'><Button>Ir a productos</Button></Link>
            </Box>
        )
    }

    return (
        <Flex flexDir='column' p='50px' gap='10px'>
            <Text backgroundColor='white' maxW='fit-content' p='10px' borderRadius='10px' alignSelf='end'>Total: ${total}</Text>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <Button onClick={() => clearCart()}>Limpiar carrito</Button>
            <Link to='/checkout' className='link'>Checkout</Link>
        </Flex>
    )
}

export default Cart