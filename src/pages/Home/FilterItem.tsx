import { LegacyRef, ReactElement, forwardRef } from "react"

interface Props {
  label: string
  name: string
  placeholder?: string
  type?: string
  children?: ReactElement
  max?: number | undefined
  min?: number
}

const FilterItem = forwardRef(
  (
    {
      label,
      name,
      placeholder = "",
      type = "number",
      max = undefined,
      min = 0,
      children,
    }: Props,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    if (children == null) {
      children = (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          max={max}
          min={min}
          ref={ref}
        />
      )
    }
    return (
      <tr>
        <td>
          <label htmlFor={name}>{label}</label>
        </td>
        <td>{children}</td>
      </tr>
    )
  }
)

export default FilterItem
