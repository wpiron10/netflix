const Content = ({ item, index }) => {
  return (
    <div key={index}>
      {item.category}
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
};

export default Content;
