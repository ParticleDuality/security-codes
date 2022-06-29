import React from "react"

export class Loading extends React.Component {
  componentWillUnmount() {
    console.log("Chao loading")
  }

  render() {
    return <p>Cargando...</p>
  }
}
