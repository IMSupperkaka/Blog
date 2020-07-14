import { formatMessage } from 'umi-plugin-locale';
import PostLists from '@/components/PostLists';

const postList = [
    {
        id: 2,
        date: '05 Jan 2020',
        author: {
            name: 'IMSupperkaka',
            avatar: ''
        },
        title: '用函数式的方式思考——递归',
        summary: '在我们初学函数的时候，函数通常被描述为能独立完成一个功能的单元，并且通常以命令式的方式出现： function fact(n: number): number { let result = 1; for (let i = 0; i <= n; i += 1) { result *= i; } return result; } 代码是在操作数据，…',
        commentCount: 10,
        viewed: 200,
        tags: ['前端']
    }
]

export default function () {
    return (
        <div>
            <PostLists list={postList} />
        </div>
    );
}
