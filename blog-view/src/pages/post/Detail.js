import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './Detail.less';
import TweenOne from 'rc-tween-one';

class Detail extends React.Component { 
    render() { 

        const title = '需求价值闭环管理机制';
        const date = '24 Mar 2020 | 30 min (8122 words)'
        const content = '<center># markdown-it rulezz!</center>';

        return (
            <TweenOne key="0" animation={{ opacity: 1 }} style={{ opacity: 0, marginBottom: 10 }}>
                <div className={styles.container}>
                    <div>
                        <div className={styles.date}>
                            { date }
                        </div>
                        <div class={styles.title}>{ title }</div>
                    </div>
                    <div className={styles.body}>
                        <ReactMarkdown source={content}></ReactMarkdown>
                    </div>
                </div>
            </TweenOne>
        )
    }
}

export default Detail;