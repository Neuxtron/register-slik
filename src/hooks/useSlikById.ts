import { Slik } from "../utils/slik"
import useSlik from "./useSlik"

function useSlikById(id?: string): Slik | null {
  if (id === undefined) return null

  const { listSlik } = useSlik()
  const slik: Slik | undefined = listSlik.find(slikItem => {
    return slikItem.id === parseInt(id)
  })

  return slik!
}

export default useSlikById