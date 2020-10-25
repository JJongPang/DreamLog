import React from 'react';
import styles from './main_search.module.css';

const MainSearch = () => {
    return (
        <section className={styles.search}>
            <div className={styles.searchBox}>
                <i className='fas fa-search'></i>
                <input className={styles.inputBox} type="search" placeholder='검색어를 입력하세요' autofocus />
            </div>
        </section>
    );
};

export default MainSearch;