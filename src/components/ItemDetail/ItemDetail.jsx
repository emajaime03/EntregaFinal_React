import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Card, CardBody, Heading, Divider, Text, Box, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, name, price, category, description, stock }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
        <Card maxW='sm' margin='50px'>
            <CardBody>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <Text>Categoría: {category}</Text>
                    <Text>{description}</Text>
                </Stack>
            </CardBody>
            <Text paddingLeft='20px' paddingBottom='10px' color='blue.600' fontSize='2xl'>
                ${price}
            </Text>
            <Divider />
            <Box p='20px'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </Box>
        </Card>
    )
}

export default ItemDetail