import Navbar from './components/nav'
import Hero from './components/hero'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* navbar */}
      <Navbar />

      {/* main page sections */}
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App;