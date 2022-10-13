import React, { Fragment, useEffect ,useState} from 'react'
import MetaData from './layout/MetaData'
import Boxcontainer from './cards/box'
import './Home.css'
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Box1 from '../assets/icons/1.png'
import Box2 from '../assets/icons/2.png'
import Box3 from '../assets/icons/3.png'
import Box4 from '../assets/icons/4.png'
import Box5 from '../assets/icons/5.png'
import Box6 from '../assets/icons/6.png'
import './product.css';
import Loader from './layout/Loader';

import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions';
import Slide from './Slider/Slide';

const First = ({match}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [price, setPrice] = useState([1, 1000])
  const [category, setCategory] = useState('')
    const dispatch = useDispatch();

    const { loading, products, error } = useSelector(state => state.products)

    const keyword = match.params.keyword
    
    useEffect(() => {
        if (error) {
          
            setPrice([1,1000])
            setCategory('')
            setCurrentPage(1)
            return alert.error(error)
            
        }

        dispatch(getProducts(keyword, currentPage, price, category));
       

    }, [dispatch, alert, error, keyword, currentPage, price, category])


  return (
    <Fragment>
      {loading ? <Loader /> : (
        <Fragment>
      <MetaData title={'home'} />
        <div className='home-container'>
           {/* home page hero image */}
            <div className="hero-image">
              <div className="hero-text">
                <h1 className='text'>Oser se réinventer <br/> tous les jours</h1>
                <p >
                  Notre box de vêtements a été pensée pour vous offrir la liberté de vous
                  affirmer chaque jour avec de belles pièces.
                  Parce que chaque moment est précieux, notre dressing vous accompagne
                  au gré de vos besoins et de vos envies.
                  Il évolue en permanence. Comme vous
                </p>
                <button className='button-hero'>DÉCOUVRIR</button>
              </div>
            </div>

          {/* selection section */}
          <div className='section-container'>
            <h2 className='selection'>Les nouveautés</h2>
            {/* <Card /> */}
            <Slide products={products}/>
            <Link to={`/Shop`}>
               <button className='button-section'>Voir toutes les sélections</button>
            </Link>
          

          </div>



          {/* Nous rejoindre */}
          <div className='rejoindre-container'>
            <div className='rejoindre-box'>
            <h2 className='selection'> . <br/>Rejoindre la communauté</h2>
            <p className='paragraph'>Devenez membre et accédez à un dressing
                illimité, qui évolue en permanence.
                Trouver la formule qui vous convient, à vous et
                à votre budget.
                Aucun engagement. Vous pouvez mettre en
                pause ou annuler à tout moment. </p>

              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                   
                      <div className='card-box'>
                        <h1  className='essentiel'>Box Essentiel</h1>
                        <div className='box-text'>
                          <p>Votre booster de dressing composé d'essentiels et de pièces mode.</p>
                          <p>✓ Une box de 3 vêtements de votre choix dans la collection "Essentiel".</p>
                        </div>
                      
                      <button className='button-Essentiel'>S'ABONNER</button>
                      <center>
                        <p ><strong><span role="img" aria-labelledby="flash">⚡&nbsp;</span>VENTE FLASH <span role="img" aria-labelledby="flash">⚡</span><br/>
                            VOTRE BOX POUR 49€* AU LIEU DE 69€</strong></p>
                      </center>
                      
                      </div> 
                      <center>
                      <div><span role="img" aria-labelledby="start">⭐⭐⭐⭐⭐</span></div>
                      <p>"Un service client au top, toujours à l'écoute et qui vous facilite les choses ! Je recommande"
                          Marguerite (Abonnée essentiel depuis 8 mois)</p>
                    </center>
                      

                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    
                      <div className='card-box'>
                        <h1  className='Premium'>Box Premium</h1>
                        <div className='box-text'>
                          <p>La box qui couvre tous les instants : workwear, sorties, vacances, week-end.</p>
                          <p>✓ Une box de 3 vêtements ou accessoires /mois</p>
                          <p>✓ Accès à la totalité de la collection.</p>
                      </div>
                      <button className='button-Premium'>S'ABONNER</button>
                      <center>
                        <p ><strong><span role="img" aria-labelledby="flash">⚡</span>&nbsp;OFFRE ÉTÉ <span role="img" aria-labelledby="flash">⚡</span><br/>
                        VOTRE BOX POUR 79€*AU LIEU DE 99€</strong></p>
                      </center>
                      </div>
                      
                      <center>
                      <div><span role="img" aria-labelledby="start">⭐⭐⭐⭐⭐</span></div>
                      <p>"Un choix incomparable de vêtements de marques. Cette alternative éco-responsable me permet de faire des économies. Service client à l'écoute et présent. Livraison rapide et gratuite. L'équipe top, je recommande à 100%."
                              Laetitia (Abonnée premium depuis un an)</p>
                    </center>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                      <div className='card-box'>
                        <h1  className='Illimitée'>Box Illimitée</h1>
                        <div className='box-text'>
                        <p>La box qui couvre tous les instants : workwear, sorties, vacances, week-end et qui se décline à l'infini.</p>
                        <p>✓ Nombre illimité de box par mois.</p>
                        <p>✓ Accès à la totalité de la collection.</p>  
                      </div>
                      <button className='button-Illimitée'>S'ABONNER</button>
                      <center>
                        <p ><strong><span role="img" aria-labelledby="flash">⚡</span>&nbsp;OFFRE ÉTÉ <span role="img" aria-labelledby="flash">⚡</span><br/>
                          VOTRE BOX POUR 129€*AU LIEU DE 199€</strong></p>
                      </center>
                       </div>
                       <center>
                         <div><span role="img" aria-labelledby="start">⭐⭐⭐⭐⭐</span></div>
                         <p>"Génial, c'est tellement agréable de se faire chouchouter en recevant sa box tous les mois. Beaucoup de choix et des vêtements de qualité ! Je n'ai jamais été décue. Service bienvaillant. Je ne pourrais plus m'en passer !"
                          Shannon (Abonnée illimitée depuis 18 mois)</p>
                       </center>
                      
                      
                    
                  </Grid>
                </Grid>
              </Box>
            </div>
          </div>


    {/* hero 2 */}
       <div className="hero2-image">
              <div className="hero-text">
                <h1 className='text'>Oser se réinventer <br/> tous les jours</h1>
                <p >
                  Notre box de vêtements a été pensée pour vous offrir la liberté de vous
                  affirmer chaque jour avec de belles pièces.
                  Parce que chaque moment est précieux, notre dressing vous accompagne
                  au gré de vos besoins et de vos envies.
                  Il évolue en permanence. Comme vous
                </p>
                <button className='button-hero'>DÉCOUVRIR</button>
              </div>
            </div>

  <div className='rejoindre-container'>
            <div className='rejoindre-box'>
            <h2 className='selection'> . <br/>Votre box inclut</h2>
            <p className='paragraph'>Devenez membre et accédez à un dressing
                illimité, qui évolue en permanence.
                Trouver la formule qui vous convient, à vous et
                à votre budget.
                Aucun engagement. Vous pouvez mettre en
                pause ou annuler à tout moment. </p>

              <div className='box-cont'>
                
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm={6} md={4} lg={4}>
                    <Boxcontainer 
                        title="LIVRAISON & RETOUR GRATUITS"
                        description="Via Colissimo, Point Relais, Click & Collect."
                        image={Box1}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={4}>
                    <Boxcontainer 
                        title="PRESSING ÉCOLOGIQUE GRATUIT"
                        description="	
                        PRESSING ÉCOLOGIQUE GRATUIT
                        Nous nettoyons et désinfectons à 63° degrés vos articles après chaque utilisation."
                        image={Box2}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={4}>
                      <Boxcontainer 
                        title="NO STRESS"
                        description="Un accroc, une tâche ? Aucune inquiétude, nos équipes et notre assurance sont là pour ça."
                        image={Box3}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={4}>
                    <Boxcontainer 
                        title="EMBALLAGE ZÉRO PLASTIQUE"
                        description="Votre box vous est envoyée dans nos pochettes réutilisables, personnalisables 100% recyclé."
                        image={Box4}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={4}>
                      <Boxcontainer 
                        title="AVANTAGE VIP"
                        description="Vous bénéficiez d'une réduction de 30% sur les locations 4 jours."
                        image={Box5}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={4}>
                      <Boxcontainer 
                        title="ACCÈS AUX VENTES PRIVÉES"
                        description="Vous accédez en avant-première aux ventes privées."
                        image={Box6}
                        />
                    </Grid>
                  </Grid>
                </Box>
              </div>
              
            </div>

          </div>
         

          

        </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default First