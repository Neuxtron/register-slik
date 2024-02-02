import { Link } from "react-router-dom"
import getNomorRegistrasi from "../../utils/getNomorRegistrasi"
import { Slik } from "../../utils/slik"

interface Props {
  slik: Slik
}

function SlikItem({ slik }: Props) {
return (
    <tr>
      <td>{slik.tanggal.toLocaleDateString()}</td>
      <td>{slik.nama}</td>
      <td>{getNomorRegistrasi(slik.tanggal, slik.noSlik)}</td>
      <td>{slik.nik}</td>
      <td>
        <Link to={`/edit/${slik.id}`}>Edit</Link>
      </td>
    </tr>
  )
}

export default SlikItem
