import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Comment from '@/components/Comment';
import { useRequest } from '@umijs/hooks';

import styles from './Detail.less';
import { getArticleDetail } from '@/services/article';
import CodeBlock from "@/components/ReactMarkdown/CodeBlock";

export default (props) => {

    const [detail, setDetail] = useState({
        publishTime: '',
        title: '',
        content: ''
    });

    const { loading } = useRequest(getArticleDetail, {
        defaultParams: [props.match.params.id],
        onSuccess: (res) => {
            if (res) {
                setDetail(res.data);
            }
        }
    });

    return (
        <div>
            <div className={styles.container}>
                <div>
                    <div className={styles.date}>
                        {detail.publishTime}
                    </div>
                    <div className={styles.title}>{detail.title}</div>
                </div>
                <div className={styles.body}>
                    <ReactMarkdown
                        skipHtml={false}
                        escapeHtml={false}
                        source={detail.content}
                        renderers={{
                            code: CodeBlock
                        }}
                    ></ReactMarkdown>
                </div>
            </div>
        </div>
    )
}
