import React from 'react';
import ReactMarkdown from 'react-markdown';

class Detail extends React.Component { 
    render() { 
        const content = '# markdown-it rulezz!';

        return (
            <ReactMarkdown source={content}></ReactMarkdown>
        )
    }
}

export default Detail;