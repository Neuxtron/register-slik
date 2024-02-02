import { ChangeEvent, LegacyRef, forwardRef, useState } from "react"
import styles from "./styles.module.scss"

interface Props {
  label: string
  name: string
  placeholder?: string,
  type?: string,
  value?: string,
}

const FormInput = forwardRef(({ label, name, placeholder, type = "text", value }: Props, ref: LegacyRef<HTMLInputElement> | undefined) => {
  const [dValue, setDValue] = useState(value)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setDValue(newValue)
  }
  
  return (
    <div className={styles.tambahInput}>
      <label htmlFor={name}>{label}</label>
      <input
        ref={ref}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={dValue}
        onChange={onChange}
        required
      />
    </div>
  )
})

export default FormInput
