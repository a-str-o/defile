import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminProducts } from '../../actions/productActions'
import { deleteProduct, clearErrors } from '../../actions/productActions'
import { DELETE_PRODUCT_RESET } from '../../constants/productConstants'
import Sidebar from './Sidebar'

const ProductsList = ({ history }) => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error  } = useSelector(state => state.products);
    const { error: deleteError, isDeleted } = useSelector(state => state.product)

    const { products } = useSelector(state => state.products)


    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('Product deleted successfully');
            history.push('/admin/products');
            dispatch({ type: DELETE_PRODUCT_RESET })
        }
        dispatch(getAdminProducts())
    }, [dispatch, alert, error, deleteError, isDeleted, history])

    const deleteProductHandler = (id) => {
        dispatch(deleteProduct(id))
    }

    return (
        <Fragment>
            <MetaData title={'All Products'} />
            <div className="row">
            <div className="col-12 col-md-2">
                    <Sidebar />
                </div>
             {loading ? <Loader /> : (
                            <div className="col-6 col-md-9">
                                        <div className="row">
                                            {products.map(product => (
                                                 <div className="col-sm-12 col-md-6 col-lg-3 my-3" key={product._id}>
                                                                    <div className="card p-3 rounded">
                                                                        <img
                                                                            className="card-img-top mx-auto"
                                                                            src={product.images[0].url}
                                                                            alt={product.name}
                                                                        />
                                                                        <div className="card-body d-flex flex-column">
                                                                            <h5 className="card-title">
                                                                                <Link to={`/product/${product._id}`}>{product.name}</Link>
                                                                            </h5>
                                                                            <p className="card-text">${product.price}</p>
                                                                            <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">View Details</Link>
                                                                            <Link to={`/admin/product/${product._id}`} id="view_btn" className="btn btn-block">update Details</Link>
                                                                        </div>   
                                                                        <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteProductHandler(product._id)}>
                                                                            <i className="fa fa-trash"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                        
                                                ))
                                            }  
                                        </div>
                                </div>
                        )}
             </div>
        </Fragment>
    )
}

export default ProductsList
