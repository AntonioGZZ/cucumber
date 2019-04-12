Feature: Is Sergio comming today?
  I want to know if Sergio is comming today

  Scenario Outline: Sergio has Home office
    Given today is Monday or Friday
    When I check if today is Monday or Friday
    Then I go to his workspace and say <answer>

  Examples:
    | day           | answer    |
    | Monday        | "Nothing" |
    | Tuesday       | Hello     |
    | Wednesday     | Hello     |
    | Thursday      | Hello     |
    | Friday        | "Nothing" |
