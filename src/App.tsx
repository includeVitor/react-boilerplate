import React, { useEffect } from 'react'
import './App.css'
import Routes from './route' 
import { CheckAuthentication } from "./route/CheckAuthentication"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "./store"


import { error as ToastError } from "./store/modules/notify"
import { Toast } from "./store/modules/notify/types"

const App: React.FC = () => {

  const AppErrors = useSelector( (state : RootState)  => (state.ui.errors));
  const dispatch = useDispatch()

  useEffect(() => {
    CheckAuthentication()
  }, [])

  useEffect(() => {

    const messages = AppErrors?.errors?.map((e)=> ` - ${e.description}` ).join()

    if(messages !== undefined){

      const toast : Toast = { message: messages }

      dispatch(ToastError(toast))
    }

  })
 
  return (
    <div className="App">
      <Routes/>
      <ToastContainer autoClose={5000} />
    </div>
  )
}

export default App
