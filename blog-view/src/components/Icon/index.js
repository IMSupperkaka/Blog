import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.less';

class Icon extends React.Component {
    render() {
        const { name, style } = this.props;
        const classname = classnames({
            iconfont: true,
            [name]: true
        });
        return (
            <span style={style} className={classname}></span>
        )
    }
}

Icon.propTypes = {
    name: PropTypes.string
};

export default Icon;