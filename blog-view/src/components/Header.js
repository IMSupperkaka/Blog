import React from 'react';
import router from 'umi/router';
import { connect } from 'dva';
import withRouter from "umi/withRouter";
import styles from './Header.less';

function goToModule(path) {
    router.push(path)
}

const navList = [
    {
        path: '/article/front-end',
        name: '前端'
    },
    {
        path: '/article/mobile',
        name: '移动端'
    },
    {
        path: '/article/back-end',
        name: '后端'
    },
    {
        path: '/article/oam',
        name: '运维'
    },
    {
        path: '/article/algorithm',
        name: '算法'
    },
    {
        path: '/article/test',
        name: '测试'
    },
    {
        path: '/article/computer-basics',
        name: '计算机基础'
    }
]

function Header(props) {

    const {
        location,
        user: { currentUser }
    } = props;

    const navDom = navList.map(({ name, path }) => {
        const activeReg = new RegExp(path);
        const className = activeReg.test(location.pathname) ? styles.current : '';
        return (
            <div onClick={goToModule.bind(this, path)} key={name} className={className}>
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
                <div className={styles.avatar}>Shawn</div>
            </div>
        </div>
    );
}

export default connect(({ user }) => ({
    user
}))(withRouter(Header));
