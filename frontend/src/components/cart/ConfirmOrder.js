import React, { Fragment,useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'
import MetaData from '../layout/MetaData'
import CheckoutSteps from './CheckoutSteps'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder, clearErrors } from '../../actions/orderActions'
import { removeItemFromCart } from '../../actions/cartActions'




import DatePicker, { DateObject, getAllDatesInRange } from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"





const ConfirmOrder = ({ history }) => {

    const { cartItems, shippingInfo } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)

    const [dates, setDates] = useState([])
    const [allDates, setAllDates] = useState([])
    const [errorMessage, setErrorMessage,] = useState("")


    // Calculate Order Prices
    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shippingPrice = itemsPrice > 200 ? 0 : 25
    const taxPrice = Number((0.20 * itemsPrice).toFixed(2))
    const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2)
    const dispatch = useDispatch();
    const { error } = useSelector(state => state.newOrder)
    useEffect(() => {

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

    }, [dispatch, alert, error])
    const order = {
        orderItems: cartItems,
        shippingInfo
    }
    const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
    if (orderInfo) {
        order.itemsPrice = orderInfo.itemsPrice
        order.shippingPrice = orderInfo.shippingPrice
        order.taxPrice = orderInfo.taxPrice
        order.totalPrice = orderInfo.totalPrice
    }


    const processToPayment = () => {
        
        if (dates.length <= 1 )
        {
            setErrorMessage("add time to product")
            return;
        }
        
        const data = {
            itemsPrice: itemsPrice.toFixed(2),
            orderItems:cartItems,
            totalPrice
        }
        
             
        sessionStorage.setItem('orderInfo', JSON.stringify(data))
        dispatch(createOrder(order))
        
        cartItems.map(item => (dispatch(removeItemFromCart(item.product))))
        history.push('/success')
    }
    
    return (
        <Fragment>

            <MetaData title={'Confirm Order'} />

            <CheckoutSteps shipping confirmOrder />

            <div className="row d-flex justify-content-between">
                <div className="col-12 col-lg-8 mt-5 order-confirm">

                    <h4 className="mb-3">Shipping Info</h4>
                    <p><b>Name:</b> {user && user.name}</p>
                    <p><b>Phone:</b> {shippingInfo.phoneNo}</p>
                    <p className="mb-4"><b>Address:</b> {`${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`}</p>

                    <hr />
                    <h4 className="mt-4">Your Cart Items:</h4>

                    {cartItems.map(item => (
                        <Fragment>
                            <hr />
                            <div className="cart-item my-1" key={item.product}>
                                <div className="row">
                                    <div className="col-4 col-lg-2">
                                        <img src={item.image} alt="Laptop" height="45" width="65" />
                                    </div>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        <p>${item.price}</p>
                                        <div className="col-4 col-lg-2">
                                            add time :
                                                    {/* we will add time to product by id={item.product} */}

                                                    <div>
                                                <DatePicker
                                                    range
                                                    calendarPosition="top-left"
                                                    fixMainPosition
                                                    value={item.date}
                                                    minDate={new Date()}
                                                    onChange={dateObjects => 
                                                        {
                                                        setDates(dateObjects)
                                                        setAllDates(getAllDatesInRange(dateObjects))
                                                        }}
                                                    plugins={[
                                                    <DatePanel eachDaysInRange />
                                                    ]}
                                                />
                                                {dates.length > 1 &&
                                                    <div>
                                                    <ul>
                                                        {allDates.map((date, index) => <li key={index}>{date.format()}</li>)}
                                                    </ul>
                                                    </div>
                                                }
</div>




                                        </div>
                                    
                                </div>
                            </div>
                            <hr />
                        </Fragment>
                    ))}



                </div>

                <div className="col-12 col-lg-3 my-4">
                    <div id="order_summary">
                        <h4>Order Summary</h4>
                        <hr />
                        <p>Subtotal:  <span className="order-summary-values">${itemsPrice}</span></p>

                        <hr />
                        <button id="checkout_btn" className="btn btn-primary btn-block" onClick={processToPayment}>Order</button>
                        <hr />
                        {errorMessage}
                    </div>
                </div>


            </div>

        </Fragment>
    )
}

export default ConfirmOrder





