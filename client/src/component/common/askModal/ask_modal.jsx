import React from 'react';
import styles from './ask_modal.module.css';
import Button from '../button/button';

const AskModal = ({visible, title, description, confirmText='확인', cancelText="취소", onConfirm, onCancel}) => {
    if(!visible) return null;
    console.log(description)
    return (
        <div className={styles.screen}>
            <div className={styles.block}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <div className={styles.buttons}>
                    <Button className={styles.cancel} onClick={onCancel}>{cancelText}</Button>
                    <Button className={styles.confirm} onClick={onConfirm}>{confirmText}</Button>
                </div>
            </div>
        </div>
    );
};

export default AskModal;