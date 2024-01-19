import { ChangeEvent, FormEvent, LegacyRef, createRef, forwardRef, useState } from "react"
import FilterItem from "./FilterItem"
import PilihanBulan from "./PilihanBulan"
import styles from "./styles.module.scss"

interface Props {
  showFilter: boolean
  cari: (tgl?: string, bln?: string, thn?: string) => void
}

const FilterContainer = forwardRef(
  (
    { showFilter, cari }: Props,
    ref: LegacyRef<HTMLFormElement> | undefined
  ) => {
    const tglRef = createRef<HTMLInputElement>()
    const blnRef = createRef<any>()
    const thnRef = createRef<HTMLInputElement>()
    const [blnVal, setBlnVal] = useState("")

    const onFilter = (event: FormEvent) => {
      event.preventDefault()
      cari(tglRef.current?.value, blnRef.current?.value, thnRef.current?.value)
    }

    const onChangeBln = (event: ChangeEvent<HTMLSelectElement>) => {
      setBlnVal(event.target.value)
    }

    if (!showFilter) return null

    return (
      <form className={styles.filterContainer} ref={ref} onSubmit={onFilter}>
        <table>
          <tbody>
            <FilterItem
              ref={tglRef}
              label="Tanggal:"
              name="tanggal"
              placeholder="Masukkan tanggal"
              max={31}
              min={1}
            />

            <FilterItem label="Bulan:" name="bulan">
              <select ref={blnRef} name="bulan" id="bulan" value={blnVal} onChange={onChangeBln}>
                <PilihanBulan />
              </select>
            </FilterItem>

            <FilterItem
              ref={thnRef}
              label="Tahun:"
              name="tahun"
              placeholder="Masukkan tahun"
              min={2000}
            />
          </tbody>
        </table>
        <button className={styles.cari}>
          Cari
        </button>
      </form>
    )
  }
)

export default FilterContainer
