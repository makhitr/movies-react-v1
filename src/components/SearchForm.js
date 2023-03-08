import React from "react";
import '../styles/searchForm.css'

export default class SearchForm extends React.Component {
  state = {
    searchValue: ""
  }

  search = (event, value) => {
    event.preventDefault()
    console.log('search', value)
  }

  setSearchValue = (event) => {
    const { value } = event.target
    this.setState({ searchValue: value })
  }

  render() {
    const searchInput = React.createElement("input", { className: "searchInput", type: "string", placeholder: "What do you want to watch?", onChange: this.setSearchValue, value: this.state.searchValue })
    const searchButton = React.createElement("button", {className: "searchBtn", }, 'Search')
    const form = React.createElement("form", { className: "form-wrapper", onClick: (event) => this.search(event, this.state.searchValue)}, searchInput, searchButton)
   
    return form
  }
}
