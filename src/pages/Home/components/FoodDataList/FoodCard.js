import {useEffect, useState} from 'react';
import Popup from 'reactjs-popup';
import styles from "./_foodDataList.module.scss";
import '../Popups/homefoodpopup.css'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Detail from '../../../Detail/index'


function FoodCard({ data }) {


  const [url, setUrl] = useState(null)

  //get every string after underline _ 
  useEffect(()=>{
      const longUrl = data.recipe.uri
      const url = longUrl.split('_')[1];
      setUrl(url)
  })


  return (
    <li className={styles.foodCard}>
      <div className={styles.cardHeader}>
        <img className={styles.cardImg} src={data.recipe.image}></img>
        <p className={styles.cardLabel}>{data.recipe.label}</p>
        <div className={styles.cardOptions}>
        <Popup
    trigger={<button className="button home-trigger-btn"> Details </button>}
    modal
    nested
  >
{close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> <h2>{data.recipe.label}</h2> </div>
        <div className="content">
          {' '}
         
         <img src={data.recipe.image}/>
         <p><span>Calories:</span> {parseInt(data.recipe.calories)}kcal</p>
         <p><span>Fat:</span> {parseInt(data.recipe.totalNutrients.FAT.quantity)}g</p>
         <p><span>Sugar:</span> {parseInt(data.recipe.totalNutrients.SUGAR.quantity)}g</p>
         <p><span>Protein:</span> {parseInt(data.recipe.totalNutrients.PROCNT.quantity)}g</p>
        </div>
        <div className="actions">


          
          <Link to={`/detail/${url}`}><button>See More</button></Link>
  


          <Popup
            trigger={<button  className="button"> Add to Favorites </button>}
            position="top center"
            nested
          >
            {/* Add favorites function will be added here */}
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </span>
          </Popup>

          <Popup
            trigger={<button className="button"> Add to List </button>}
            position="top center"
            nested
          >
            {/* Add list function will be added here */}
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </span>
          </Popup>



          {/* <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button> */}
        </div>
      </div>
    )}

  </Popup>
        </div>
      </div>

     

    
    </li>
  );
}

export default FoodCard;
