import React from 'react';
import styles from './log_item.module.css';

const LogItem = ({ logData }) => {
    const {
        contentImage,
        title,
        content,
        date,
        comment,
        userImage,
        userId,
        subscribe,
    } = logData

    return (
        <li className={styles.item}>
            <img className={styles.contentImg} src={contentImage} alt="content-img"/>
            <h4 className={styles.title}>{title}</h4>
            <span className={styles.content}>{content}</span>
            <div className={styles.info}>
                <span className={styles.date}>{date}</span>
                <span className={styles.comma}>.</span>
                <span className={styles.comment}>{comment}개의 댓글</span>
            </div>
            <div className={styles.user__info}>
                <div className={styles.user}>
                    <img className={styles.userImage} src={userImage} alt="user-img" />
                    <span className={styles.by}>by</span>
                    <span className={styles.userId}>{userId}</span>
                </div>
                <div className={styles.subscribe}>
                    <i className={styles.icon} className="fas fa-heart"></i>
                    <span className={styles.count}>{subscribe}</span>
                </div>
            </div>
        </li>        
            
    );
};

export default LogItem;