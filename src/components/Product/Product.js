import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
import shortid from 'shortid';
//import ToUpper from '../ToUpper/ToUpper';

const Product = props => {
  
  const [choice, setChoice]= useState([
    {
      currentColor: null,
      currentSize: null
    }
  ])

  

  const toUpper = firstUp =>{

    let abc = firstUp[0].toUpperCase() + firstUp.substr(1).toLowerCase()

    
    return(
    abc
    )
  }
   const calculationPrice = price =>{
    
    const result = props.sizes.find(({name}) => name === choice.currentSize)

    console.log('props.sizes[0]' ,props.sizes)
    console.log('result' , result)

    // return(
    //     price = result.additionalPrice + price
    // )

   }
   
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-`+ props.name +`--`+ choice.currentColor+`.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{calculationPrice(props.basePrice)}</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>

            <ul className={styles.choices} >
              {props.sizes.map(list =>{ return <li key={shortid()}><button  onClick={e=>setChoice({currentColor: choice.currentColor, currentSize: list.name})}  type="button" className={clsx( list.name === choice.currentSize && styles.active) }>{list.name}</button></li>})}
            </ul>

          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>

              {props.colors.map(color =>{return <li key={shortid()}><button onClick={e=>setChoice( {currentSize: choice.currentSize, currentColor: color})}  
              type="button" className={clsx(styles['color'+toUpper((color))], color === choice.currentColor && styles.active)} /></li>})}

            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;