import React from 'react'
import { Pagination } from 'react-bootstrap'


const PaginationIndex = ({ handlePage, pages }) => {
  return(
    <div className="pagnitation">
      <Pagination>
        {pages.map(page => (
          <Pagination.Item
            key={page}
            onClick={handlePage}
            className="paginationNumber"
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  )
}

export default PaginationIndex
