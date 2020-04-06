import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.less';

class Icon extends React.Component {
    render() {
        const { className, name, style } = this.props;
        console.log(className)
        const classname = classnames({
            iconfont: true,
            [name]: true,
            [className]: true
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
