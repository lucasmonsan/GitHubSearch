import React, { createContext, useState } from "react";

export const Context = createContext();

export const RepoProvider = ({ children }) => {
  const [repos, setRepos] = useState([{
    id: 1,
    title: "Calculator",
    description: "És una calculita telefona.",
  }]);

  const addRepo = repo => {
    const newRepo = {
      id: repos.length +1,
      title: repo.name,
      description: repo.description,
    };
    setRepos([...repos, newRepo]);
  }

  return (
    <Context.Provider value={{repos, addRepo}}>
      {children}
    </Context.Provider>
  )
}