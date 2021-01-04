import request from '@/utils/request';

// 获取文章列表
export async function getArticleList(params) {
    return request('/article', {
        type: 'GET',
        params
    });
}

// 获取文章详情
export async function getArticleDetail(id) {
    return request(`/article/${id}`, {
        type: 'GET'
    });
}
