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
