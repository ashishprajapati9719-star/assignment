# Assignment 12: Box Model, Cards, Scrolling, Callbacks and Higher-Order Functions

## Aim
To understand the CSS box model, create styled cards, implement scrolling, and learn JavaScript callbacks and higher-order functions.

## 1. HTML and CSS Tasks

### Task 1: Box Model (`box-model.html`)
- Created two boxes using `div` elements.
- Set width to `200px`, padding to `20px`, and border to `5px`.
- Applied `box-sizing: content-box` to the first box.
- Applied `box-sizing: border-box` to the second box.
- Compared the total width of both boxes.

### Task 2: Card Design (`card.html`)
- Created a card using a `div` with class `card`.
- Applied a background colour.
- Added a `2px` border.
- Used `border-radius: 12px` for rounded corners.
- Applied `16px` padding.
- Added an `h3` heading and a paragraph.

### Task 3: Scrollable Box (`scroll.html`)
- Created a box with a fixed height of `120px`.
- Applied `overflow: auto`.
- Added five paragraphs containing Line 1 to Line 5.
- Enabled scrolling when the content exceeds the box height.

## 2. JavaScript Tasks

### Task 1: applyTwice (`task1.js`)
- Created a higher-order function named `applyTwice`.
- Passed a function and a value as arguments.
- Created `addTen()` to add 10 to a number.
- Called `applyTwice(addTen, 5)`.

**Expected Output:**
```text
25
```

### Task 2: formatMarks (`task2.js`)
- Created a function named `formatMarks(marks, callback)`.
- Passed an arrow function as a callback.
- Formatted the marks into a string.

**Expected Output:**
```text
Marks: 76/100
```

### Task 3: repeatAction (`task3.js`)
- Created a function named `repeatAction(times, action)`.
- Used a loop to call the callback for each round.
- Passed the round number to the callback function.

**Expected Output:**
```text
Round 1
Round 2
Round 3
```

## 3. Folder Structure

```text
Assignment-12/
│
├── box-model.html
├── card.html
├── scroll.html
│
├── task1.js
├── task2.js
└── task3.js
```

## 4. How to Run

### HTML and CSS
1. Open the Assignment-12 folder in VS Code.
2. Open `box-model.html`, `card.html`, or `scroll.html` in a browser.
3. View the output of each page.

### JavaScript
Run the following commands in the VS Code terminal:

```bash
node task1.js
node task2.js
node task3.js
```

## 5. Screenshots
- `box-model.html` browser output.
- `card.html` browser output.
- `scroll.html` browser output.
- `task1.js` terminal output.
- `task2.js` terminal output.
- `task3.js` terminal output.

## 6. Conclusion
In this assignment, I learned about the CSS box model, box sizing, card styling, and scrollable containers. I also understood JavaScript callbacks, arrow functions, and higher-order functions through practical programs.