function Navbar() {
  return (
    <nav className="border-b border-white/5 bg-base/80 backdrop-blur-md 
                    sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center 
                      justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-accent font-bold text-lg 
                           tracking-tight">dev</span>
          <span className="font-mono text-white font-bold text-lg 
                           tracking-tight">lens</span>
          <span className="ml-2 text-xs font-mono bg-accent/10 text-accent 
                           px-2 py-0.5 rounded border border-accent/20">
            v1.0
          </span>
        </div>
        <span className="text-xs font-mono text-white/30">
          GitHub Analytics
        </span>
      </div>
    </nav>
  )
}
export default Navbar