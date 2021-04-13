export const Pagination = ({
  paginationHandler,
  currentPage,
  paginationArr,
}) => {
  const changeHandler = (e) => {
    paginationHandler(e.target.name);
  };

  const paginationEl = paginationArr.map((_el, idx) => {
    let active = "";
    if (idx + +1 === +currentPage) {
      active = "active";
    }
    return (
      <li key={idx} className={`pagination__item ${active}`}>
        <a name={idx + 1} onClick={changeHandler} href="#!">
          {idx + 1}
        </a>
      </li>
    );
  });

  return (
    <div className="pagination">
      <ul className="pagination__list">{paginationEl}</ul>
    </div>
  );
};
