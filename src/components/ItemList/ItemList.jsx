import React from 'react'
import Item from '../Item/Item'
import { Flex } from '@chakra-ui/react'

const ItemList = ({ products }) => {
    return (
        <Flex wrap='wrap' justifyContent='center'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </Flex>
    )
}

export default ItemList