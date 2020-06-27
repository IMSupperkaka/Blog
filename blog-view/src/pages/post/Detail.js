import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './Detail.less';
import TweenOne from 'rc-tween-one';
import Comment from '@/components/Comment';
import CodeBlock from "@/components/ReactMarkdown/CodeBlock";

const initialSource = `
# Live demo
Changes are automatically rendered as you type.
## Table of Contents
* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
## HTML block below
## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');
React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`
Pretty neat, eh?
## Tables?
| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |
## More info?
Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
---------------
A component by [Espen Hovlandsdal](https://espen.codes/)
`

class Detail extends React.Component {
    render() {

        const title = '需求价值闭环管理机制';
        const date = '24 Mar 2020 | 30 min (8122 words)'
        const data = [
          {
            id: 1,
            avatar: 'https://cdn2.jianshu.io/assets/default_avatar/12-aeeea4bedf10f2a12c0d50d626951489.jpg',
            title: '白手起家的白起',
            date: '03.25 22:04',
            content: '我知道爱情需要经营，但绝不是要用投入和回报来衡量的，用所谓的设计和手段来控制的，说甄嬛，你也知道是宫斗剧，所有嫔妃的目的都是控制并得到皇上的宠爱，这根本不能作为所谓爱情的参考模本。我更认同昆凌保持自我，保持对另一半最初的吸引力的做法，而那肯定不会是考量投入回报后做出的行为。',
            like: 1,
            comments: [
              {
                id: 2,
                avatar: 'https://cdn2.jianshu.io/assets/default_avatar/10-e691107df16746d4a9f3fe9496fd1848.jpg',
                title: '百念皆灰色',
                date: '03.25 22:04',
                content: '带你深扒品牌运动鞋的内幕',
                like: 1
              },
              {
                id: 3,
                avatar: 'https://upload.jianshu.io/users/upload_avatars/6896759/b88ed6eb-3bda-4970-91a2-ef2486ab3bb8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp',
                title: '白手起家的白起',
                date: '03.25 22:04',
                content: '中国一直很棒，03年非典，08年汶川地震，20年的新冠肺炎，一次次的难关，都多亏这些逆行者，感谢他(她)们',
                like: 1
              }
            ]
          },
          {
            id: 1,
            avatar: 'https://upload.jianshu.io/users/upload_avatars/22748902/80a04bf5-0287-4d2f-8932-3cfaa8d9afa5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp',
            title: '杨花258',
            date: '03.25 22:04',
            content: '致敬',
            like: 1,
            comments: [
              {
                id: 2,
                avatar: 'https://cdn2.jianshu.io/assets/default_avatar/7-0993d41a595d6ab6ef17b19496eb2f21.jpg',
                title: '甜无忧',
                date: '03.25 22:04',
                content: '向逆行者致敬！',
                like: 1
              },
              {
                id: 3,
                avatar: 'https://upload.jianshu.io/users/upload_avatars/16675914/71574b78-f544-4785-a01c-22d27adf2484.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp',
                title: '山村红烛',
                date: '03.25 22:04',
                content: '逆行者值得赞美，大书',
                like: 1
              }
            ]
          }
        ];
        return (
            <TweenOne key="0" animation={{ opacity: 1 }} style={{ opacity: 0, marginBottom: 10 }}>
                <div className={styles.container}>
                    <div>
                        <div className={styles.date}>
                            { date }
                        </div>
                        <div className={styles.title}>{ title }</div>
                    </div>
                    <div className={styles.body}>
                        <ReactMarkdown
                          skipHtml={false}
                          escapeHtml={false}
                          source={initialSource}
                          renderers={{
                            code: CodeBlock
                          }}
                        ></ReactMarkdown>
                    </div>
                    <Comment data={data}/>
                </div>
            </TweenOne>
        )
    }
}

export default Detail;
