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
    editArticle: (state, action: PayloadAction<New>) => {
     
      const articles = state.map(x=>{
        if(x.id === action.payload.id) {
           x.name = action.payload.name;
           x.text = action.payload.text
        }
        return x
      })
    
      state =  [...articles];
    },
    addNew: (state, action: PayloadAction<New> ) => {
      const maxId = _.maxBy(state, 'id')?.id
      const { payload } = action;
      payload.id = maxId ? ( maxId + 1) : 0
      payload.status = NewStatus.unpublished
      state.push(payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addNew, changeStatus, editArticle } = newsSlice.actions

export default newsSlice.reducer
