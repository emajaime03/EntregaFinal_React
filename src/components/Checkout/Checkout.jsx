import { useContext, useState } from 'react'
import { db } from '../../services/firebase/firebaseConfig'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { CartContext } from '../../context/CartContext'
import { Timestamp, collection, documentId, getDocs, writeBatch, query, where, addDoc } from 'firebase/firestore'
import Swal from 'sweetalert2'
import { Text, Flex, Heading, Spinner } from '@chakra-ui/react'

const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'hardware')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id == doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length == 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Hay productos sin stock en el carrito.",
                })
            }
        }
        finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <Flex justifyContent={'center'} flexDir={'column'} textAlign={'center'} align={'center'}>
                <Text textAlign='center' fontSize='30px' p={'10px'}>Se esta generando su orden...</Text>
                <Spinner></Spinner>
            </Flex>
        )
    }

    if (orderId) {
        return (
            <Text textAlign='center' fontSize='30px' p={'10px'}>El id de su compra es: {orderId}</Text>
        )
    }

    return (
        <div>
            {
                cart.length != 0 ? (
                    <Flex flexDir='column' p='20px' align='center' gap='15px'>
                        <Heading textAlign='center'>Checkout</Heading>
                        <CheckoutForm onConfirm={createOrder} />
                    </Flex>
                ) : (
                    <>
                    </>
                )

            }
        </div>
    )
}

export default Checkout