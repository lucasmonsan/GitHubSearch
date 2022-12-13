import React, { createContext, useState } from "react";

export const Context = createContext();

export const RepoProvider = ({ children }) => {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState([]);
  const [showResult, setShowResult] = useState(false);

  return (
    <Context.Provider value={{repos, setRepos, profile, setProfile, showResult, setShowResult}}>
      {children}
    </Context.Provider>
  )
}