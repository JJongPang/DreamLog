import React from 'react';
import styles from '/responsive.module.css';

const Responsive = ({children, ...rest}) => {
    return (
        <div className={styles.block} {...rest}> 
            {children}
        </div>
    );
};

export default Responsive;