import React, { createContext, useState } from "react";

export const Context = createContext();

export const RepoProvider = ({ children }) => {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState([]);

  return (
    <Context.Provider value={{repos, setRepos, profile, setProfile}}>
      {children}
    </Context.Provider>
  )
}