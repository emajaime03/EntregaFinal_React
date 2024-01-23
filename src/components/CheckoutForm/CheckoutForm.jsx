import { useState } from "react"
import { FormLabel, Input, Button } from '@chakra-ui/react'

const CheckoutForm = ({ onConfirm }) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <form onSubmit={handleConfirm} className="frmCheckout">
            <FormLabel>
                Nombre
                <Input bg={'#e2e8f0'} color={'black'} borderWidth={'2px'} type='text' value={name} onChange={({ target }) => setName(target.value)} />
            </FormLabel>
            <FormLabel>Teléfono
                <Input bg={'#e2e8f0'} color={'black'} borderWidth={'2px'} type='number' value={phone} onChange={({ target }) => setPhone(target.value)} />
            </FormLabel>
            <FormLabel>Email
                <Input bg={'#e2e8f0'} color={'black'} borderWidth={'2px'} type='email' value={email} onChange={({ target }) => setEmail(target.value)} />
            </FormLabel>
            <Button mt={4} colorScheme='teal' type='submit' >
                Submit
            </Button>
        </form>
    )
}

export default CheckoutForm