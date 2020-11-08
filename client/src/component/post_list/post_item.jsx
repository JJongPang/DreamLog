import React from 'react';
import { Link } from 'react-router-dom';
import SubInfo from '../common/subinfo/subinfo';
import Tags from '../common/tag/tags';
import styles from './post_item.module.css';

const PostItem = ({post}) => {

    const {publish_date, user, tags, title, body, _id} = post
    console.log(post);
    return (
        <div className={styles.block}>
            <Link to={`/@${user.username}/${_id}`}>
                <h2 className={styles.title}>{title}</h2>
            </Link>
            <SubInfo username={user.username} publishDate={new Date(publish_date)} />
            <Tags tags={tags} />
            <p className={styles.content}>{body}</p>
        </div>
    );
};

export default PostItem;