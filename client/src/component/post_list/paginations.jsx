import React from 'react';
import styles from './paginations.module.css';
import Button from '../common/button/button';
import qs from 'qs';
import { Link } from 'react-router-dom';

const buildLink = ({username, tag, page}) => {
    const query = qs.stringify({tag, page});
    return username ? `/@${username}?${query}` : `/?${query}`
}
const Paginations = ({page, lastPage, username, tag}) => {
    return (
        <div className={styles.block}>
            <Link className={`${styles.disabled} ${styles.first}`} to={page === 1 ? undefined : buildLink({username, tag, page: page - 1})}>
                <Button>
                    이전
                </Button>
            </Link>
            <div className={styles.num}>{page}</div>
            <Link className={`${styles.disabled} ${styles.last}`} to={page === lastPage ? undefined : buildLink({username, tag, page: page + 1})}>
                <Button>
                    다음
                </Button>
            </Link>
        </div>
    );
};


export default Paginations;