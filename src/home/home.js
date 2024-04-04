

const Home = ({movies}) => {
  
  return(
    <div className="home">
      <table>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Year</th>
        </tr>
        {
          movies.map((movie) => {
            return(
              <tr>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default Home;