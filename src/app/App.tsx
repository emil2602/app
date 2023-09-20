import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'

import { useTheme } from './providers/ThemeProvider/lib/useTheme'

import { classNames } from '../helpers/classNames/classNames'

import './styles/index.scss'
import { Sidebar } from 'widgets/Sidebar'

const App = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme()

  return (
      <div className={classNames('app', {}, [theme])}>
          <Navbar/>
          <div className='wrapper'>
              <Sidebar/>
              <AppRouter/>
          </div>
      </div>
  )
}

export default App
