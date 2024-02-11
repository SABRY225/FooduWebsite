// context.js
import { createContext, useContext } from 'react';

export const Context = createContext('Default Value');

export const useAuth = () => useContext(Context)