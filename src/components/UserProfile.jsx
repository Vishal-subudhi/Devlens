function UserProfile({
  user,
  statRepoLabel,
  statFollowersLabel,
  statFollowingLabel,
  memberSinceLabel,
}) {
  const stats = [
    { label: statRepoLabel, value: user.public_repos, color: 'text-accent' },
    { label: statFollowersLabel, value: user.followers, color: 'text-cyan' },
    { label: statFollowingLabel, value: user.following, color: 'text-white/60' },
  ]

  return (
    <div className="glow-border bg-card p-6">
      <div className="flex items-start gap-6">
        <div className="relative flex-shrink-0">
          <img
            src={user.avatar_url}
            alt={user.name}
            className="w-20 h-20 rounded-2xl object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 
                          bg-green-400 rounded-full border-2 
                          border-card animate-pulse"/>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-white font-bold text-xl leading-tight">
                {user.name || user.login}
              </h2>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer"
                className="font-mono text-accent text-sm hover:underline">
                @{user.login}
              </a>
            </div>
            <span className="font-mono text-xs text-white/30 bg-surface
                             px-3 py-1 rounded-lg border border-white/5">
              {memberSinceLabel} {new Date(user.created_at).getFullYear()}
            </span>
          </div>
          {user.bio && (
            <p className="text-white/50 text-sm mt-2 leading-relaxed">
              {user.bio}
            </p>
          )}
          {user.location && (
            <p className="text-white/30 text-xs font-mono mt-1">
              📍 {user.location}
            </p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-6">
        {stats.map(stat => (
          <div key={stat.label}
            className="bg-base rounded-xl p-4 border border-white/5">
            <p className={`font-mono text-2xl font-bold ${stat.color}`}>
              {stat.value.toLocaleString()}
            </p>
            <p className="text-white/30 text-xs font-mono mt-1 uppercase 
                          tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default UserProfile