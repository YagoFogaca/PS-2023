import { useState } from 'react';
import { Header } from './components/header/index.header';
import { UserPage } from './pages/user/index.user';

function App() {
  return (
    <>
      <Header />
      <UserPage />
    </>
  );
}

export default App;
