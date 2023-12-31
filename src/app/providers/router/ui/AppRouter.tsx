import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { Loader } from 'widgets/Loader'

const AppRouter = (): JSX.Element => {
  return (
      <Suspense fallback={<Loader/>}>
          <Routes>
              {Object.values(routeConfig).map(({ element, path }) => (
                  <Route
          key={path}
          path={path}
          element={(
              <div className='content'>
                  {element}
              </div>
          )}
        />
              ))}
          </Routes>
      </Suspense>
  )
}

export default AppRouter
