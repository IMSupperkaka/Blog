import React from 'react';
import PropTypes from 'prop-types';
import CommontItem from './CommontItem';

class Comment extends React.Component {
  render() {
    const { data } = this.props;
    return data.map((item) => {
      return <CommontItem key={item.id} info={item}/>
    })
  }
}

Comment.propTypes = {
  data: PropTypes.array
};

export default Comment;
