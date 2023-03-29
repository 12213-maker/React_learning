import React, { PureComponent } from 'react'

const Usercontext = React.createContext();

export default class ContextClass extends PureComponent {
  theme =
    [
      {
        background: 'blue',
        fontcolor: 'red'
      },
      {
        background: 'black',
        fontcolor: 'white'
      }
    ]

  constructor() {
    super()
    this.state = {
      themeIndex: 0
    }
  }
  render() {
    return (
      <div>
        <Usercontext.Provider value={[this.theme[this.state.themeIndex], this.changeTheme]}>
          <Center></Center>
        </Usercontext.Provider>
      </div>
    )
  }
  changeTheme = () => {
    this.setState((state, props) => {
      let newIndex = state.themeIndex === 0 ? 1 : 0
      return {
        themeIndex: newIndex
      }
    })
  }
}

class Center extends PureComponent {
  render() {
    return (
      <div>
        <Bottom></Bottom>
      </div>
    )
  }
}

class Bottom extends PureComponent {
  constructor() {
    super()
  }

  render() {
    let [ theme, changeTheme ] = this.context
    console.log(this.context)
    let style = {
      'background': theme.background,
      'color': theme.fontcolor
    }
    return (
      <div style={style}>
        BottomComponent
        <button onClick={changeTheme}>改变class主题颜色</button>
      </div>
    )
  }
}
Bottom.contextType = Usercontext;
