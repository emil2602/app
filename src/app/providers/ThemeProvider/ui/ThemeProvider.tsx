import React, { type FC, useMemo, useState } from 'react'
import { THEME_KEY, ThemeContext, Theme } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(THEME_KEY) as Theme || Theme.LIGHT

interface Props {
  children: React.ReactNode
}

const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
      <ThemeContext.Provider value={defaultProps}>
          {children}
      </ThemeContext.Provider>
  )
}

export default ThemeProvider
