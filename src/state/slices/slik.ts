import { createSlice } from "@reduxjs/toolkit"
import { Slik } from "../../utils/slik"

interface SlikState {
  listSlik: Slik[]
  loading: boolean
}
const initialState: SlikState = {
  listSlik: [],
  loading: false,
}

export const slikSlice = createSlice({
  name: "slik",
  initialState,
  reducers: {
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload
    },
    updateListSlik: (state, action: { payload: Slik[] }) => {
      state.listSlik = action.payload
    },
  },
})

export const { updateListSlik, setLoading } = slikSlice.actions
export default slikSlice.reducer
