// third party
import React from 'react';
import { DateTime } from 'luxon';

// first party
import styled from '@daltanius/styled';

export interface LastLoginDateProps {
  date?: Date;
}

const dateFormatter = (date: Date) => DateTime.fromJSDate(date).toFormat("'Last Login:' dd LLL yyyy '|' hh:mm a");

const _LastLoginDate = styled.span`
  margin-left: 2.5rem;
  font-size: 0.75rem;
`;

export const LastLoginDate = ({ date }: LastLoginDateProps) => {
  if (date == undefined) {
    return null;
  } else {
    return (
      <_LastLoginDate>
        {dateFormatter(date)}
      </_LastLoginDate>
    );
  }
};
