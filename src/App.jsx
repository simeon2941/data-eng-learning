// src/App.jsx
import React from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { TopicProvider } from './context/TopicContext';

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