import React from 'react';
import NewsItem from '../news_item/news_item';
import styles from './news_list.module.css';

const NewsList = ({ newsDatas }) => {
    return (
        <ul className={styles.list}>
            {
                Object.keys(newsDatas).map((key) => (
                <NewsItem key={key} newsData={newsDatas[key]} />
            ))
            }
        </ul>        
    );
};

export default NewsList;