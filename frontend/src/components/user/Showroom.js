import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'
const Showroom = () => {

    const { user, loading } = useSelector(state => state.auth)

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Showroom'} />
                    <center className="showw">
                      <h1>Notre Showroom</h1>
                        <h2>RÉSERVATION EN LIGNE</h2>
                        <p>Notre Showroom est situé au 45 rue de Courcelles, 75008 Paris et reçoit sur RDV sans interruption du lundi au samedi de 9h30 à 19h30.</p>
                        <p>Choisissez un jour</p>
                      
                    </center>
                   
                </Fragment>
            )}
        </Fragment>
    )
}

export default Showroom