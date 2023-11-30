import { configureStore } from '@reduxjs/toolkit'

import cardreducer from '../store/features/Cardlslice'

export const store = configureStore({
    reducer: {
      card: cardreducer,
    },
  })

