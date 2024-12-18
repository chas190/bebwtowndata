import React from 'react';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Form } from './pages/Form';
import { Login } from './pages/Login';
import { Logout } from './pages/Logout';
import { IHOOA } from './pages/IHOOA';
import { IHOOA2 } from './pages/IHOOA2';
import { WebPages } from './pages/WebPages';
import { AirTable } from './pages/AirTable';
import { AirTable2 } from './pages/AirTable2';

const App: React.FC = () => {
  const pathname = window.location.pathname;
  
  const getComponent = () => {
    switch (pathname) {
      case '/':
        return <Home />;
      case '/about':
        return <About />;
      case '/services':
        return <Services />;
      case '/contact':
        return <Contact />;
      case '/form':
        return <Form />;
      case '/login':
        return <Login />;
      case '/logout':
        return <Logout />;
      case '/ihooa':
        return <IHOOA />;
      case '/ihooa2':
        return <IHOOA2 />;
      case '/web-pages':
        return <WebPages />;
      case '/air-table':
        return <AirTable />;
      case '/air-table2':
        return <AirTable2 />;
      default:
        return <Home />;
    }
  };
  
  return (
    <Layout>
      {getComponent()}
    </Layout>
  );
};

export default App;