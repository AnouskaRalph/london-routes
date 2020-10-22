import React from 'react'

class App extends React.Component {
  async componentDidMount() {
    try {
      const response = await fetch('/api/routes')
      const data = await response.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <h1>hello</h1>
    )
  }
}

export default App
