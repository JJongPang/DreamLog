import React from 'react';
import { useState } from 'react';
import LogList from '../log_list/log_list';

const LogMaker = () => {
    const [logDatas, setLogDatas] = useState({
        1: {
            id: '1',
            contentImage: 'https://newsimg.sedaily.com/2018/10/11/1S5VCLTG2J_7.jpg',
            title: 'JS스럽게 좋은 코드 쓰기 꿀팁',
            content: '자동차를 나타내는 객체를 만들었다. driving이라는 함수를 만들어 자동차의 이름은 무엇이고 몇 초만에 최고 속도 몇까지 올라가지는 나타내도록 해보자.car 객체를 매개변수로 받아서 diving1 함수에서 name, zeroBack, maximumSpeed를 활용하고',
            date: '2020년 8월 28일',
            comment: '30',
            userImage: 'https://newsimg.sedaily.com/2018/10/11/1S5VCLTG2J_7.jpg',
            userId: 'whdvkf92',
            subscribe: '154'
        },
        2: {
            id: '3',
            contentImage: 'https://newsimg.sedaily.com/2018/10/11/1S5VCLTG2J_7.jpg',
            title: 'JS스럽게 좋은 코드 쓰기 꿀팁',
            content: '자동차를 나타내는 객체를 만들었다. driving이라는 함수를 만들어 자동차의 이름은 무엇이고 몇 초만에 최고 속도 몇까지 올라가지는 나타내도록 해보자.car 객체를 매개변수로 받아서 diving1 함수에서 name, zeroBack, maximumSpeed를 활용하고',
            date: '2020년 8월 28일',
            comment: '30개의 댓글',
            userImage: 'https://newsimg.sedaily.com/2018/10/11/1S5VCLTG2J_7.jpg',
            userId: 'whdvkf92',
            subscribe: '154'
        },
        3: {
            id: '4',
            contentImage: 'https://newsimg.sedaily.com/2018/10/11/1S5VCLTG2J_7.jpg',
            title: 'JS스럽게 좋은 코드 쓰기 꿀팁',
            content: '자동차를 나타내는 객체를 만들었다. driving이라는 함수를 만들어 자동차의 이름은 무엇이고 몇 초만에 최고 속도 몇까지 올라가지는 나타내도록 해보자.car 객체를 매개변수로 받아서 diving1 함수에서 name, zeroBack, maximumSpeed를 활용하고',
            date: '2020년 8월 28일',
            comment: '30개의 댓글',
            userImage: 'https://newsimg.sedaily.com/2018/10/11/1S5VCLTG2J_7.jpg',
            userId: 'whdvkf92',
            subscribe: '154'
        },
        4: {
            id: '4',
            contentImage: 'https://newsimg.sedaily.com/2018/10/11/1S5VCLTG2J_7.jpg',
            title: 'JS스럽게 좋은 코드 쓰기 꿀팁',
            content: '자동차를 나타내는 객체를 만들었다. driving이라는 함수를 만들어 자동차의 이름은 무엇이고 몇 초만에 최고 속도 몇까지 올라가지는 나타내도록 해보자.car 객체를 매개변수로 받아서 diving1 함수에서 name, zeroBack, maximumSpeed를 활용하고',
            date: '2020년 8월 28일',
            comment: '30개의 댓글',
            userImage: 'https://newsimg.sedaily.com/2018/10/11/1S5VCLTG2J_7.jpg',
            userId: 'whdvkf92',
            subscribe: '154'
        },
        5: {
            id: '5',
            contentImage: 'https://newsimg.sedaily.com/2018/10/11/1S5VCLTG2J_7.jpg',
            title: 'JS스럽게 좋은 코드 쓰기 꿀팁',
            content: '자동차를 나타내는 객체를 만들었다. driving이라는 함수를 만들어 자동차의 이름은 무엇이고 몇 초만에 최고 속도 몇까지 올라가지는 나타내도록 해보자.car 객체를 매개변수로 받아서 diving1 함수에서 name, zeroBack, maximumSpeed를 활용하고',
            date: '2020년 8월 28일',
            comment: '30개의 댓글',
            userImage: 'https://newsimg.sedaily.com/2018/10/11/1S5VCLTG2J_7.jpg',
            userId: 'whdvkf92',
            subscribe: '154'
        },
        6: {
            id: '6',
            contentImage: 'https://newsimg.sedaily.com/2018/10/11/1S5VCLTG2J_7.jpg',
            title: 'JS스럽게 좋은 코드 쓰기 꿀팁',
            content: '자동차를 나타내는 객체를 만들었다. driving이라는 함수를 만들어 자동차의 이름은 무엇이고 몇 초만에 최고 속도 몇까지 올라가지는 나타내도록 해보자.car 객체를 매개변수로 받아서 diving1 함수에서 name, zeroBack, maximumSpeed를 활용하고',
            date: '2020년 8월 28일',
            comment: '30개의 댓글',
            userImage: 'https://newsimg.sedaily.com/2018/10/11/1S5VCLTG2J_7.jpg',
            userId: 'whdvkf92',
            subscribe: '154'
        },
        7: {
            id: '7',
            contentImage: 'https://newsimg.sedaily.com/2018/10/11/1S5VCLTG2J_7.jpg',
            title: 'JS스럽게 좋은 코드 쓰기 꿀팁',
            content: '자동차를 나타내는 객체를 만들었다. driving이라는 함수를 만들어 자동차의 이름은 무엇이고 몇 초만에 최고 속도 몇까지 올라가지는 나타내도록 해보자.car 객체를 매개변수로 받아서 diving1 함수에서 name, zeroBack, maximumSpeed를 활용하고',
            date: '2020년 8월 28일',
            comment: '30개의 댓글',
            userImage: 'https://newsimg.sedaily.com/2018/10/11/1S5VCLTG2J_7.jpg',
            userId: 'whdvkf92',
            subscribe: '154'
        },
    });
    return (
       <LogList logDatas={logDatas} />
    );
};

export default LogMaker;