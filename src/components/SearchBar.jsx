function SearchBar({ username, setUsername, onSearch }) {
  return (
    <div className="max-w-2xl mx-auto mt-16 mb-12 px-6">
      <div className="text-center mb-8">
        <h1 className="font-mono text-4xl font-bold text-white mb-2">
          <span className="text-accent">{'>'}</span> Analyse any developer
        </h1>
        <p className="text-white/40 font-mono text-sm">
          Enter a GitHub username to inspect their coding DNA
        </p>
      </div>
      <div className="flex gap-2">
        <div className="flex-1 flex items-center gap-2 bg-surface 
                        border border-white/10 rounded-xl px-4 py-3
                        focus-within:border-accent/50 transition-colors">
          <span className="font-mono text-accent text-sm">@</span>
          <input
            type="text"
            placeholder="torvalds"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            className="flex-1 bg-transparent text-white font-mono text-sm
                       focus:outline-none placeholder-white/20"
          />
          {username && (
            <button onClick={() => setUsername('')}
              className="text-white/30 hover:text-white/60 
                         transition-colors text-xs font-mono">
              clear
            </button>
          )}
        </div>
        <button
          onClick={onSearch}
          className="bg-accent hover:bg-accent/80 text-white font-mono 
                     text-sm px-6 py-3 rounded-xl transition-colors 
                     font-semibold whitespace-nowrap">
          Analyse →
        </button>
      </div>
    </div>
  )
}
export default SearchBar