import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './button.module.css';

const Button = ({to, history, ...rest}) => {
    const onClick = e => {
        if(to) {
            history.push(to);
        }
        if(rest.onClick) {
            rest.onClick(e)
        }
    }
    return (
        <button className={styles.button} {...rest} onClick={onClick} />
    );
};

export default withRouter(Button);