import React from "react";
import '../styles/genreSelect.css';



export default class GenreSelect extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedGenre: this.props.allGenres[0]
    }
  }


  onSelect = (genre) => {
    this.setState({ selectedGenre: genre })
  }

  render() {
    const list = this.props.allGenres.map((genre, id) =>
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
