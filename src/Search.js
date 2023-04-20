const SearchList = ({search, setSearch}) => {
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">search</label>
            <input
                id="search"
                type="text"
                role="search"
                placeholder="Search elements"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}
export default SearchList;