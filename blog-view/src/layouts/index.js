import React from 'react';
import QueueAnim from 'rc-queue-anim';
import WithRouter from 'umi/withRouter';
import Header from '@/components/Header';

class BasicLayout extends React.Component {
  render() {
    const key = this.props.location.pathname;
    return (
      <div>
        <Header />
        <QueueAnim type={['right', 'left']} className="demo-router-wrap">
          {
            React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { key });
            })
          }
        </QueueAnim>
      </div>
    );
  }
}

export default WithRouter(BasicLayout);
