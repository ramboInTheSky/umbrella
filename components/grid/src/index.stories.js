import React from 'react';
import { storiesOf } from '@storybook/react';
import { background } from '../../../storybooks/theme-addon';

import '@daltanius/vendor-style'

import { Grid } from './index.tsx';

const columnDefs =  [
  { headerName: 'Make', field: 'make' },
  { headerName: 'Model', field: 'model' },
  { headerName: 'Price', field: 'price' },
  { headerName: 'Year', field: 'year' },
  { headerName: 'Color', field: 'color' },
  { headerName: 'Country', field: 'country' },
];

const rowData =  [
  { make: 'Toyota', model: 'Celica', price: 35000, year: 1994, color: "blue", country: "USA" },
  { make: 'Ford', model: 'Mondeo', price: 32000, year: 1998, color: "silver", country: "Japan" },
  { make: 'Porsche', model: 'Boxter', price: 72000, year: 1991, color: "red", country: "Korea" },
];

storiesOf('Grid', module)
  .addDecorator(background('surface'))
  .add('test', () => (
    <Grid columnDefs={columnDefs} rowData={rowData} />
  ));

