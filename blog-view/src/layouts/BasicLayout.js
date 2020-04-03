import React from 'react';
import styles from './index.css';
import { connect } from 'dva';
import Header from '@/components/Header';
import Layout from './index';

class BasicLayout extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'user/getCurrentUser'
    })
  }

  render() { 
    return (
      <Layout>
        <div className={styles.normal}>
          <Header />
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
