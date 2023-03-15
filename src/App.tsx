import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import GenreSelect from './components/GenreSelect';

enum FilmCategories {
  All = "All",
  DOCUMENTARY = "Documnetary",
  COMEDY = "Comedy",
  HORROR = "Horror",
  CRIME = "Crime"
}

const data = [FilmCategories.All, FilmCategories.DOCUMENTARY, FilmCategories.COMEDY, FilmCategories.HORROR, FilmCategories.CRIME]

function App() {
  return (
    <>
      <Counter />
      <SearchForm />
      <GenreSelect allGenres={data} />
    </>
  );
}

export default App;
