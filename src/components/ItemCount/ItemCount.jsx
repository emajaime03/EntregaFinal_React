import React from 'react'
import useCounter from '../../hooks/useCounter'
import { Flex, Button, Text } from '@chakra-ui/react'

const ItemCount = ({ initial, onAdd, stock }) => {

    const { counter, increment, decrement } = useCounter(initial, stock)

    return (
        <div>{
            stock > 0 ? (
                <Flex flexDirection='row' gap='10px' justifyContent='center'>
                    <Button onClick={decrement}>-</Button>
                    <Flex>
                        <Button onClick={() => onAdd(counter)}>Agregar al carrito {counter}</Button>
                    </Flex>
                    <Button onClick={increment}>+</Button>
                </Flex>
            ) : (
                <Flex flexDirection='row' gap='10px' justifyContent='center'>
                    <Text>No queda stock en este producto.</Text>
                </Flex>
            )
        }
        </div>
    )
}

export default ItemCount