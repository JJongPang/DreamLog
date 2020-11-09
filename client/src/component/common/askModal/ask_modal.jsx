import React from 'react';
import styles from './ask_modal.module.css';
import Button from '../button/button';

const AskModals = ({visible, title, description, confirmText='확인', cancelText="취소", onConfirm, onCancel}) => {
    if(!visible) return null;
    return (
        <div className={styles.screen}>
            <div className={styles.block}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <div className={styles.buttons}>
                    <Button className={styles.cancel} onClikc={onCancel}>{cancelText}</Button>
                    <Button className={styles.confirm} onClikc={onConfirm}>{confirmText}</Button>
                </div>
            </div>
        </div>
    );
};

export default AskModals;