// third party
import React from 'react';

// first party
import { AppLogo, AppLogoProps } from './AppLogo';
import { Border } from './Border';
import { HamburgerMenu } from './HamburgerMenu';
import { Header } from './Header';
import { Spacer } from './Spacer';
import { UserName, UserNameProps } from './UserName';


interface AppHeaderProps extends AppLogoProps {
  onHamburgerMenuClick?: () => void;
  userName: UserNameProps;
}

export class AppHeader extends React.Component<AppHeaderProps> {

  render() {
    return (
      <Header>
        <HamburgerMenu onClick={this.props.onHamburgerMenuClick} />
        <AppLogo appName={this.props.appName} />

        {this.props.children != undefined ? this.props.children : <Spacer />}
        <Border />
        <UserName {...this.props.userName} />
      </Header>
    );
  }


}
