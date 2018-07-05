import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from '@daltanius/styled';
import { Icons } from '@daltanius/icons-component';
import { Search } from '@daltanius/search-component';
import { background } from '../../../storybooks/theme-addon';

import { AppHeader, Spacer, HeaderElementWrapper } from './index.tsx';

const appName = {
  thick: 'client',
  thin: 'admin',
}

const userName = {
  name: 'org.admin',
  realm: 'XY Investments',
}

const AppHeaderDecorator =  styled.div`
  display: flex;
  align-self: stretch;
`;

class SearchWrapper extends React.Component {

  constructor(props){
    super(props);
    this.state = {searchText: ''};
  }

  render(){
    return <Search searchText={this.state.searchText} setSearchText={ (str) => { this.setState({searchText: str}) } } />
  }
}


storiesOf('AppHeader', module)
  .addDecorator(  (storyFn) =>( <AppHeaderDecorator> {storyFn()} </AppHeaderDecorator> ) )
  .addDecorator(background('background'))
  .add('default', () => (
    <AppHeader appName={appName} userName={userName} onHamburgerMenuClick={action('HamburgerMenu')} />
  ))
  .add('with children', () => (
    <AppHeader appName={appName} userName={userName} onHamburgerMenuClick={action('HamburgerMenu')} >
      <Spacer/>
      <HeaderElementWrapper>
        <SearchWrapper />
      </HeaderElementWrapper>
      <HeaderElementWrapper onClick={action('PlusSquare')}>
        <Icons.PlusSquare.Solid />
      </HeaderElementWrapper>
      <HeaderElementWrapper onClick={action('Exchange')} >
        <Icons.ChartLine.Solid/>
      </HeaderElementWrapper>
      <HeaderElementWrapper onClick={action('UserCircle')} >
        <Icons.UserCircle.Solid/>
      </HeaderElementWrapper>
    </AppHeader>
  ));
