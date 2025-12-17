import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4 antialiased selection:bg-blue-500 selection:text-white">
      <div className="max-w-2xl w-full text-center space-y-12">
        <div className="flex justify-center items-center space-x-12">
           <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
            <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
            <img src={reactLogo} className="w-24 h-24 animate-[spin_10s_linear_infinite]" alt="React logo" />
          </a>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
            Vite + React
          </h1>
          <p className="text-2xl text-slate-400 font-light">
            Supercharged with <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500 group">
          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300 active:scale-95"
            >
              <div className="flex items-center gap-3">
                <span>Count is {count}</span>
                {count > 0 && (
                   <span className="flex h-3 w-3 relative">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                   </span>
                )}
              </div>
            </button>
            <p className="text-slate-500 text-sm font-medium">
              Edit <code className="px-2 py-1 rounded bg-slate-900 text-cyan-400 font-mono border border-slate-700">src/App.jsx</code> and save to see magic happen.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
