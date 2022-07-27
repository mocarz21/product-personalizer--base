import styles from './Product.module.scss';
import Button from '../Product/ProductForm/Button/Button';
import { useState } from 'react';
import Color from './ProductForm/OptionColor/Color'
import Size from './ProductForm/OptionSize/Size'


const Product = props => {
  const [choice, setChoice]= useState([
    {
      currentColor: props.colors[0],
      currentSize: 'S'
    }
  ])

  const toUpper = firstUp =>{

    let abc = firstUp[0].toUpperCase() + firstUp.substr(1).toLowerCase()
    return(
    abc
    )
  }

  const calculatePrice = price =>{
    let result = props.sizes.find(({name}) => name === choice.currentSize)
    if(result){
      price = result.additionalPrice + price
      return(
        price
      )
    }
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
          <span className={styles.price}>{calculatePrice(props.basePrice)}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices} >
              <Size setChoice={setChoice} currentSize={choice.currentSize} currentColor={choice.currentColor} sizes={props.sizes}/>  
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              <Color colors={props.colors} setChoice={setChoice} currentSize={choice.currentSize}   currentColor={choice.currentColor} toUpper={toUpper}/>
            </ul>
          </div>
          <Button className={styles.button} color={choice.currentColor} size={choice.currentSize} pay={calculatePrice(props.basePrice)} name={props.title}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;