
import React from 'react'
import { HomeScreen, ManagementLoginScreen } from 'screens'
import { Route, Routes } from 'react-router'
import './App.css'
import { Header } from './layouts'

export const routes = [
  {
    name: 'فروشگاه',
    path: '/',
    element: <HomeScreen/>
  },
  {
    name: 'لب',
    path: '/',
    element: <HomeScreen/>
  },
  {
    name: 'صورت',
    path: '/',
    element: <HomeScreen/>
  },
  {
    name: 'چشم',
    path: '/',
    element: <HomeScreen/>
  },
  {
    name: 'ابرو',
    path: '/',
    element: <HomeScreen/>
  },
  {
    name: 'درباره ما',
    path: '/',
    element: <HomeScreen/>
  },
  {
    name: 'راهنما',
    path: '/',
    element: <HomeScreen/>
  },
  {
    name: '',
    path: '/Admin',
    element: <ManagementLoginScreen/>
  }
]

const App = () => {
  return (
    <div>
      <Header>
      <Routes>
        {routes.map(route => <Route key={route.name} path={route.path} element={route.element} />
        )}
        {/* <Route path="/" element={<HomeScreen/>} /> */}
      </Routes>
      </Header>
    </div>

  )
}

export default App
