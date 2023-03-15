import React from "react";
import '../styles/counter.css'

type CounterState = {
  count: number
}

export default class Counter extends React.Component {
  state: CounterState = {
    count: 0
  }

  subtract = () => {
    this.setState((prevState: CounterState) => ({ count: prevState.count - 1 }))
  }

  add = () => {
    this.setState((prevState: CounterState) => ({ count: prevState.count + 1 }))
  }

  render() {
    const subtractBtn = React.createElement("button", { className: `counterBtn minusBtn`, onClick: this.subtract }, "-",)
    const addBtn = React.createElement("button", { className: "counterBtn plusBtn", onClick: this.add }, "+")
    const count = React.createElement("div", { className: "counterCount" }, this.state.count)
    const countEl = React.createElement("div", { className: "counterWrapper" }, subtractBtn, count, addBtn)

    return countEl
  }
}
