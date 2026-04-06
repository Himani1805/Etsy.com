import React, { createContext, useContext, useState } from 'react';

// This context stores the currently logged-in user's info across the whole app
const UserContext = createContext(null);

export function UserProvider({ children }) {
  // Change this name here to simulate different logged-in users
  const [user, setUser] = useState({ name: 'Himani' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook so any component can easily read the current user
export function useUser() {
  return useContext(UserContext);
}
