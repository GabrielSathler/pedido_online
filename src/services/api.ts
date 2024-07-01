import axios from 'axios'

import { CustomerData } from '../interfaces/CustomerData'
import { Snack } from '../interfaces/Snack'
import { SnackData } from '../interfaces/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getBurgers = () => api.get<SnackData[]>('/Burgers')
export const getPizzas = () => api.get<SnackData[]>('/Pizzas')
export const getDrinks = () => api.get<SnackData[]>('/Drinks')
export const getIceCreams = () => api.get<SnackData[]>('/IceCreams')

export const processCheckout = (cart: Snack[], customer: CustomerData) =>
  api.post('/checkout', {
    cart,
    customer: {
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      document: customer.document,
      zipCode: customer.zipCode,
      street: customer.street,
      number: customer.number,
      complement: customer.complement,
      neighborhood: customer.neighborhood,
      city: customer.city,
      state: customer.state,
    },
    payment: {
      creditCardNumber: customer.creditCardNumber,
      creditCardHolder: customer.creditCardHolder,
      creditCardExpiration: `${new Date(customer.creditCardExpiration).getMonth() + 1}/${new Date(
        customer.creditCardExpiration,
      ).getFullYear()}`,
      creditCardSecurityCode: customer.creditCardSecurityCode,
    },
  })

export default api
