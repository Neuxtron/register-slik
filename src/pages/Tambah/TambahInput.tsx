import { LegacyRef, forwardRef } from "react"
import styles from "./styles.module.scss"

interface Props {
  label: string
  name: string
  placeholder: string,
  type?: string,
}

const TambahInput = forwardRef(({ label, name, placeholder, type = "text" }: Props, ref: LegacyRef<HTMLInputElement> | undefined) => {
  return (
    <div className={styles.tambahInput}>
      <label htmlFor={name}>{label}</label>
      <input
        ref={ref}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required
      />
    </div>
  )
})

export default TambahInput
