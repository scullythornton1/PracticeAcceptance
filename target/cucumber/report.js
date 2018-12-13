$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/01-Individual/01-IR-SA.feature");
formatter.feature({
  "name": "IR-SA",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@all"
    }
  ]
});
formatter.scenario({
  "name": "User is able to de-enrol from IR-SA",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "I have an activated enrolment for IR-SA and request a removal",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.scala:61"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the continue button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.scala:35"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the remove access button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.scala:35"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am is presented with the IR-SA access removed screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.scala:54"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/99-teardown.feature");
formatter.feature({
  "name": "Teardown after tests have run",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@teardown"
    }
  ]
});
formatter.scenario({
  "name": "Quitting the browser",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@teardown"
    }
  ]
});
formatter.step({
  "name": "I shut the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.scala:77"
});
formatter.result({
  "status": "passed"
});
});