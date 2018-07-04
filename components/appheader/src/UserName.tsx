// third party
import React from 'react';

// first party
import styled from '@daltanius/styled';

export interface UserNameProps {
  name: string;
  realm?: string;
}

const userNameHelper = (({ name, realm }: UserNameProps) => realm != undefined ? `${name}@${realm}` : name);

const _UserName = styled.span`
  margin-left: 0.25rem;
  font-size: 0.75rem;
`;

export const UserName = (props: UserNameProps) => (
  <_UserName>
    {userNameHelper(props)}
  </_UserName>
);
