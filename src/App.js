import "./App.css";
import movies from "./movies.json";
import logoN from "./assets/img/logon.jpg";
import Title from "./components/Title";

function App() {
  return (
    <>
      <div className="navbar">
        <img className="logo-netflix" alt="logo-netflix.jpeg" src={logoN} />
      </div>
      <div>
        <div className="title-movie">
          {/* <Title title={[movies[0].category]} /> */}
          {movies.map((item, index) => {
            return (
              <div key={index}>
                {item.category}
                <Title name={item.category} />
                <div className="movies">
                  {item.images.map((image, num) => {
                    return (
                      <div key={num}>
                        <img alt="movie.jpg" src={image} />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
