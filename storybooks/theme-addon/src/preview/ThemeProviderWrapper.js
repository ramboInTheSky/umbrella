import React from 'react';
import { ThemeProvider } from 'emotion-theming'
import { SELECT, SET} from '../shared/events';

export class ThemeProviderWrapper extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      theme: this.props.theme
    }


  }

  componentDidMount(){
    this.props.channel.on(SELECT, (theme) => {
      this.setState({ theme: theme });
      console.log('on SELECT')
      console.log(JSON.stringify(theme))
    });
  }

  render(){
    return (
      <ThemeProvider theme={this.state.theme}>
        {this.props.children}
      </ThemeProvider>
    )
  }

}

// ThemeProviderWrapper.propTypes = {
//   themes: PropTypes.array,
//   channel: PropTypes.shape({
//     emit: PropTypes.func,
//     on: PropTypes.func,
//     removeListener: PropTypes.func,
//   }),
// };
