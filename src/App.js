import React from "react";
import {Route, Switch} from "react-router-dom";
import SignInPage from "./pages/sign-in/sign-in-page.component";
import SignUpPage from "./pages/sign-up/sign-up-page.component";
import ChangePasswordPage from "./pages/change-password/change-password-page.component";
import MenuDropdown from "./components/munu-dropdown/menu-dropdown.component";
import MenuIcon from "./components/menu-icon/menu-icon.component";
import {createStructuredSelector} from "reselect";
import {selectServerMessage} from "./redux/selectors";
import {connect} from "react-redux";
import {GlobalStyle} from "./global.styles";
import ServerMessage from "./components/system-message/system-message.component";
import {ContentContainer} from "./App.styles";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenuDropDown: false
    }
  }

  render() {
    const {showMenuDropDown} = this.state
    const {serverMessage} = this.props
    return <>
      <GlobalStyle/>
      <MenuIcon onClick={() => {
        this.setState({showMenuDropDown: !showMenuDropDown})
      }}/>
      {showMenuDropDown && <MenuDropdown/>}
      <ContentContainer>
        <Switch>
          <Route path='/sign-in' component={() => <SignInPage/>}/>
          <Route path='/sign-up' component={() => <SignUpPage/>}/>
          <Route path='/change-password' component={() => <ChangePasswordPage/>}/>
        </Switch>
      </ContentContainer>
      {serverMessage && <ServerMessage message={serverMessage}/>}
    </>
  }
}

const mapStateToProps = createStructuredSelector({
  serverMessage: selectServerMessage
})

export default connect(mapStateToProps)(App);
