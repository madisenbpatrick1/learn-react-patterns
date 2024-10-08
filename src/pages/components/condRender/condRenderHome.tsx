import React, { useState } from 'react';
import UsernameList from './usernamesList';
import UserDetails from './userDetails';
import pageFactoryInitializer from './pageFactoryInitializer';

// Define the type for the pages
type Page = 'list' | 'details';

const CondRenderHome = () => {
  const [page, setPage] = useState<string>('list');  // 'list' or 'details'
  const [selectedUser, setSelectedUser] = useState<string>('');

  const handleUserClick = (username: string): void => {
    setSelectedUser(username);
    setPage('details');
  };

  const handleBackToList = (): void => {
    setPage('list');
  };

  // const renderPage = (): JSX.Element => {
  //   switch (page) {
  //     case 'list':
  //       return <UsernameList onUserClick={handleUserClick} />;
  //     case 'details':
  //       return <UserDetails username={selectedUser} onBack={handleBackToList} />;
  //     default:
  //       return <UsernameList onUserClick={handleUserClick} />;
  //   }
  // };

  const currentPage = pageFactoryInitializer(page, handleUserClick, selectedUser, handleBackToList)
  return <div>{currentPage.render()}</div>;
};

export default CondRenderHome;
