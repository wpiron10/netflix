import movies from "../movies.json";

const Title = (props) => {
  return <h2>{props.movies.category}</h2>;
};

export default Title;
