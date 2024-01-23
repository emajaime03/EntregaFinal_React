import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, Heading, Divider, Text, CardFooter, Stack, Button } from '@chakra-ui/react'

const Item = ({ id, name, description }) => {
    return (
        <Card maxW='sm' margin='10px'>
            <CardBody>
                <Stack mt='6' spacing='3' justifyContent="space-between">
                    <Heading size='md'>{name}</Heading>
                    <Text>{description}</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link to={`/item/${id}`}><Button spacing='2'>Ver detalle</Button></Link>
            </CardFooter>
        </Card>
    )
}

export default Item