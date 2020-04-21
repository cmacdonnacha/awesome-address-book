/**
 * @component
 *
 * This main app component which handles the core layout.
 *
 */
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Sidebar from './components/Sidebar';
import Routes from './components/Routes';
import Header from './components/Header';
import Backdrop from './components/Backdrop';

const Layout = styled.div`
  height: 100%;

  /* A 2 rows x 2 columns css grid */
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: auto 2fr;
  grid-template-areas:
    'header header'
    'sidebar content';
`;

function App(): JSX.Element {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = (): void => {
    setSidebarOpen(!isSidebarOpen);
  };

  const onSidebarLinkClicked = (): void => {
    if (isSidebarOpen) {
      toggleSidebar();
    }
  };

  const backdrop = isSidebarOpen ? <Backdrop onClick={toggleSidebar} /> : null;

  return (
    <Layout>
      <Header isSidebarOpen={isSidebarOpen} onMenuButtonClicked={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} onLinkClicked={onSidebarLinkClicked} />
      {backdrop}
      <Routes />
    </Layout>
  );
}

export default App;
