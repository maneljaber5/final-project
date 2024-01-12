import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice/userSlice'
import  serviceSlice  from './serviceslice'
import  reservationSlice from './reservationslice'


export const store = configureStore({
  reducer: {
    user:userSlice,
    service: serviceSlice,
    reservation:reservationSlice,
  },
})