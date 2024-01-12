import axios from 'axios';
import { returnErrors } from './errorActions';
import { getOrders, checkout, ordersLoading } from './orderSlice';

export const fetchOrders = (id) => dispatch => {
    dispatch(ordersLoading());
    axios.get(`/api/order/${id}`)
        .then(res => dispatch(getOrders(res.data)))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const initiateCheckout = (id, source) => dispatch => {
    axios.post(`/api/order/${id}`, { source })
        .then(res => dispatch(checkout(res.data)))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}
