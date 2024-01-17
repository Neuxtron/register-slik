import { Slik } from "../../utils/slik"

interface Props {
  slik: Slik
}

function SlikItem({ slik }: Props) {
  function getNomorRegistrasi(tanggal: Date): string {
    // TODO: ambil nomor slik
    const slikRaw = 0
    const noSlik = ("00" + slikRaw).slice(-2)
    const bulan = ("00" + (tanggal.getMonth() + 1)).slice(-2)
    const tahun = tanggal.getFullYear()

    return `${noSlik}/AAA/123/${bulan}/${tahun}`
  }

  return (
    <tr>
      <td>{slik.tanggal.toLocaleDateString()}</td>
      <td>{slik.nama}</td>
      <td>{getNomorRegistrasi(slik.tanggal)}</td>
      <td>{slik.nik}</td>
    </tr>
  )
}

export default SlikItem
