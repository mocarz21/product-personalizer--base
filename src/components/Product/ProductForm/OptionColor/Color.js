import shortid from 'shortid';
import clsx from 'clsx';
import styles from '../../Product.module.scss'

const Color = props =>{

        return(

    
        props.colors.map(color =>{return<li key={shortid()}><button onClick={e=>props.setChoice( {currentSize: props.currentSize, currentColor: color})}
        type="button" className={clsx(styles['color'+props.toUpper((color))], color === props.currentColor && styles.active)} /></li>})
        )

    

}

export default Color;