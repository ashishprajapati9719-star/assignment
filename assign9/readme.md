# Assignment 9: HTML, CSS and JavaScript Practical

## Aim
To create HTML tables with headers and footers, use accessible table attributes, manipulate webpage content through JavaScript, validate form values, store data in local storage, and build a simple quiz.

## 1. HTML Tasks

1. **Marks Table (`marks.html`):** Created a table with a caption, table header, and three student records.
2. **Marks Average (`marks-average.html`):** Created a table with two student records and a footer showing average marks.
3. **Accessible Table (`marks-accessible.html`):** Used `scope="col"` and `scope="row"` attributes for better table accessibility.

## 2. CSS Tasks

No separate CSS task was provided in this assignment. The HTML tables use basic browser styling.

## 3. JavaScript Tasks

1. **DOM Manipulation (`task1.html`, `task1.js`):** Changed the heading text to "Button clicked" when the button was clicked.
2. **Form Validation (`task2.js`):** Created `validateForm(name)` to check empty names and return validation errors.
3. **Local Storage (`task3.html`, `task3.js`):** Saved and retrieved text using localStorage with the key `note`.
4. **Quiz Application (`task4.html`, `task4.js`):** Created a quiz that checks the selected answer and displays "Correct" or "Try again".

## Files Structure

### HTML
- `marks.html`
- `marks-average.html`
- `marks-accessible.html`

### JavaScript
- `task1.html`
- `task1.js`
- `task2.js`
- `task3.html`
- `task3.js`
- `task4.html`
- `task4.js`

## How to Run

- Open HTML files in a web browser.
- Run the validation task using Node.js:

```bash
node task2.js
```

## Expected Outputs

| Task | Expected Output |
|---|---|
| HTML Task 1 | Marks table with three students |
| HTML Task 2 | Average Maths: 71,