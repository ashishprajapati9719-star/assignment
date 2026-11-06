# Assignment 15: Responsive Pages and Promises

## Aim
To create responsive web pages using CSS media queries, make images scale according to screen size, use `rem` units for text sizing, and understand JavaScript Promises, async/await, error handling, and loading local data.

## 1. HTML and CSS Tasks

### Task 1: Mobile-First Layout (`mobile-first.html`)
- Created a `cards` container with two cards.
- Each card contains an `<h2>` heading and a paragraph.
- Used Flexbox to stack cards vertically on mobile screens.
- Added a media query at `600px` to display cards side by side.

### Task 2: Responsive Image (`responsive-image.html`)
- Created a heading and added an image from the images folder.
- Used `max-width: 100%` to prevent the image from overflowing its container.
- Used `height: auto` to maintain the image's original aspect ratio.
- The image adjusts automatically to smaller screen sizes.

### Task 3: Responsive Text (`responsive-text.html`)
- Set the body font size to `1rem`.
- Set the heading font size to `1.5rem`.
- Added a media query at `600px` to increase the heading size to `2.5rem`.

## 2. JavaScript Tasks

### Task 1: Promise Resolve (`task1.js`)
- Created a `checkMarks()` function that returns a Promise.
- The Promise resolves when marks are between 0 and 100.
- Called the function with `80`.

**Output:**
```text
80
```

### Task 2: Promise Reject (`task2.js`)
- Created a `checkMarks()` function to validate marks.
- Called the function with `120`.
- Used `.catch()` to display the rejection error message.

**Output:**
```text
Marks out of range
```

### Task 3: Async/Await with Try/Catch (`task3.js`)
- Created a Promise-based `checkMarks()` function.
- Used an `async run()` function with `await`.
- Used `try/catch` to handle rejected Promises.
- Tested marks with `65` and `-5`.

**Output:**
```text
65
Caught: Marks out of range
```

### Task 4: Load Local Users with Promise (`task4.js`)
- Created a `getUsers()` function that returns a Promise.
- Used `setTimeout()` to resolve the Promise after 100 milliseconds.
- Created three local users: Asha, Rohan, and Meera.
- Used `async/await` to retrieve and print their names.

**Output:**
```text
Asha
Rohan
Meera
```

## 3. Folder Structure

```text
Assignment-15/
│
├── mobile-first.html
├── responsive-image.html
├── responsive-text.html
│
├── images/
│   └── photo.jpg
│
├── task1.js
├── task2.js
├── task3.js
├── task4.js
│
└── README.md
```

## 4. How to Run

### HTML Files
Open the HTML files in a web browser to see the responsive layouts.

### JavaScript Files
Open the VS Code terminal and execute each file using Node.js:

```bash
node task1.js
node task2.js
node task3.js
node task4.js
```

## 5. Screenshots
Capture screenshots of:
- Mobile-first cards layout.
- Responsive image in the browser.
- Responsive heading at different screen widths.
- Output of all four JavaScript programs in the terminal.

## Conclusion
In this assignment, I learned how to create responsive web pages using CSS Flexbox and media queries, resize images, and adjust text using `rem` units. I also learned how to create and handle JavaScript Promises, use async/await with try/catch, and load local user data asynchronously.