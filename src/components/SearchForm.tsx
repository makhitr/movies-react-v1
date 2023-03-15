import React from "react";
import '../styles/searchForm.css'

type SearchFormState = {
  searchValue: string
}

export default class SearchForm extends React.Component {
  state: SearchFormState = {
    searchValue: ""
  }

  search = (event: MouseEvent, value: string) => {
    event.preventDefault()
    console.log('search', value)
  }

  setSearchValue = (event: MouseEvent) => {
    const { value } = event.target as HTMLInputElement
    this.setState({ searchValue: value })
  }

  render() {
    const searchInput = React.createElement("input", { className: "searchInput", type: "string", placeholder: "What do you want to watch?", onChange: this.setSearchValue, value: this.state.searchValue })
    const searchButton = React.createElement("button", { className: "searchBtn", }, 'Search')
    const form = React.createElement("form", {
      className: "form-wrapper",
      onClick: (event: MouseEvent) => this.search(event, this.state.searchValue)
    },
      searchInput,
      searchButton)

    return form
  }
}
