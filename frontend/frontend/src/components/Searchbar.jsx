import "./searchbar.css";

function Searchbar() {
  return (
    <div className="search-bar">
      <form
        className="search-form d-flex align-items-center"
        method="post"
        action="#"
      >
        <input
          type="text"
          name="query"
          placeholder="Search..."
          title="Enter Search key"
        />
        <button type="submit" title="search">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
