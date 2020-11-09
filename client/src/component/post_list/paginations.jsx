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
    console.log(lastPage);
    return (
        <div className={styles.block}>
            <Button
                disabled={page === 1}
                to = {
                    page === 1 ? undefined : buildLink({username, tag, page: page - 1})
                }
            >
                이전
            </Button>
            <div className={styles.num}>{page}</div>
            <Button
                disabled={page === lastPage}
                to = {
                    page === lastPage ? undefined : buildLink({username, tag, page: page + 1})
                }
            >
                다음
            </Button>
        </div>
    );
};


export default Paginations;