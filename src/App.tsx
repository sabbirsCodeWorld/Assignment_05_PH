import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/nav'
import Hero from './components/hero'
import StackSidebar from './components/stackSidebar'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* navbar */}
      <Navbar />

      {/* main page sections */}
      <main>
        <Hero />
        <StackSidebar />
      </main>

      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} closeOnClick pauseOnHover />
    </div>
  )
}