import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'

const useCounter = (initial, stock) => {

    const [counter, setCounter] = useState(initial)

    const increment = () => {
        if (stock > counter) {
            setCounter((counter) => counter + 1)
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Stock máximo alcanzado.",
            })
        }
    }

    const decrement = () => {
        if (counter > 1) {
            setCounter((counter) => counter - 1)
        }
    }

    return {
        counter,
        increment,
        decrement
    }
}

export default useCounter