import React from 'react'

import Button from 'shared/ui/Button/ui/Button'

import { classNames } from 'helpers/classNames/classNames'

import cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

const PageError = ({ className }: PageErrorProps) => {
  const reloadPage = () => { location.reload() }

  return (
      <div className={classNames(cls.PageError, {}, [className])}>
          <p className={cls.title}>Something went wrong.</p>
          <Button onClick={reloadPage} className={cls.errorBtn}>Reload page</Button>
      </div>
  )
}

export default PageError
