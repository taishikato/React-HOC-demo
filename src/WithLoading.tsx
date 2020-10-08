import React, { FC, useState, useEffect } from 'react';

import IUserProps from './IUserProps'

const withLoading = (WrappedComponent: FC<IUserProps>, fetchFunc: () => any) => {
  return () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<IUserProps>({})

    useEffect(() => {
      const asyncFunc = async () => {
        const data = await fetchFunc();
        setUser(data);
        setIsLoading(false);
      }
      asyncFunc();
    }, []);

    if (isLoading) return <div>Loading…</div>;
    return <WrappedComponent name={user.name} age={user.age} />;
  };
};

export default withLoading;
