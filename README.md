 # Interactive Productivity Dashboard
 #This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features
 ## TODO: Future Enhancements
- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [x] Add a weekly task goal calculator.
## Weekly Task Goals.
This feature calculates a user’s weekly task target by multiplying their daily task goal by five workdays. It then adds any additional weekly bonus tasks to the calculated weekly goal. The user enters their name, daily goal, and bonus tasks into the form, and the program calculates and displays their total weekly task goal when they click the button.

## Imperial/Metric Converter
The purpose of this application is to convert measurements between US Imperial and Metric units. The user enters a numeric value and selects the type of conversion they want to make. The application can convert inches, feet, yards, and miles into centimeters, meters, or kilometers, and it can also convert centimeters, meters, and kilometers back into inches, feet, yards, or miles.
### Logic and Pseudocode
BEGIN

```
DISPLAY "Metric Converter"
DISPLAY "Enter the numeric value to convert:"
INPUT value

DISPLAY "Select a conversion:"
DISPLAY "1. Inches to Centimeters"
DISPLAY "2. Feet to Centimeters"
DISPLAY "3. Yards to Meters"
DISPLAY "4. Miles to Kilometers"
DISPLAY "5. Centimeters to Inches"
DISPLAY "6. Centimeters to Feet"
DISPLAY "7. Meters to Yards"
DISPLAY "8. Kilometers to Miles"
INPUT choice

IF choice = 1 THEN
    SET result = value * 2.54
    DISPLAY value, " inches = ", result, " centimeters"

ELSE IF choice = 2 THEN
    SET result = value * 30.48
    DISPLAY value, " feet = ", result, " centimeters"

ELSE IF choice = 3 THEN
    SET result = value * 0.91
    DISPLAY value, " yards = ", result, " meters"

ELSE IF choice = 4 THEN
    SET result = value * 1.61
    DISPLAY value, " miles = ", result, " kilometers"

ELSE IF choice = 5 THEN
    SET result = value * 0.39
    DISPLAY value, " centimeters = ", result, " inches"

ELSE IF choice = 6 THEN
    SET result = value * 0.0328
    DISPLAY value, " centimeters = ", result, " feet"

ELSE IF choice = 7 THEN
    SET result = value * 1.09
    DISPLAY value, " meters = ", result, " yards"

ELSE IF choice = 8 THEN
    SET result = value * 0.62
    DISPLAY value, " kilometers = ", result, " miles"

ELSE
    DISPLAY "Invalid conversion choice."
```

END
