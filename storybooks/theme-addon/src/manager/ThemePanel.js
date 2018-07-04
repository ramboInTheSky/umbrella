import { document } from 'global';
import * as React from 'react';
import PropTypes from 'prop-types';
import addons from '@storybook/addons';

import styled from 'react-emotion';

import { SELECT, SET } from '../shared/events';
import Swatch from './Swatch';

const Wrapper = styled('div')({
  padding: 20,
});

const Title = styled('h5')({
  fontSize: 16,
});

const Pre = styled('pre')({
  padding: '30px',
  display: 'block',
  background: 'rgba(19,19,19,0.9)',
  color: 'rgba(255,255,255,0.95)',
  marginTop: '15px',
  lineHeight: '1.75em',
});

const List = styled('div')({
  display: 'inline-block',
  padding: 15,
});
const Item = styled('div')({
  display: 'inline-block',
  padding: 5,
});

const storybookIframe = 'storybook-preview-iframe';
const style = {
  iframe: {
    transition: 'background 0.25s ease-in-out',
  },
};

const instructionsHtml = `
import { storiesOf } from "@storybook/react";
import theme from "@acadiastory/storybook-addon-theme";
storiesOf("First Component", module)
  .addDecorator(backgrounds([
    {
      name: daltanius
      theme: {
        primary: {
          dark: #EEEEEE,
          main: #EEEEEE ,
          light: #EEEEEE,
          on: '#FFFFFF',
        },
        background: {
          main: '#EEEEEE',
          on: '#000000',
        },
        surface: {
          main: '#FFFFFF',
          on: '#000000',
        },
        error: {
          main: '#B00020',
          on: '#FFFFFF',
        },
      }
    }
  ]))
  .add("First Button", () => <button>Click me</button>);
`.trim();

const Instructions = () => (
  <Wrapper>
    <Title>Setup Instructions</Title>
    <p>
      Please add the theme decorator definition to your story. The theme decorate accepts
      an array of items, which should include a name for your theme
      and the corresponding theme object.
    </p>
    <p>Below is an example of how to add the theme decorator to your story definition.</p>
    <Pre>
      <code>{instructionsHtml}</code>
    </Pre>
  </Wrapper>
);

export default class ThemePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { themes: [] };
  }

  componentDidMount() {
    const { api } = this.props;

    this.props.channel.on(SET, themes => {
      this.setState({ themes });
    });
  }

  setThemeFromSwatch(theme) {
    console.log('emit SELECT')
    console.log(JSON.stringify(theme))
    this.props.channel.emit(SELECT, theme);
  };



  render() {
    const themes = [...this.state.themes];

    if (!themes.length) return <Instructions />;
    return (
      <List>
        {themes.map(({ theme, name }, key) => (
          <Item key={`${name} ${key}`}>
            <Swatch theme={theme} name={name} setTheme={this.setThemeFromSwatch.bind(this)} />
          </Item>
        ))}
      </List>
    );
  }
}
ThemePanel.propTypes = {
  api: PropTypes.shape({
    getQueryParam: PropTypes.func,
    setQueryParams: PropTypes.func,
  }).isRequired,
  channel: PropTypes.shape({
    emit: PropTypes.func,
    on: PropTypes.func,
    removeListener: PropTypes.func,
  }),
};
ThemePanel.defaultProps = {
  channel: undefined,
};
