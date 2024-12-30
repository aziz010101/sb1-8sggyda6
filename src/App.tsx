import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { SelfDiscovery } from './pages/SelfDiscovery';
import { VirtuePage } from './pages/VirtuePage';
import { Achievements } from './pages/Achievements';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/self-discovery" element={<SelfDiscovery />} />
          <Route path="/virtue/:virtueId" element={<VirtuePage />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;