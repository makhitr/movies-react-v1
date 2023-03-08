import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import GenreSelect from './components/GenreSelect';

const data = ["All", "Documentary", "Comedy", "Horror", "Crime"]

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
