import React, { useEffect } from 'react'
import Routes from '../../route' 
import { CheckAuthWithTheme } from "../../route/CheckAuthWithTheme"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../store"


import { error as ToastError } from "../../store/modules/notify"
import { Toast } from "../../store/modules/notify/types"

//StyledComponents
import { Main } from './styles'

//Theme
import { CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core'
import { IThemeType } from '../../store/modules/theme/types'

const App: React.FC = () => {

  const AppErrors = useSelector((state : RootState)  => (state.ui.errors))
  const AppTheme  = useSelector((state : RootState) => (state.theme.type))
  const dispatch = useDispatch()

  useEffect(() => {
    CheckAuthWithTheme()
  }, [])

  useEffect(() => {

    const messages = AppErrors?.errors?.map((e)=> e.description).join()

    if(messages !== undefined){

      const toast : Toast = { message: messages }

      dispatch(ToastError(toast))
    }

  })


  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: AppTheme === IThemeType.light ? 'light' : 'dark',
        },
      }),
    [AppTheme],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Main>
        <Routes/>
        <ToastContainer autoClose={5000}/>
      </Main>
    </ThemeProvider>
  )
}

export default App
