import React, { useState } from 'react'

import { classNames } from 'helpers/classNames/classNames'

import cls from './Sidebar.module.scss'
import Button from 'shared/ui/Button/ui/Button'
import { ThemeSwitcherBtn } from 'shared/ui/ThemeSwitcherBtn'

interface SidebarProps {
  className?: string
}

const Sidebar = ({ className }: SidebarProps): JSX.Element => {
  const [isColapsed, setIsCollapsed] = useState(false)

  const onToggle = (): void => {
    setIsCollapsed((prevState) => !prevState)
  }

  return (
      <div
        data-testid='sidebar'
        className={classNames(cls.Sidebar, { [cls.collapsed]: isColapsed }, [className])}
    >
          <Button data-testid='sidebar-toggle' onClick={onToggle}>Toggle</Button>
          <ThemeSwitcherBtn/>
      </div>
  )
}

export default Sidebar
