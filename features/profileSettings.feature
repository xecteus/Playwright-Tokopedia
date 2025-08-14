Feature: Profile Settings

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