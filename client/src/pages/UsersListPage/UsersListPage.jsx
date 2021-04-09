import {Header} from '../../components/common/Header/Header'
import {NavLink} from 'react-router-dom'
import { useState } from 'react'
import { Table } from './particials/Table/Table'
import { Pagination } from './particials/Pagination/Pagination'
function UsersListPage() {
  // const [currentPage, setPage] = useState(1)
  // const paginationArr = _.chunk(records, 6)
  //  const paginationHandler = useCallback((page) => { dispatch(setCurrentPage(page)) }, [dispatch])
  return (
    <div>
        <Header/>
      <div className="container">
        <div className='breadcrumbs'>
          <NavLink to='/'>Main page</NavLink>
          <span>&#10095;</span>
          <a href='!#'>User satistics</a>
        </div>
        <div className='body'>
          <h2>Users statistics</h2>
         <Table/>
         {/* <Pagination/> */}
        </div>
      </div>
    </div>
  );
}

export default UsersListPage;