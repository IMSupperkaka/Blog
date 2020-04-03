import { Component } from 'react';
import withRouter from 'umi/withRouter';
import NProgress from 'nprogress';

class Layout extends Component {
    render() {
        return this.props.children;
    }
}

export default withRouter(Layout);
