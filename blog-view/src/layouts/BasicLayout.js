import React from 'react';
import styles from './index.css';
import { connect } from 'dva';
import Header from '@/components/Header';

class BasicLayout extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'user/getCurrentUser'
    })
  }

  render() { 
    return (
      <div className={styles.normal}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default connect(({ user }) => ({
  user
}))(BasicLayout);
