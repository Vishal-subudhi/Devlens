import {useState} from 'react'
import useGithub from './hooks/useGithub'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import UserProfile from './components/UserProfile'
import TechStack from './components/TechStack'
import PopularRepos from './components/PopularRepos'
import ErrorMessage from './components/ErrorMessage'

function App(){
  const [username, setUsername] = useState('')
  const {user, repos, loading, error, fetchUser}= useGithub()

  const handleSearch=() => fetchUser(username)

  return (
    <div className="min-h-screen bg-base text-white">
      <Navbar brand="DevLens" links="#"/>
    <div className="max-w-6xl mx-auto px-6 py-8">
      <SearchBar 
      username={username}
      setUsername={setUsername}
      onSearch={handleSearch}
      />
      {loading && <p className="text-center text-gray-400 mt-8">Loading...</p>}
      {error && <ErrorMessage message={error}/>}
      {user && !loading && (
        <>
        <UserProfile user={user} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <TechStack repos={repos} />
          <PopularRepos repos={repos} />
        </div>
        </>
      )}
      </div>
    </div>
  )
}

export default App