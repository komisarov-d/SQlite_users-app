export const Table = ({currentPortion}) => {
  if (!currentPortion) {
    return <p>No item</p>
  }
  const tableEl = currentPortion.map(item => {
        return (
          <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.ip_address}</td>
                <td>{item.clicks}</td>
                <td>{item.page_views}</td>
          </tr>
    )
  })
  return(
     <div className="table__wrapper">
          <table className='table'>
             <thead className='table__head'>
                  <tr>
                    <th>Id</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>IP address</th>
                    <th>Total clicks</th>
                    <th>Total page views</th>
                  </tr>
               </thead>
               <tbody className='table__body'>
                {tableEl}
               </tbody>
          </table>
          </div>
  )
} 