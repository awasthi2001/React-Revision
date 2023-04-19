import {Box} from '@chakra-ui/react'
import {Routes,Route} from 'react-router-dom'
import { Login } from '../pages/Login'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
export function AllRoutes(){
    return(
        <Box>
          <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
        </Box>
    )
}