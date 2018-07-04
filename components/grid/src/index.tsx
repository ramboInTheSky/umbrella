import React from 'react';

import { GridReadyEvent } from 'ag-grid';
import { AgGridReact, AgGridReactProps } from 'ag-grid-react';

import styled from '@daltanius/styled';

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export class Grid extends React.Component<AgGridReactProps> {

  static defaultProps: AgGridReactProps = {
    suppressColumnVirtualisation: true,
    suppressDragLeaveHidesColumns: true,
    enableColResize: true,
    enableFilter: true,
  };

  onGridReady = (params: GridReadyEvent) => {
    const colIds = params.columnApi.getAllColumns().map(col => col.getColId());
    params.columnApi.autoSizeColumns(colIds);
  }

  render() {
    return (
      <Container className='ag-theme-material ag-theme-balham'>
        <AgGridReact
          onGridReady={this.onGridReady}
          {...this.props}
        />
      </Container>
    );
  }
}
