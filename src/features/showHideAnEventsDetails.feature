Feature: Show or hide an events details

  Scenario: An event element is collapsed by default
    Given the list of events has been loaded
    And app loaded
    When the user did not click the „Show Details“ yet
    Then the event elements are collapsed

  Scenario: User can expand an event to see its details
    Given app loaded
    And the list of events has been loaded
    When the user clicks the button „show Details“
    Then the event element should expand and show more information

  Scenario: User can collapse an event to hide its details
    Given app loaded
    And event element is expanded and shows details
    When the user clicks the „hide details“ button
    Then the event element details should collapse