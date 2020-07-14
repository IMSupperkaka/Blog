import React from 'react';
import { useRequest } from '@umijs/hooks';
import PostLists from '@/components/PostLists';
import { getArticleList } from '@/services/article';

export default function (props) {

  const { data } = useRequest(getArticleList);

  return (
    <div>
      <PostLists list={data?.data?.data || []} />
    </div>
  );
}
