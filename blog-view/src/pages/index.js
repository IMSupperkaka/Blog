import React, { useState, useEffect } from 'react';
import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import PostLists from '@/components/PostLists';

export default function () {

    const [postList, setPostList] = useState([]);

    useEffect(() => {
        setPostList([
            {
                id: 1,
                date: '05 Jan 2020',
                author: {
                    name: 'IMSupperkaka',
                    avatar: ''
                },
                title: '需求价值闭环管理机制',
                summary: '效的价值闭环管理机制，会导致业务的预期目标、运营计划、实际结果及后续改进策略等信息出现传递断层，影响到团队各小组之间的沟通协作，造成组织效能的低下。在建立此项机制前，经常在不同场合接收到各种声音反馈，比如： 业务负责人：每条业务线或每项业务落地的需求是否达到预期效果？如果业务进展不及预期，是否对资源投放方向进行有效评估？ 产品经理：我做了第一期功能，商家用的如何？后面我要如何优化？ 研发人员：我做了许久的项目上线后，效果如何？ 为此，公司逐步建立了价值闭环管理机制，…',
                commentCount: 10,
                viewed: 200,
                tags: ['效能提升']
            },
            {
                id: 2,
                date: '05 Jan 2020',
                author: {
                    name: 'IMSupperkaka',
                    avatar: ''
                },
                title: '用函数式的方式思考——递归',
                summary: '在我们初学函数的时候，函数通常被描述为能独立完成一个功能的单元，并且通常以命令式的方式出现： function fact(n: number): number { let result = 1; for (let i = 0; i <= n; i += 1) { result *= i; } return result; } 代码是在操作数据，…',
                commentCount: 10,
                viewed: 200,
                tags: ['前端']
            },
            {
                id: 3,
                date: '05 Jan 2020',
                author: {
                    name: 'IMSupperkaka',
                    avatar: ''
                },
                title: 'Mysql锁：灵魂七拷问',
                summary: '一、缘起 假设你想给别人说明，Mysql 里面是有锁的，你会怎么做？ 大多数人，都会开两个窗口，分别起两个事务，然后 update 同一条记录，在发起第二次 update 请求时，block，这样就说明这行记录被锁住了： 二、禁锢 问题来了，貌似只有显式的开启一个事务，才会有锁，如果直接执行一条 update 语句，…',
                commentCount: 10,
                viewed: 200,
                tags: ['后端']
            }
        ])
    }, []);

    return (
        <div className={styles.normal}>
            <PostLists list={postList} />
        </div>
    );
}
