import React from 'react';
import styles from './paginations.module.css';
import Button from '../common/button/button';
import qs from 'qs';
import CheckButton from '../common/button/checkButton';

const buildLink = ({username, tag, page}) => {
    const query = qs.stringify({tag, page});
    return username ? `/@${username}?${query}` : `/?${query}`
}
const Paginations = ({page, lastPage, username, tag}) => {
    return (
        <div className={styles.block}>
            <CheckButton
                disabled={page === 1}
                to = {
                    page === 1 ? undefined : buildLink({username, tag, page: page - 1})
                }
            >
                이전
            </CheckButton>
            <div className={styles.num}>{page}</div>
            <CheckButton
                disabled={page === lastPage}
                to = {
                    page === lastPage ? undefined : buildLink({username, tag, page: page + 1})
                }
            >
                다음
            </CheckButton>
        </div>
    );
};


export default Paginations;