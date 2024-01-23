import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { Flex, Spinner } from '@chakra-ui/react'
import { db } from '../../services/firebase/firebaseConfig'
import { getDoc, doc } from 'firebase/firestore'
import Swal from 'sweetalert2'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'hardware', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProduct(productAdapted)
            })
            .catch(() => {
                Swal.fire({
                    title: "Error",
                    text: "No se pudo traer la información.",
                    icon: "error"
                });
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <Flex justifyContent='center'>{
            loading ? (
                <Spinner size='xl' alignSelf='center' textAlign='center' justifyContent='center' marginTop='20px' />
            )
                : (
                    <ItemDetail {...product} />
                )
        }
        </Flex>
    )
}

export default ItemDetailContainer