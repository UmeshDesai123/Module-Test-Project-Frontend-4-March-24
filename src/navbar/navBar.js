
const NavBar = ({ filter, setFilter, genres }) => {

  const filterGen = (gen) => {
    // console.log(gen)
    setFilter(gen);
  }
  return (
    <div className="navbar">
      <h2>Top 15 Movies of All Time</h2>
      <div className="genre-container">
        <h3>Filter by Genre</h3>
        <div className="geners">
          {
            [
              <div className={filter === 'all' ? 'active' : ''} onClick={() => { filterGen('all') }}>All</div>,
              ...genres.map((gen, index) => {
                return (<div className={filter === gen ? 'active' : ''} onClick={() => { filterGen(gen) }} key={index}>{gen}</div>)
              })
            ]
          }
        </div>
      </div>
    </div>
  )
}

export default NavBar;