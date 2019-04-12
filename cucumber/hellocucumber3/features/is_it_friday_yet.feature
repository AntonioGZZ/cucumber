Feature: Sergio is at patricia's home?
  Sergio is going to patricia's home in tuesday, wednesday and thursday

  Scenario Outline: Today is Monday or Friday?
    Given today is "<day>"
    When Is Sergio with patricia?
    Then Sergio "<answer>"

  Examples:
    | day            | answer       |
    | Monday         | Isn't here   |
    | Tuesday        | Is here      |
    | Wednesday      | Is here      |
    | Thursday       | Is here      |
    | Friday         | Isn't here   |
