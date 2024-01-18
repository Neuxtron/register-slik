function getNomorRegistrasi(tanggal: Date, slikRaw: number): string {
  const noSlik = ("000" + slikRaw).slice(-3)
  const bulan = ("00" + (tanggal.getMonth() + 1)).slice(-2)
  const tahun = tanggal.getFullYear()

  return `${noSlik}/PBY/031/${bulan}/${tahun}`
}

export default getNomorRegistrasi