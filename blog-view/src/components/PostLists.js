import React, { useState, useEffect } from 'react';
import Tag from '@/components/Tag';
import Icon from '@/components/Icon';
import styles from './PostLists.less';
import router from 'umi/router';
import QueueAnim from 'rc-queue-anim';
import { useRequest } from '@umijs/hooks';

import { getArticleList } from '@/services/article';

export default (props) => {

    const [list, setList] = useState([]);

    const { run, loading } = useRequest(getArticleList, {
        manual: true,
        onSuccess: (res) => {
            if (res) {
                setList(res.data.data);
            }
        }
    });

    const mapTagToColor = (tag) => {
        const tagColorMap = new Map([
            ['前端', '#2db7f5'],
            ['移动端', '#108ee9'],
            ['后端', '#faad14'],
            ['效能提升', '#87d068']
        ]);
        return tagColorMap.get(tag);
    }

    const buildTagDom = (tags = '') => {
        if (!Array.isArray(tags)) {
            tags = tags.split(',');
        }
        return tags.map((tag, index) => {
            return (
                <Tag key={index} color={mapTagToColor(tag)}>{tag}</Tag>
            )
        })
    }

    const goDetail = (id) => {
        router.push({
            pathname: `/article/${props.type}/detail/${id}`
        });
    }

    useEffect(() => {
        run({
            type: props.type
        });
    }, [props.type, run])

    return (
        <QueueAnim leaveReverse={true}>
            {
                list.map(({ id, title, publishTime, tags, descripe, authorName, commentNums, hitNums}) => {
                    return (
                        <div key={id} className={styles.postItem}>
                            <div className={styles.postDate}>
                                { new Date(publishTime).toDateString() }
                            </div>
                            <div className={styles.postTitle}>
                                <p onClick={goDetail.bind(this, id)}>{title}</p>
                                { buildTagDom(tags) }
                            </div>
                            <div className={styles.postSummary}>
                                { descripe }
                            </div>
                            <div className={styles.postFooter}>
                                <div className={styles.author}>
                                    {/* <img src={author?.avatar}/> */}
                                    {authorName}
                                    <Icon style={{ marginLeft: 10, marginRight: 5 }} name="icon-liulan" />
                                    {hitNums}
                                    <Icon style={{ marginLeft: 10, marginRight: 5 }} name="icon-pinglun" />
                                    {commentNums}
                                </div>
                                <span onClick={goDetail.bind(this, id)} className={styles.readMore}>
                                    Read More
                                    <Icon style={{ color: '#E63917', marginLeft: 5 }} name="icon-you-" />
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </QueueAnim>
    )
}
