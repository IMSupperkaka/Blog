import { useState } from 'react';
import CodeMirror from 'react-codemirror';
import ReactMarkdown from 'react-markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/markdown/markdown';
import styles from './index.less';

const options = {
    lineNumbers: true,
    theme: 'monokai',
    mode: {
        name: 'text/x-markdown'
    }
}

const initialValue = `
# MarkDown语法

为了更有效率地更新和发布博客，博客使用MarkDown语法渲染。所以这次就讲一讲MarkDown的一些基本语法啦。

# 一、标题

## 1.使用 = 和 - 标记一级和二级标题

\`\`\`markdown
一级标题
==

二级标题
--
\`\`\`

## 2.使用 # 号标记

\`\`\`markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
\`\`\`

# 二、段落

## 1.在行末添加两个以上的空格

## 2.在段落后添加一个换行符

# 三、字体

`

export default function () {

    const [code, setCode] = useState(initialValue);

    return (
        <div>
            <div className={styles.codeMirrorHeader}>
                markdown-preview
            </div>
            <div className={styles.codeMirrorWrap}>
                <CodeMirror className={styles.fullHeight} value={code} onChange={setCode} options={options} />
                <div className={styles.markdownWrap}>
                    <ReactMarkdown source={code}></ReactMarkdown>
                </div>
            </div>
        </div>
    );
}
