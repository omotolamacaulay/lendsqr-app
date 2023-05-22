import React from 'react';
import { Tooltip } from 'antd';

const Tool = (text: String) => {
    const truncateString = (str: String, len: Number) => {
        return str?.length > len ? str.substring(0, Math.max(Number(len) - 3, 0)) + '...' : str;
    }
    return (
        <Tooltip title={text}>
            <span>{truncateString(text, 20)}</span>
        </Tooltip>
    )
};

export default Tool;