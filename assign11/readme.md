# Assignment 11: Units, CSS Variables, Scope and Closures

## Aim
To understand CSS units and variables, and learn JavaScript block scope, global scope, and closures through practical programs.

## 1. HTML and CSS Tasks

### Task 1: CSS Units (`units.html`)
- Created one div with a width of `200px` and height of `40px`.
- Created another div with a width of `50%` and height of `40px`.
- Applied different background colours.
- Set paragraph font size to `1.5rem`.

### Task 2: CSS Variables (`variables.html`)
- Defined CSS variables inside `:root`.
- Used `--main-color`, `--accent-color`, and `--page-padding`.
- Applied variables using the `var()` function.
- Changed the body text colour, page padding, and heading colour.

### Task 3: External CSS Variables (`tokens.css`)
- Created reusable CSS variables:
  - `--primary-color: #1d3557`
  - `--accent-color: #e63946`
  - `--heading-size: 2rem`
  - `--spacing: 16px`
- Applied variables to the body and heading.
- Linked the external CSS file to `tokens.html`.

## 2. JavaScript Tasks

### Task 1: Block Scope (`task1.js`)
- Used `let` inside and outside a block.
- Demonstrated that block-scoped variables have separate values.
- Output: `inner` and `outer`.

### Task 2: Closures (`task2.js`)
- Created a `makeCounter()` function.
- Returned an inner function that increases the count.
- Called the counter twice.
- Output: `1` and `2`.

### Task 3: Global Scope (`task3.js`)
- Created a global variable named `school`.
- Accessed it inside the `showSchool()` function.
- Output: `Welcome to Sample College`.

## 3. Folder Structure

```text
Assignment-11/
│
├── units.html
├── variables.html
├── tokens.html
├── tokens.css
│
├── task1.js
├── task2.js
└── task3.js
```

## 4. How to Run

### HTML and CSS
1. Open the Assignment-11 folder in VS Code.
2. Open `units.html`, `variables.html`, or `tokens.html` in a browser.
3. Keep `tokens.html` and `tokens.css` in the same folder.

### JavaScript
Run the following commands in the VS Code terminal:

```bash
node task1.js
node task2.js
node task3.js
```

## 5. Expected Output

| File | Expected Output |
|---|---|
| `task1.js` | inner, outer |
| `task2.js` | 1, 2 |
| `task3.js` | Welcome to Sample College |

The HTML pages display CSS units, colours, spacing, and reusable CSS variables.

## 6. Conclusion

In this assignment, I learned how to use CSS units, CSS variables, and external stylesheets. I also understood JavaScript block scope, global scope, and closures through practical examples.