import React from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

class Loading extends React.Component {

    componentDidMount() {
        NProgress.start();
    }

    componentWillUnmount() {
        NProgress.done();
    }

    render() {
        // todo make it Cool
        return <div></div>
    }
}

export default Loading;