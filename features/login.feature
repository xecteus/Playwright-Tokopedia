Feature: Login functionality

  @no-login
  Scenario: User logs in successfully
    Given I navigate to the login page
    When I login with "" and ""
    Then I should see the 2FA input