// App.jsx
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="content-container">
        <Outlet />
      </main>
    </div>
  )
}
