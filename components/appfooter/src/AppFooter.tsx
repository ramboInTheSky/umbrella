// third party
import React from 'react';

// first party

// local
import { Footer } from './Footer';
import { LastLoginDate, LastLoginDateProps } from './LastLoginDate';
import { Spacer } from './Spacer';


interface AppFooterProps extends LastLoginDateProps { }

export class AppFooter extends React.Component<AppFooterProps> {

  render() {
    return (
      <Footer>
        <LastLoginDate date={this.props.date} />
        {this.props.children != undefined ? this.props.children : <Spacer />}
      </Footer>
    );
  }

}
