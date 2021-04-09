import {  Redirect, Route, Switch } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import UsersListPage from './pages/UsersListPage/UsersListPage'
import UserPage from './pages/UserPage/UserPage'
import { Suspense } from 'react'
import { Loader } from './components/common/Loader/Loader'
import './styles/main.scss'

function App() {
  return (
    <div>
      <Switch>
        <Suspense fallback={<Loader/>}>
            <Route exact path={'/'} component={MainPage}/>
        
            <Route path={'/users'} component={UsersListPage}/>

            <Route path={'/user/:id'} component={UserPage }/>

            <Redirect to={'/'} />
        </Suspense>
      </Switch>
    </div>
  )
}

export default App;
