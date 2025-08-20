module.exports = {

  //Add | if it is inside iframe. example "iframe[name="cc_iframe"] | #bankNumber"

  "Biodata Diri Tab": 'button[data-testid="tab-bio"]',
  "Biodata Diri Nama": 'div:has(> span:text-is("Nama"))',
  "Biodata Diri Tanggal Lahir": 'div:has(> span:text-is("Tanggal Lahir"))',
  "Biodata Diri Jenis Kelamin": 'div:has(> span:text-is("Jenis Kelamin"))',
  "Biodata Diri Email": 'div:has(> span:text-is("Email"))',
  "Biodata Diri Nomor HP": 'div:has(> span:text-is("Nomor HP"))',

  "Address Search Alamat": 'input[placeholder="Tulis Nama Alamat / Kota / Kecamatan tujuan pengiriman"]',
  "Address Semua Alamat": 'button:has-text("Semua Alamat")',
  "Address Dari Teman": 'button:has-text("Dari Teman")',
  "Address Alamat Tidak Tersedia Header": 'h3:has-text("Ops!, alamat tidak tersedia")',
  "Address Tambah Alamat Baru": 'button:has-text("+ Tambah Alamat Baru")',

  "Pembayaran Opsi GoPay": 'div.css-fxokbc:has-text("GoPay")',
  "Pembayaran Opsi Dana": 'div.css-fxokbc:has-text("DANA")',
  "Pembayaran Opsi CC/Debit": 'div.css-fxokbc:has-text("Kartu Kredit / Debit")',
  "Pembayaran Opsi CC 0/4 Tersimpan": 'div.css-fxokbc:has-text("0 / 4 tersimpan")',
  "Pembayaran Opsi Kredivo Express": 'div.css-fxokbc:has-text("Kredivo Express")',
  "Pembayaran Debit Instan": 'div.css-fxokbc:has-text("Debit Instan")',

  "Pembayaran GoPay Aktifkan": 'button.css-1nqssab-unf-btn:has-text("Aktifkan")',
  "Pembayaran GoPay Sambungin Akun": 'button:has-text("Sambungin Akun")',
  "Pembayaran Dana Aktifkan": 'div.css-6htx4k button.css-18era4a-unf-btn.eg8apji0 >> text=Aktifkan',
  "Pembayaran Dana Tambah Nomor HP": 'button:has-text("Tambah Nomor HP")',
  "Pembayaran Dana Back Button": 'button[data-testid="dana-linking-no-phone-back"]',
  "Pembayaran CC/Debit Tambah Kartu": 'button[data-testid="add-cc-button"]',
  "Pembayaran CC/Debit Input CC": 'iframe[name="cc_iframe"][title="Register Credit Card"]',
  "Pembayaran Status Kredivo Express": 'label[data-testid="toggle-kredivo"]',
  "Pembayaran Debit Instan Daftar Kartu": 'iframe[data-testid="iframe-debit"] | button:has-text("Daftarkan Kartu")',
};
