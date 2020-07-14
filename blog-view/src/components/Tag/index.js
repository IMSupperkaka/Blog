import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.less';

class Tag extends React.Component {
    render() {
        const { children, color } = this.props;
        const classname = classnames({
            [styles.tag]: true,
            [styles['tag-has-color']]: !!color
        });
        return (
            <span className={classname} style={{ backgroundColor: color }}>
                {children}
            </span>
        )
    }
}

Tag.propTypes = {
    color: PropTypes.string
};

export default Tag;