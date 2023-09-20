import { classNames } from 'helpers/classNames/classNames'

import cls from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps): JSX.Element => {
  return (
      <div className={classNames(cls.navbar, {}, [className])}>
          <AppLink to='/' theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>Main</AppLink>
          <AppLink to='/about' theme={AppLinkTheme.SECONDARY}>About</AppLink>
      </div>
  )
}

export default Navbar
