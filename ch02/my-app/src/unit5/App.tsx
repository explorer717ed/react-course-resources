import React, { useState } from "react"

// "class"
// props
// lifecycle. Only class has lifecycle
// this

type BtnProps = {
  clickHandler: () => void
}
type BtnState = {}

class Btn extends React.Component<BtnProps, BtnState> {
  constructor(props: BtnProps){
    super(props)
  }

  render(): React.ReactNode {
      return (
        <button onClick={this.props.clickHandler}>+1</button>
      )
  }
}

type AppProps = {}
type AppState = {
  counter: number
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps){
    super(props)
    this.state = {
      counter: 0
    }

    // when button onClick, 'this' is window,
    // so we have to bind the click handler to this class.
    this.countClickHandler = this.countClickHandler.bind(this)
  }

  countClickHandler(){
    console.log('click');
    this.setState(({ counter }) => {
      return {
        counter: counter +1
      }
    })
  }

  componentDidMount(): void {
      console.log('mount');
      
  }

  componentDidUpdate(prevProps: Readonly<AppProps>, prevState: Readonly<AppState>, snapshot?: any): void {
      console.log('update', this.state);
      
  }

  componentWillUnmount(): void {
      console.log('unmount');
      
  }

  render(): React.ReactNode {
      return (
        <main>
          <h1>Count: {this.state.counter}</h1>
          { this.state.counter === 5 ? null : <Btn clickHandler={this.countClickHandler}/> }
        </main>
      )
  }
}
export default App