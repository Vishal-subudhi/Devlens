import useFilterStore from '../store/filterStore'


function PopularRepos({ repos, popularReposHeading, popularReposSortLabel }) {

const {selectedLanguage}= useFilterStore()

const filteredRepos= selectedLanguage === 'All'
? repos
: repos.filter(r => r.language === selectedLanguage)

  return (
    <div className="bg-card rounded-2xl border border-white/5 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-mono text-white font-semibold text-sm
                       uppercase tracking-wider">
          {popularReposHeading}
          {selectedLanguage !=='All' &&(
            <span className="ml-2 text-accent font-mono text-xs">
                .{selectedLanguage}
            </span>
          )}
        </h2>
        <span className="font-mono text-white/30 text-xs">
          {popularReposSortLabel}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {filteredRepos.map((repo, i) => (
          <a key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 p-3 rounded-xl 
                       hover:bg-surface transition-colors border 
                       border-transparent hover:border-white/5">
            <span className="font-mono text-white/20 text-xs w-5 
                             text-right flex-shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-accent text-sm 
                                 group-hover:underline truncate">
                  {repo.name}
                </span>
                {repo.language && (
                  <span className="text-xs bg-surface text-white/40 
                                   px-2 py-0.5 rounded font-mono 
                                   flex-shrink-0 border border-white/5">
                    {repo.language}
                  </span>
                )}
              </div>
              {repo.description && (
                <p className="text-white/30 text-xs mt-0.5 truncate">
                  {repo.description}
                </p>
              )}
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <span className="text-amber text-xs">★</span>
              <span className="font-mono text-white/40 text-xs">
                {repo.stargazers_count}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
export default PopularRepos