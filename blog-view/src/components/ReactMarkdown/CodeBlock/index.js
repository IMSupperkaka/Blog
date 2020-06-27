import React from 'react';
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { jsx, javascript, sass, scss } from "react-syntax-highlighter/dist/esm/languages/prism";
class CodeBlock extends React.Component {

  componentWillMount() {
    // 注册要高亮的语法，
    // 注意：如果不设置打包后供第三方使用是不起作用的
    SyntaxHighlighter.registerLanguage("jsx", jsx);
    SyntaxHighlighter.registerLanguage("javascript", javascript);
  }

  render() {
    const { language, value } = this.props;
    return (
      <code className="highlight">
        <SyntaxHighlighter language={language} style={coy}>
          {value}
        </SyntaxHighlighter>
      </code>
    );
  }
}

export default CodeBlock;
