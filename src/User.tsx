import React, {FC} from 'react';

import IUserProps from './IUserProps'

const User: FC<IUserProps> = ({ nameVal, age }) => {
  return (
    <>
      <h1>Welcome, {nameVal}</h1>
      <h2>Age, {age}</h2>
    </>
  );
};

export default User;
