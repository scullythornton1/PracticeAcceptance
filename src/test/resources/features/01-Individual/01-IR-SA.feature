@all
Feature: IR-SA

#  Scenario: User is able to request access to IR-SA
#    Given I log in to request access to IR-SA
#    When the UTR is input as 1231231231
#    And the NINO is input as 123123123
#    And I click the request access button
#    Then the I am presented with the IR-SA access requested screen

  Scenario: User is able to de-enrol from IR-SA
    Given I have an activated enrolment for IR-SA and request a removal
    When I click the continue button
    And I click the remove access button
    Then I am is presented with the IR-SA access removed screen
#      And I am no longer enrolled for IR-SA