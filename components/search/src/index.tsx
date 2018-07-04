// third party
import React from 'react';
import autobind from 'autobind-decorator';

// first party
import { SeachContainer } from './SearchContainer';
import { SearchInput } from './SearchInput';
import { SearchIcon } from './SearchIcon';
import { ClearIcon } from './ClearIcon';

export interface SearchProps {
  searchText: string;
  setSearchText: (str: string) => void;
}

export interface SearchState {
  isMouseContained: boolean;
  isUserEngaged: boolean;
  isFocus: boolean;
}

export class Search extends React.Component<SearchProps, SearchState> {

  searchInput!: HTMLInputElement;

  @autobind
  setSearchInput(elem?: HTMLInputElement | null) {
    if (elem != undefined) {
      this.searchInput = elem;
    }
  }

  get isSearchActive() {
    return this.state.isMouseContained
      || this.state.isFocus
      || this.props.searchText.length !== 0;
  }

  get shouldBlur() {
    return this.searchInput != undefined
      && !this.state.isUserEngaged
      && this.props.searchText.length === 0;
  }

  constructor(props: SearchProps) {
    super(props);
    this.state = {
      isMouseContained: false,
      isUserEngaged: false,
      isFocus: false,
    };
  }

  @autobind
  private onMouseEnter() {
    this.setState({
      isMouseContained: true,
    });
    this.searchInput.focus();
  }

  @autobind
  private onMouseLeave() {
    this.setState({
      isMouseContained: false,
    });
    if (this.shouldBlur) {
      this.searchInput.blur();
    }
  }

  @autobind
  private onSearchTextChanged(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.setSearchText(e.target.value);
  }

  @autobind
  private onTextFocus() {
    this.setState({
      isFocus: true,
    });
  }
  @autobind
  private onTextBlur() {
    this.setState({
      isFocus: false,
    });
    this.doBlur();
  }

  @autobind
  private onSearchClearClick() {
    this.doClearSearch();
  }

  @autobind
  private onSearchKeyUp(e: React.KeyboardEvent<{}>) {
    if (e.key === 'Escape') {
      this.doClearSearch();
    }
  }

  @autobind
  private onUserEngagement() {
    this.setState({
      isUserEngaged: true,
    });
    this.searchInput.focus();
  }

  @autobind
  private doBlur() {
    if (this.shouldBlur) {
      this.searchInput.blur();
    }
    this.setState({
      isUserEngaged: false,
    });
  }

  @autobind
  private doClearSearch() {
    this.setState({
      isUserEngaged: false,
    });
    this.props.setSearchText('');
    this.searchInput.blur();
  }

  render() {
    const showClear = this.props.searchText.length > 0;
    return (
      <SeachContainer
        active={this.isSearchActive}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <SearchInput
          innerRef={this.setSearchInput}
          value={this.props.searchText}
          onClick={this.onUserEngagement}
          onChange={this.onSearchTextChanged}
          onKeyUp={this.onSearchKeyUp}
          onFocus={this.onTextFocus}
          onBlur={this.onTextBlur}
        />
        {showClear ? <ClearIcon onClick={this.onSearchClearClick} /> : null}
        <SearchIcon onClick={this.onUserEngagement} />
      </SeachContainer>
    );
  }
}
