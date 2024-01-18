import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setLoading, updateListSlik } from "../state/slices/slik"
import { StoreState } from "../state/store"
import fetchSlik from "../utils/fetchSlik"

function useSlik() {
  const listSlik = useSelector((state: StoreState) => state.slik.listSlik)
  const loading = useSelector((state: StoreState) => state.slik.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    getSlik()
  }, [])

  async function getSlik() {
    dispatch(setLoading(true))
    const data = await fetchSlik()
    dispatch(updateListSlik(data))
    dispatch(setLoading(false))
  }

  return {
    listSlik,
    loading,
  }
}

export default useSlik
