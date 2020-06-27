import React from 'react';
import TWEEN, { Tween } from 'tween';
import ReactMarkdown from 'react-markdown';
import Animate from 'rc-animate';
import styles from './CommontItem.less';
import Icon from '@/components/Icon';
import classnames from 'classnames';

animate();
function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
}

const animationOption = {
  enter: function (node, done) {
    let coords = { height: 0, opacity: 0, marginTop: 0 };
    const height = node?.clientHeight;
    node.style.height = 0;
    const tween = new Tween(coords);
    tween.to({ height: height, opacity: 1, marginTop: 15 }, 300).easing(TWEEN.Easing.Cubic.InOut).onUpdate((a) => {
      node.style.height = coords.height + 'px';
      node.style.opacity = coords.opacity;
      node.style.marginTop = coords.marginTop + 'px';
    }).start();
  },
  leave: function (node, done) {

  }
}

class CommontItem extends React.Component {

  constructor(props) {
    super(props);
    this.replyRef = React.createRef();
    this.state = {
      showReply: false
    };
  }

  handleReply = () => {
    this.setState({
      showReply: true
    }, () => {
      this.replyRef && this.replyRef.current.focus();
    })
  }

  render() {
    const { info: { avatar, date, title, content, like, comments } } = this.props;
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
            <div onClick={this.handleReply} className={styles.reply}>回复</div>
            <Animate
              animation={animationOption}
            >
              {
                this.state.showReply &&
                <div className={styles.replyerWrap}>
                  <textarea placeholder="写下你的评论..." ref={this.replyRef}></textarea>
                </div>
              }
            </Animate>
          </div>
          <div className={styles.childrenComment}>
            {
              comments && comments.map((comment) => {
                return <CommontItem key={comment.id} info={comment} />
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default CommontItem;
