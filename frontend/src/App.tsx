import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { Sidebar } from './components/Layout/Sidebar';

import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { WalletAnalysis } from './pages/WalletAnalysis';
import { TransactionExplorer } from './pages/TransactionExplorer';
import { RiskAnalysis } from './pages/RiskAnalysis';
import { VASPIdentification } from './pages/VASPIdentification';
import { Alerts } from './pages/Alerts';
import { InvestigationReport } from './pages/InvestigationReport';

function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto max-w-7xl">
          {children}
        </main>
      </div>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Authenticated LEA Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <LayoutWrapper>
              <Dashboard />
            </LayoutWrapper>
          }
        />
        <Route
          path="/wallet-analysis"
          element={
            <LayoutWrapper>
              <WalletAnalysis />
            </LayoutWrapper>
          }
        />
        <Route
          path="/transactions"
          element={
            <LayoutWrapper>
              <TransactionExplorer />
            </LayoutWrapper>
          }
        />
        <Route
          path="/risk-analysis"
          element={
            <LayoutWrapper>
              <RiskAnalysis />
            </LayoutWrapper>
          }
        />
        <Route
          path="/vasp-identification"
          element={
            <LayoutWrapper>
              <VASPIdentification />
            </LayoutWrapper>
          }
        />
        <Route
          path="/alerts"
          element={
            <LayoutWrapper>
              <Alerts />
            </LayoutWrapper>
          }
        />
        <Route
          path="/investigation-report"
          element={
            <LayoutWrapper>
              <InvestigationReport />
            </LayoutWrapper>
          }
        />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
