import React, { Fragment, useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails, clearErrors } from '../../actions/productActions'
import { addItemToCart } from '../../actions/cartActions'
import { NEW_REVIEW_RESET } from '../../constants/productConstants'
import DatePicker from "react-multi-date-picker";
import { addDays } from 'date-fns';
const ProductDetails = ({ match }) => {

    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, product } = useSelector(state => state.productDetails)
    const { error: reviewError, success } = useSelector(state => state.newReview)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        dispatch(getProductDetails(match.params.id))

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (reviewError) {
            alert.error(reviewError);
            dispatch(clearErrors())
        }

        if (success) {
            alert.success('Reivew posted successfully')
            dispatch({ type: NEW_REVIEW_RESET })
        }

    }, [dispatch, alert, error, reviewError, match.params.id, success])

    const addToCart = () => {
        dispatch(addItemToCart(match.params.id, quantity));
        alert.success('Item Added to Cart')
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    {console.log(product.date)}
                    <MetaData title={product.name} />
                    <div className="row d-flex justify-content-around">
                        <div className="col-12 col-lg-5 img-fluid" id="product_image">
                            <Carousel pause='hover'>
                                {product.images && product.images.map(image => (
                                    <Carousel.Item key={image.public_id}>
                                        <img className="d-block w-100" src={image.url} alt={product.title} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>

                        <div className="details col-12 col-lg-5 mt-5">
                            <h3>{product.name}</h3>
                            <hr />
                            <p id="product_price"><span id="product_oldprice">${product.oldprice}</span>  ${product.price} </p>
                      
                            <hr />

                            <p>Status:</p>
                            <div className="dataPicker">
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    startDate={startDate}
                                    endDate={addDays(startDate, 3)}
                                    excludeDates={[addDays(new Date(), 1), addDays(new Date(), 3)]}
                                    selectsRange
                                    selectsDisabledDaysInRange
                                    inline
                                    />                        
                                 </div>
                            
                            <hr />
                            <h4 className="mt-2">Description:</h4>
                            <p>{product.description}</p>
                            <hr />
                            <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4" 
                             onClick={addToCart}>Rent card</button>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default ProductDetails