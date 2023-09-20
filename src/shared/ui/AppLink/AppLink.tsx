import React, { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import { classNames } from 'helpers/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string,
  theme?: string
}

const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

  return (
    <Link
      to={to}
      {...otherProps}
      className={classNames(cls.AppLink, {}, [cls[theme], className])}
    >
      {children}
    </Link>
  )
}

export default AppLink