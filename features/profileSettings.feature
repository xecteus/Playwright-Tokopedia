Feature: Profile Settings

@useraccount
Scenario: Check biodata diri elements
    Given I navigate to the "Biodata Diri URL" page
    When I click the "Biodata Diri Tab" button
    Then I expect the following elements:
    | Element Name                  | Assertion |
    | Biodata Diri Tab              | Visible   |
    | Biodata Diri Nama             | Visible   |
    | Biodata Diri Tanggal Lahir    | Visible   |
    | Biodata Diri Jenis Kelamin    | Visible   |
    | Biodata Diri Email            | Visible   |
    | Biodata Diri Jenis Kelamin    | Visible   |
    | Biodata Diri Nomor HP         | Visible   |

@newaccount
Scenario: Check Daftar Alamat elements (No Address)
    Given I am on the "Daftar Alamat URL" page
    When I see the "Address Search Alamat" element is visible
    Then I expect the following elements:
    | Element Name                              | Assertion |
    | Address Tambah Alamat Baru                | Visible   |
    | Address Semua Alamat                      | Visible   |
    | Address Dari Teman                        | Visible   |
    | Address Alamat Tidak Tersedia Header      | Visible   |

@newaccount
Scenario: Check Pembayaran elements (No phone number)
    Given I am on the "Pembayaran URL" page
    When I see the "Pembayaran Opsi GoPay" element is visible
    Then I expect the following elements:
    | Element Name                              | Assertion |
    | Pembayaran Opsi Dana                      | Visible   |
    | Pembayaran Opsi CC/Debit                  | Visible   |
    | Pembayaran Opsi CC 0/4 Tersimpan          | Visible   |
    | Pembayaran Opsi Kredivo Express           | Visible   |
    | Pembayaran Debit Instan                   | Visible   |
    When I click the "Pembayaran Opsi GoPay" button
    Then I expect the "Pembayaran GoPay Aktifkan" element is visible
    And I click the "Pembayaran GoPay Aktifkan" button
    Then I expect the "Pembayaran GoPay Sambungin Akun" element is visible
    When I am on the "Pembayaran URL" page
    And I click the "Pembayaran Opsi Dana" button
    And I click the "Pembayaran Dana Aktifkan" button
    Then I should be on the "Aktifkan Dana URL" page
    And I expect the "Pembayaran Dana Tambah Nomor HP" element is visible
    When I click the "Pembayaran Dana Back Button" button
    Then I should be on the "Pembayaran URL" page
    When I click the "Pembayaran Opsi CC/Debit" button
    And I click the "Pembayaran CC/Debit Tambah Kartu" button
    Then I expect the "Pembayaran CC/Debit Input CC" element is visible
    When I click the "Pembayaran Opsi Kredivo Express" button
    Then I expect the "Pembayaran Status Kredivo Express" element is visible
    When I click the "Pembayaran Debit Instan" button
    Then I expect the "Pembayaran Debit Instan Daftar Kartu" element is visible
