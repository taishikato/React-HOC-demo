import React from 'react';

import User from './User';
import withLoading from './WithLoading';

function App() {

  const fetchUser = () => {
    return new Promise(resolve => 
    setTimeout(() => {
      return resolve({ name: 'John', age: 21 })
    }, 3000));
  }
  const UserWithLoading = withLoading(User, fetchUser);

  return <UserWithLoading />;
}

export default App;
