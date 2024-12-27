import React from 'react';
import { TopicProvider } from './context/TopicContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <TopicProvider>
      <Layout>
        <Home />
      </Layout>
    </TopicProvider>
  );
}

export default App;