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
# 一、标题

## 1.使用 = 和 - 标记一级和二级标题

\`\`\`markdown
一级标题
==

二级标题
--
\`\`\`

一级标题
==

二级标题
--

## 2.使用 # 号标记

\`\`\`markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
\`\`\`

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

# 二、段落

## 1.在行末添加两个以上的空格  
## 2.在段落后添加一个换行符

# 三、字体

## Markdown 可以使用以下几种字体

\`\`\`markdown
*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___
\`\`\`

*斜体文本*

_斜体文本_

**粗体文本**

__粗体文本__

***粗斜体文本***

___粗斜体文本___

# Markdown 列表

Markdown 支持有序列表和无序列表。

## 1.无序列表使用星号(*)、加号(+)或是减号(-)作为列表标记

\`\`\`markdown
* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项

- 第一项
- 第二项
- 第三项
\`\`\`

* 第一项  
* 第二项  
* 第三项  

+ 第一项  
+ 第二项  
+ 第三项  

- 第一项  
- 第二项  
- 第三项  

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
