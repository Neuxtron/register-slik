function PilihanBulan() {
  const listBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ]

  return (
    <>
      <option value="">--- Pilih bulan ---</option>
      {listBulan.map((bulan, index) => {
        const key = crypto.randomUUID()
        return (
          <option key={key} value={index}>
            {bulan}
          </option>
        )
      })}
    </>
  )
}

export default PilihanBulan
