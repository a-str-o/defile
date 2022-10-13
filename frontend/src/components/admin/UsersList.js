import React, { Fragment, useEffect } from 'react'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers, deleteUser, clearErrors } from '../../actions/userActions'
import { DELETE_USER_RESET } from '../../constants/userConstants'

const UsersList = ({ history }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, users } = useSelector(state => state.allUsers);
    const { isDeleted } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(allUsers());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('User deleted successfully');
            history.push('/admin/users');
            dispatch({ type: DELETE_USER_RESET })
        }

    }, [dispatch, alert, error, isDeleted, history])

    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id))
    }

    return (
        <Fragment>
            <MetaData title={'All Users'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>
                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">All Users</h1>

                        {loading ? <Loader /> : (
                                 <div className="col-6 col-md-9">
                                 <div className="row">
                                     {users.map(user => (
                                          <div className="col-sm-12 col-md-6 col-lg-3 my-3" key={user._id}>
                                                             <div className="card p-3 rounded">
                                                                 <div className="card-body d-flex flex-column">
                                                                     <h5 className="card-title">
                                                                         <h6>{user.name}</h6>
                                                                         <h6>{user.email}</h6>
                                                                     </h5>
                                                                 </div>   
                                                                 <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteUserHandler(user._id)}>
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

export default UsersList
