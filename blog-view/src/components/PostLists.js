import React from 'react';
import Tag from '@/components/Tag';
import Icon from '@/components/Icon';
import styles from './PostLists.less';
import router from 'umi/router';
import QueueAnim from 'rc-queue-anim';

class PostLists extends React.Component {
    
    mapTagToColor(tag) { 
        const tagColorMap = new Map([
            ['前端', '#2db7f5'],
            ['移动端', '#108ee9'],
            ['后端', '#faad14'],
            ['效能提升', '#87d068']
        ]);
        return tagColorMap.get(tag);
    }

    buildTagDom(tags) { 
        return tags.map((tag, index) => { 
            return (
                <Tag key={index} color={this.mapTagToColor(tag)}>{tag}</Tag>
            )
        })
    }

    goDetail = (id) => { 
        router.push({
            pathname: '/post/detail',
            query: {
                id
            }
        });
    }

    render() {
        const { list } = this.props;

        return (
            <QueueAnim>
                {
                    list.map(({ id, title, date, tags, summary, author, commentCount, viewed}) => { 
                        return (
                            <div key={id} className={styles.postItem}>
                                <div className={styles.postDate}>
                                    { date }
                                </div>
                                <div className={styles.postTitle}>
                                    <p onClick={this.goDetail.bind(this, id)}>{title}</p>
                                    { this.buildTagDom(tags) }
                                </div>
                                <div className={styles.postSummary}>
                                    { summary }
                                </div>
                                <div className={styles.postFooter}>
                                    <div className={styles.author}>
                                        <img src={author.avatar}/>
                                        {author.name}
                                        <Icon style={{ marginLeft: 10, marginRight: 5 }} name="icon-liulan" />
                                        {viewed}
                                        <Icon style={{ marginLeft: 10, marginRight: 5 }} name="icon-pinglun" />
                                        {commentCount}
                                    </div>
                                    <span onClick={this.goDetail.bind(this, id)} className={styles.readMore}>
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
}

export default PostLists;