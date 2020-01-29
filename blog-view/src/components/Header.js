import React from 'react';
import router from 'umi/router';
import { connect } from 'dva';
import withRouter from "umi/withRouter";
import styles from './Header.less';

function Header(props) {

    const {
        location,
        user: { currentUser }
    } = props;

    function gologin() {
        router.push('user/login');
    }

    const navList = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/front-end',
            name: '前端'
        },
        {
            path: '/mobile',
            name: '移动端'
        },
        {
            path: '/back-end',
            name: '后端'
        },
        {
            path: '/oam',
            name: '运维'
        },
        {
            path: '/algorithm',
            name: '算法'
        },
        {
            path: '/test',
            name: '测试'
        }
    ]

    const navDom = navList.map(({ name, path }) => { 
        const className = location.pathname === path ? styles.current : '';
        return (
            <div key={name} className={className}>
                <a>{ name }</a>
            </div>
        )
    })

    return (
        <div className={styles.headerWrap}>
            <div className={styles.content}>
                <div className={styles.navWrap}>
                    { navDom }
                </div>
                {
                    currentUser ?
                    <div>{currentUser.name}</div> :
                    <a onClick={gologin}>登录</a>
                }
            </div>
        </div>
    );
}

export default connect(({ user }) => ({
    user
}))(withRouter(Header));
