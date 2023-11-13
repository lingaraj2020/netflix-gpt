import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* {
        Main container
        -Video background
        -video title
        Secondary container
        -movieslist*n
        -movies cards*n

      } */}
    </div>
  );
};
export default Browse;
