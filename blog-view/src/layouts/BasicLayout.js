import React from 'react';
import styles from './index.css';
import { connect } from 'dva';
import Layout from './index';

class BasicLayout extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'user/getCurrentUser'
    })
  }

  render() {
    const key = this.props.location.pathname;
    return (
      <Layout>
        <div className={styles.normal}>
          <div className={styles.content}>
              {this.props.children}
          </div>
        </div>
      </Layout>
    );
  }
}

export default connect(({ user }) => ({
  user
}))(BasicLayout);
