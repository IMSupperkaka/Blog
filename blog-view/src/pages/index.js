import React from 'react';
import styles from './index.css';
import PostLists from '@/components/PostLists';

export default function () {

    return (
        <div className={styles.normal}>
            <PostLists />
        </div>
    );
}
