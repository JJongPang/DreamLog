import React from 'react';
import { useState } from 'react';
import NewsList from '../news_list/news_list';
import styles from './news_maker.module.css';

const NewsMaker = () => {
    const [newsDatas, setNewsDatas] = useState({
        1: {
            id: '1',
            contentImage: 'https://imgnews.pstatic.net/image/003/2020/10/19/NISI20201019_0000619927_web_20201019165053_20201019201404795.jpg?type=w647',
            news: '파이낸셜뉴스',
            date: '11시간 전',
            title: '네이버 라인, CBDC 플랫폼 개발 지원한다',
        },
        2: {
            id: '2',
            contentImage: 'https://imgnews.pstatic.net/image/003/2020/10/19/NISI20201019_0000619927_web_20201019165053_20201019201404795.jpg?type=w647',
            category: '보안',
            date: '11시간 전',
            title: '애저 보안 상태를 한눈에 애저 보안 벤치마크 v2의 이해와 사용 방법',
        },
        3: {
            id: '3',
            contentImage: 'https://imgnews.pstatic.net/image/003/2020/10/19/NISI20201019_0000619927_web_20201019165053_20201019201404795.jpg?type=w647',
            category: '보안',
            date: '11시간 전',
            title: '애저 보안 상태를 한눈에 애저 보안 벤치마크 v2의 이해와 사용 방법',
        },
        4: {
            id: '4',
            contentImage: 'https://imgnews.pstatic.net/image/003/2020/10/19/NISI20201019_0000619927_web_20201019165053_20201019201404795.jpg?type=w647',
            category: '보안',
            date: '11시간 전',
            title: '애저 보안 상태를 한눈에 애저 보안 벤치마크 v2의 이해와 사용 방법',
        },
        5: {
            id: '5',
            contentImage: 'https://imgnews.pstatic.net/image/003/2020/10/19/NISI20201019_0000619927_web_20201019165053_20201019201404795.jpg?type=w647',
            category: '보안',
            date: '11시간 전',
            title: '애저 보안 상태를 한눈에 애저 보안 벤치마크 v2의 이해와 사용 방법',
        },
        6: {
            id: '6',
            contentImage: 'https://imgnews.pstatic.net/image/003/2020/10/19/NISI20201019_0000619927_web_20201019165053_20201019201404795.jpg?type=w647',
            category: '보안',
            date: '11시간 전',
            title: '애저 보안 상태를 한눈에 애저 보안 벤치마크 v2의 이해와 사용 방법',
        },
        7: {
            id: '7',
            contentImage: 'https://imgnews.pstatic.net/image/003/2020/10/19/NISI20201019_0000619927_web_20201019165053_20201019201404795.jpg?type=w647',
            category: '보안',
            date: '11시간 전',
            title: '애저 보안 상태를 한눈에 애저 보안 벤치마크 v2의 이해와 사용 방법',
        },
    });
    return (
        <NewsList newsDatas={newsDatas} />            
    );
};

export default NewsMaker;