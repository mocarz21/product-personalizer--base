import styles from './Button.module.scss';
import clsx from 'clsx';
import { useState } from 'react';



const Button = (props) => {
    const [order, setOrder] = useState(null)

    const saveOrder = ()=>{
        
        setOrder([
            {
            color: props.color,
            size: props.size,
            pay: props.pay,
            name: props.name
            } 
        ])
            console.log('qw', order)
        
    }

    return (<button onClick={e=>saveOrder()} className={clsx(styles.button, props.className)}>{props.children}</button>); {/*czemu nie przechdzi mi do funkcji saveOrder */}
};

export default Button;