Feature: Myntra login

Scenario Outline: Home page default login
Given User is on Myntra login page
When user enter <username> and <password>
And click on login button 
Then Home page is displayed
And search for <product>


Examples:
|username|password|product|
|gope.ambikaz@gmail.com|24ambapdo212503|Bags for Women|