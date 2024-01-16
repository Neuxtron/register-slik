import styles from "./styles.module.scss"

interface Props {
  label: string
  name: string
  placeholder: string,
  type?: string,
}

function TambahInput({ label, name, placeholder, type = "text" }: Props) {
  return (
    <div className={styles.tambahInput}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required
      />
    </div>
  )
}

export default TambahInput
