import { useState, useEffect } from 'react'
import { Flex, Heading, Spinner } from '@chakra-ui/react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase/firebaseConfig'
import { getDocs, collection, query, where } from 'firebase/firestore'
import Swal from 'sweetalert2'

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'hardware'), where('category', '==', categoryId))
            : collection(db, 'hardware')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Ha ocurrido un error al obtener los productos",
                })
            })
            .finally(() => {
                setLoading(false)
            })


    }, [categoryId])

    return (
        <Flex flexDirection='column' justifyContent='center' p='20px'>
            <Heading textAlign='center' p='20px'>{greeting}</Heading>
            <Heading textAlign='center' p='20px'>{categoryId}</Heading>
            {
                loading ? (
                    <Spinner size='xl' alignSelf='center' textAlign='center' />
                )
                    : (
                        products.length > 0 ? (
                            <ItemList products={products} />
                        ) : (
                            <>
                            </>
                        )
                    )
            }
        </Flex>
    )
}

export default ItemListContainer