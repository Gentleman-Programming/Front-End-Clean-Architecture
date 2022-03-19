import store from '@/redux/store';
import { ThemeProvider } from '@emotion/react';
import { SnackbarProvider } from 'notistack';
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { AppContainer } from './styled-components';
import theme from './theme';
import { SnackbarUtilsConfigurator } from './utilities';

// Routes
const Dashboard = lazy(() => import('@/pages/Dashboard/Dashboard'));
const DashboardFix = lazy(() => import('@/pages/Dashboard/DashboardFix'));
const DashboardSuperFix = lazy(() => import('@/pages/Dashboard/DashboardSuperFix'));

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <AppContainer className="App">
          <SnackbarProvider>
            <SnackbarUtilsConfigurator />
            <Suspense fallback={<div>Loading ...</div>}>
              <Provider store={store}>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Navigate to={`dashboard`} />} />
                    <Route
                      path={`dashboard/*`}
                      element={
                        <div>
                          {/* <Dashboard /> */}
                          {/* <DashboardFix /> */}
                          <DashboardSuperFix />
                        </div>
                      }
                    />
                  </Routes>
                </BrowserRouter>
              </Provider>
            </Suspense>
          </SnackbarProvider>
        </AppContainer>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
