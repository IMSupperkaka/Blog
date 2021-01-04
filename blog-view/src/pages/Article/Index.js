import React from 'react';
import PostLists from '@/components/PostLists';

export default function (props) {
    return <PostLists type={props.match.params.type}/>
}
