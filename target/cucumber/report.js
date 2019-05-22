$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ValidateLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Myntra login",
  "description": "",
  "id": "myntra-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Home page default login",
  "description": "",
  "id": "myntra-login;home-page-default-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Myntra login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "search for \u003cproduct\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "myntra-login;home-page-default-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "product"
      ],
      "line": 12,
      "id": "myntra-login;home-page-default-login;;1"
    },
    {
      "cells": [
        "gope.ambikaz@gmail.com",
        "24ambapdo212503",
        "Bags for Women"
      ],
      "line": 13,
      "id": "myntra-login;home-page-default-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Home page default login",
  "description": "",
  "id": "myntra-login;home-page-default-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Myntra login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter gope.ambikaz@gmail.com and 24ambapdo212503",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "search for Bags for Women",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_Myntra_login_page()"
});
formatter.result({
  "duration": 16630262767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gope.ambikaz@gmail.com",
      "offset": 11
    },
    {
      "val": "24ambapdo212503",
      "offset": 38
    }
  ],
  "location": "stepDefination.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 16961323046,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_login_button()"
});
formatter.result({
  "duration": 113892786,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.home_page_is_displayed()"
});
formatter.result({
  "duration": 40515571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bags for Women",
      "offset": 11
    }
  ],
  "location": "stepDefination.search_for_bags_for_women(String)"
});
formatter.result({
  "duration": 10186777357,
  "status": "passed"
});
});