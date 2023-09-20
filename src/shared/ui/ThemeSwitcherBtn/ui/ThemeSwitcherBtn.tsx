import React from 'react'

import { Theme, useTheme } from 'app/providers/ThemeProvider'

import { classNames } from 'helpers/classNames/classNames'

import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'

import cls from './ThemeSwitcherBtn.module.scss'
import Button, { ButtonTheme } from 'shared/ui/Button/ui/Button'

const ThemeSwitcherBtn = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme()

  return (
      <Button
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher)}
      theme={ButtonTheme.CLEAR}
    >
          {theme === Theme.DARK ? <DarkIcon/> : <LightIcon />}
      </Button>
  )
}

export default ThemeSwitcherBtn
