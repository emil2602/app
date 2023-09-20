import React, { FC, useMemo, useState } from 'react'
import { THEME_KEY, ThemeContext } from '../lib/ThemeContext';
import { Theme } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(THEME_KEY) as Theme || Theme.LIGHT;

interface Props {
  children: React.ReactNode
}

const ThemeProvider: FC<Props> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider