import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { New, NewStatus } from '../../interfaces/New'
import { news } from '../../mock/news'
import _ from 'lodash'

export interface NewState {
  news: New[]
}

const initialState: New[] = news

export const newsSlice = createSlice({
  name: 'News',
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<Number>) => {
      const articles = state.map(x=> {
        if(x.id === action.payload) {
          x.status = x.status === NewStatus.published ? NewStatus.unpublished : NewStatus.published
        }
        return x;
      })
      state = [...articles];
    },
    addNew: (state, action: PayloadAction<New> ) => {
      state = [ ...news, action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addNew, changeStatus } = newsSlice.actions

export default newsSlice.reducer
