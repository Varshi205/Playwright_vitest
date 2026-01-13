
Feature: OrangeHRM login verification

    Scenario: Verify OrangeHRM login successfully
        Given I open the OrangeHRM login page
        And  I enter username '<username>' and password '<password>'
        When I click the login button
        Then the title should be "OrangeHRM"

        Examples:
            | username | password |
            | Admin    | admin123 |