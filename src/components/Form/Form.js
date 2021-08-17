import React, {useContext} from 'react';
import DetailForm from './DetailForm';
import {database} from './../../Firebase/Firebase';
import { CartContext } from '../Context/CartContext';


const Form = (cart) => {

    const { totalCart, deleteCart} = useContext(CartContext);     

    const addCart =  (inputs) => {
            const handleOrder = {
                buyer: inputs,
                items: cart,
                fecha: new Date().toString(),
                total: totalCart(),
            }
            
            const orders = database.collection('ordenes');
            
            console.log(handleOrder)
            
                orders.add(handleOrder).then((resp) => {alert('Agregado correctamente. N. Orden: ' + resp.id)}).catch((error) => {alert('error', error)});

                deleteCart()
        }
    return(
        <>
        <DetailForm  addCart={addCart} cart={cart}/>
        </>
    )
}

export default Form;