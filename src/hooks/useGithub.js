import {useState} from "react";

function useGithub(){
    const [user, setUser]=useState(null);
    const [repos,setRepos]=useState([]);
    const [loading, setLoading]=useState(false);
    const [error,setError]=useState(null);

    const fetchUser=async (username)=>{
        if(!username.trim()) return;
        setLoading(true);
        setError(null);
        setUser(null);
        setRepos([]);
        try{
            const userResponse=await fetch(`https://api.github.com/users/${username}`)
            if(!userResponse.ok) throw new Error("User not found");
            const userData=await userResponse.json();
            setUser(userData);
            const userReposResponse=await fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=10`)
            const userReposData=await userReposResponse.json();
            setRepos(userReposData);
        }
        catch(err){
            setError(err.message || "Something went Wrong!")        }
        finally{
            setLoading(false);
        }
    }

    return {user, repos, loading, error,fetchUser}
}

export default useGithub;