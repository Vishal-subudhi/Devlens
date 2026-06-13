import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import useFilterStore from '../store/filterStore'

const COLORS = ['#4F8EF7', '#00D4FF', '#F59E0B', '#10B981', '#8B5CF6', '#EC4899']

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface border border-white/10 rounded-lg 
                      px-3 py-2 font-mono text-xs">
        <p className="text-white">{payload[0].name}</p>
        <p className="text-accent">{payload[0].value} repos</p>
      </div>
    )
  }
  return null
}


function TechStack({ repos }) {
    const {selectedLanguage, setLanguage}= useFilterStore()
  const languageCount = repos.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1
    }
    return acc
  }, {})

  const chartData = Object.entries(languageCount)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)

  if (chartData.length === 0) {
    return (
      <div className="bg-card rounded-2xl border border-white/5 p-6 
                      flex items-center justify-center h-48">
        <p className="font-mono text-white/20 text-sm">
          No language data
        </p>
      </div>
    )
  }

    return (
  <div className="bg-card rounded-2xl border border-white/5 p-6">
    <h2 className="font-mono text-white font-semibold text-sm 
                   uppercase tracking-wider mb-4">
      Language Distribution
    </h2>
    {/* Bigger chart centered */}
    <div className="flex justify-center mb-6">
      <PieChart width={240} height={240}>
        <Pie
          data={chartData}
          cx={120}
          cy={120}
          innerRadius={60}
          outerRadius={110}
          dataKey="value"
          strokeWidth={0}
          onClick={(data) => setLanguage(
            selectedLanguage === data.name ? 'All' : data.name
          )}>
          {chartData.map((_, index) => (
            <Cell key={index}
              fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </div>
    {/* Language list below chart */}
    <div className="flex flex-col gap-2">
      {chartData.map((item, index) => (
        <div key={item.name}
          onClick={() => setLanguage(
            selectedLanguage === item.name ? 'All' : item.name
          )}
          className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer
                     transition-colors hover:bg-surface
                     ${selectedLanguage === item.name 
                       ? 'bg-surface border border-white/10' 
                       : ''}`}>
          <div className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: COLORS[index % COLORS.length] }} />
          <span className="font-mono text-white/60 text-xs flex-1">
            {item.name}
          </span>
          <span className="font-mono text-white/30 text-xs">
            {item.value} repos
          </span>
        </div>
      ))}
    </div>
  </div>
)
}
export default TechStack