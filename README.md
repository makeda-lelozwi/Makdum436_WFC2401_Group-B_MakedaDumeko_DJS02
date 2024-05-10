# DJS02 Project Brief: Whole Number Divider

#### Project Overview

The existing codebase for the Whole Number Divider meets certain user stories but falls short on others. Your task is to modify and extend the code to address all specified user stories, ensuring a robust, user-friendly application.

#### Starter Code

The provided HTML and JavaScript setup is a basic form for inputting two numbers (dividend and divider) and a button to perform the calculation. The current script captures form submissions and displays the division result. However, it lacks validation, error handling, and the logic to meet all user stories.

<h2 style="color:#e67e22">Resolved Stories</h2>

1. **Initial State**: On page load, the message “No calculation performed” is displayed, indicating no action has been taken yet.
2. **Whole Number Division**: Upon submitting two numbers that divide evenly (e.g., 20 divided by 10), the application correctly displays the whole number result.
3. **Dividing Numbers Resulting in a Decimal**: Upon submitting two numbers that do not divide evenly (e.g. 10 divided by 7), the application displays the rounded down solution.
4. **Validation for missing values**: If there are no values entered into either the divider or dividend section, the user will be prompted to input values.
5. **Invalid division**: If 0 is entered into the divider section, the user is prompted to input a valid number (which is not equal to 0).
6. **Inputting anything that is not a number**: The system will crash and an error message will be logged to the console if letters or symbols are inputted into the divider and dividend sections.

### Scenario: Starting program state

- GIVEN that the submit button has not been pressed yet
- AND the code has just loaded
- THEN “NO calculation performed” should be displayed at the bottom

### Scenario: Dividing numbers result in a whole number

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 10 is entered into the second input
- THEN 2 should be displayed at the bottom

### Scenario: Dividing numbers result in a decimal number

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 3 is entered into the second input
- THEN the number 6 with no decimal should be shown

### Scenario: Validation when values are missing

- GIVEN that the submit button is pressed
- WHEN either or both inputs are empty
- THEN the divisions should not be done
- AND the following should be displayed: “Division not performed. Both values are required in inputs. Try again”.

### Scenario: An invalid division should log an error in the console

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 0 is entered into the second input
- THEN the division should not be done
- AND the following should be displayed: “Division not performed. Invalid number provided. Try again”.
- AND an error should be logged in the browser console that shows the call stack
- BUT the program should not crash entirely

### Scenario: Providing anything that is not a number should crash the program

- GIVEN that the submit button is pressed
- WHEN ‘YOLO’ is entered into the first input
- AND ‘+++’ is entered into the second input
- THEN the entire screen should be replaced with “Something critical went wrong. Please reload the page
- AND an error should be logged in the browser console that shows the call stack.

#### Solution Approach

1. **Error Handling**: Checked to see if the inputs were valid using if-else. Nested the if-else statements into a try/catch loop to log the errors to the console and the UI.
2. **Testing**: Tested the application thoroughly with various inputs to ensure it meets all the user stories.
