import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './CommontItem.less';
import Icon from '@/components/Icon';

import Expand from '../Animate/Expand';

const CommontItem = (props) => {

    const { avatar, content, title, date, like, comments } = props;

    return (
        <div>
            <div className={styles.header}>
                <img src={avatar} />
                <div>
                    <div className={styles.name}>{title}</div>
                    <div className={styles.date}>{date}</div>
                </div>
            </div>
            <div className={styles.content}>
                <ReactMarkdown source={content}></ReactMarkdown>
                <div className={styles.footer}>
                    {
                        like &&
                        <div className={styles.like}>
                            <Icon name="icon-praise_icon" />
                            {like}
                        </div>
                    }
                    <div onClick={() => {
                        props.onReply(title);
                    }} className={styles.reply}>回复</div>
                </div>
                <div className={styles.childrenComment}>
                    {
                        comments && comments.map((comment) => {
                            return <CommontItem key={comment.id} {...comment} onReply={props.onReply}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.replyRef = React.createRef();
        this.state = {
            showReply: false,
            replyValue: ''
        };
    }

    handleReply = (title) => {
        this.setState({
            showReply: true,
            replyValue: title && `@${title} `
        }, () => {
            // this.replyRef && this.replyRef.current.focus();
            this.replyRef.current.selectionStart = title?.length + 2;
        })
    }

    setReplyValue = (e) => {
        this.setState({
            replyValue: e.target.value
        })
    }

    hideReply = () => {
        this.setState({
            showReply: false
        })
    }

    render() {
        const { info } = this.props;
        return (
            <div>
                <CommontItem {...info} onReply={this.handleReply}/>
                <Expand>
                    {
                        this.state.showReply &&
                        <div className={styles.replyerWrap}>
                            <textarea placeholder="写下你的评论..." ref={this.replyRef} value={this.state.replyValue} onInput={this.setReplyValue}></textarea>
                            <div>
                                <div>Ctrl + Enter 发表</div>
                                <div>
                                    <span className={styles.replyerBtn}>发布</span>
                                    <span onClick={this.hideReply} className={styles.cancelBtn}>取消</span>
                                </div>
                            </div>
                        </div>
                    }
                </Expand>
            </div>
        )
    }
}

export default Comment;
