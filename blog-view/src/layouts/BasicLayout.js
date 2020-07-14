import React from 'react';
import NProgress from 'nprogress';
import WithRouter from 'umi/withRouter';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Header from '@/components/Header';
import styles from './index.css';

class BasicLayout extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            NProgress.start();
        }
    }

    render() {
        const key = this.props.location.pathname;
        return (
            <div>
                <Header />
                <div className={styles.normal}>
                    <div className={styles.content}>
                        <SwitchTransition mode="out-in">
                            <CSSTransition key={key} addEndListener={(node, done) => {
                                node.addEventListener("transitionend", done, false);
                            }} classNames="fade">
                                {this.props.children}
                            </CSSTransition>
                        </SwitchTransition>
                    </div>
                </div>
            </div>
        );
    }
}

export default WithRouter(BasicLayout);
