import request from '@/utils/request';

export async function getPostList() { 
    return request('/post/getPostList');
}