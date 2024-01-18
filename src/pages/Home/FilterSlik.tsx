import { ChangeEvent, Dispatch, FormEvent, LegacyRef, RefObject, forwardRef } from "react"
import { IoFilter } from "react-icons/io5"
import styles from "./styles.module.scss"

interface Props {
  showFilter: boolean
  cari: (tgl?: string, bln?: string, thn?: string) => void
  filterRef: RefObject<HTMLFormElement>,
  setShowFilter: Dispatch<React.SetStateAction<boolean>>,
  stopSearching: () => void
}

const FilterSlik = forwardRef(
  (
    { showFilter, cari, filterRef, setShowFilter, stopSearching }: Props,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {

    const toggleFilter = () => {
      setShowFilter((prev) => !prev)
    }

    const onCari = (event: FormEvent) => {
      event.preventDefault()
      if (!showFilter) {
        cari()
        return
      }
      filterRef.current?.requestSubmit()
    }

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      if (value === "") stopSearching()
    }

    return (
      <form className={styles.filter} onSubmit={onCari}>
        <input
          type="text"
          placeholder="Cari Nama / NIK / Nomor Registrasi..."
          onChange={onInputChange}
          ref={ref}
        />
        <button
          className={styles.filterBtn}
          onClick={toggleFilter}
          type="button"
        >
          <IoFilter />
        </button>
        {!showFilter ? <button className={styles.cari}>Cari</button> : null}
      </form>
    )
  }
)

export default FilterSlik
