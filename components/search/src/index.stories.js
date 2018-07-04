import React from 'react';
import { storiesOf } from '@storybook/react';
import { background } from '../../../storybooks/theme-addon';

import { withInfo } from '@storybook/addon-info';
import { Search } from './index.tsx';

class SearchWrapper extends React.Component {

  constructor(props){
    super(props);
    this.state = {searchText: ''};
  }

  render(){
    return <Search searchText={this.state.searchText} setSearchText={ (str) => { this.setState({searchText: str}) } } />
  }
}

storiesOf('Search', module)
  .addDecorator(background('primary'))
  .add('interactive', () => (
    <SearchWrapper />
  ))
  .add('with text',
    withInfo({ inline: false })(
      () => <Search searchText={'Filled Search'} setSearchText={ (str) => { } } />
    )
  );
