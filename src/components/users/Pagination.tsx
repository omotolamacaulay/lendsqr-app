import React from 'react';
import { Pagination } from 'antd';

interface UserPaginationProps {
    total: number,
  }
  
const UserPagination= ({total,}: UserPaginationProps) => {

    return (
        <Pagination
            total={total}
            pageSize={10}
            showTotal={(total) => `Total ${total} items`}
        />
    )
}



export default UserPagination;