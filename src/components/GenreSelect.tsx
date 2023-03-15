import React from "react";
import '../styles/genreSelect.css';

type GenreSelectState = {
  selectedGenre: string
}

type GenreSelectProps = {
  allGenres: string[]
}

export default class GenreSelect extends React.Component<GenreSelectProps, GenreSelectState> {

  constructor(props: GenreSelectProps) {
    super(props)
    this.state = {
      selectedGenre: this.props.allGenres[0]
    }
  }


  onSelect = (genre: string) => {
    this.setState({ selectedGenre: genre })
  }

  render() {
    const list = this.props.allGenres.map((genre: string, id: number) =>
      React.createElement("button",
        {
          className: this.state.selectedGenre === genre ? "genreBtn selected" : "genreBtn",
          key: `${genre}=${id}`,
          onClick: () => this.onSelect(genre)
        },
        genre))
    const genreList = React.createElement("div", { className: "genreListWrapper" }, list)

    return (
      genreList
    )
  }
}
