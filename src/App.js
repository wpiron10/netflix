import "./App.css";
import movies from "./movies.json";

import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  return (
    <>
      <div className="navbar">
        <Navbar props />
      </div>
      <div>
        <div className="title-movie">
          {/* <Title title={[movies[0].category]} /> */}
          <div>
            {movies.map((item, index) => {
              return <Content className="movies" item={item} index={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
