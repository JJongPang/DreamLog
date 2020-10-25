import React from 'react';
import styles from './news_item.module.css';

const NewsItem = ({ newsData }) => {
    const {
        contentImage,
        news,
        date,
        title,
    } = newsData;
    
    return (
        <li className={styles.item}>
            <img className={styles.contentImg} src={contentImage} alt="content-img"/>
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.info}>
                <span className={styles.news}>{news}</span>
                <span className={styles.date}>{date}</span>
            </div>
        </li>
    );
};

export default NewsItem;