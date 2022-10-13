import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { allOrders, deleteOrder, clearErrors } from '../../actions/orderActions'
import { DELETE_ORDER_RESET } from '../../constants/orderConstants'

const OrdersList = ({ history }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, orders } = useSelector(state => state.allOrders);
    const { isDeleted } = useSelector(state => state.order)

    useEffect(() => {
        dispatch(allOrders());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('Order deleted successfully');
            history.push('/admin/orders');
            dispatch({ type: DELETE_ORDER_RESET })
        }

    }, [dispatch, alert, error, isDeleted, history])

    const deleteOrderHandler = (id) => {
        dispatch(deleteOrder(id))
    }

    return (
        <Fragment>
            <MetaData title={'All Orders'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">All Orders</h1>

                        {loading ? <Loader /> : (
                                 <div className="col-6 col-md-9">
                                 <div className="row">
                                     {orders.map(order => (
                                          <div className="col-sm-12 col-md-6 col-lg-3 my-3" key={order._id}>
                                                             <div className="card p-3 rounded">
                                                             
                                                                    <Link to={`/admin/order/${order._id}`} className="btn btn-primary py-1 px-2">
                                                                        <img src={order.orderItems[0].image} alt="order"/>
                                                                        <i className="fa fa-eye"></i>
                                                                    </Link>
                                                                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteOrderHandler(order._id)}>
                                                                        <i className="fa fa-trash"></i>
                                                                    </button>
                                                             </div>
                                                         </div>
                                         ))
                                     }  
                                 </div>
                         </div>
                        )}
                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default OrdersList
