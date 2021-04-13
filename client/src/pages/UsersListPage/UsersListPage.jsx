import { Header } from "../../components/common/Header/Header";
import { NavLink } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import { Table } from "./particials/Table/Table";
import { Pagination } from "./particials/Pagination/Pagination";
import { Footer } from "../../components/common/Footer/Footer";

function UsersListPage() {
  const [users, setUsers] = useState([]);
  const [currentPage, setPage] = useState(1);
  const paginationArr = _.chunk(users, 50);
  const currentPortion = paginationArr[currentPage - 1];

  const fetchUsersList = async () => {
    const response = await fetch("/users");
    const u = await response.json();
    setUsers(u.data);
  };

  useEffect(() => {
    fetchUsersList();
  }, []);

  const paginationHandler = useCallback((page) => {
    setPage(page);
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="breadcrumbs">
          <NavLink to="/">Main page</NavLink>
          <span>&#10095;</span>
          <span href="!#">User satistics</span>
        </div>
        <div className="body">
          <h2>Users statistics</h2>
          <Table currentPortion={currentPortion} />
          <Pagination
            paginationHandler={paginationHandler}
            currentPage={currentPage}
            paginationArr={paginationArr}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UsersListPage;
