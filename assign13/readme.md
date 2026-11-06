# Assignment 13: Flexbox Layouts, Array Methods and Operations

## Aim
To understand Flexbox layouts and learn JavaScript array methods such as `reduce()`, `some()`, `every()`, and `map()`.

## 1. HTML and CSS Tasks

### Task 1: Navigation Bar (`nav-flex.html`)
- Created a horizontal navigation bar using the `nav` element.
- Added four links: Home, About, Events and Contact.
- Used `display: flex` to arrange links horizontally.
- Applied a dark background and white link text.

### Task 2: Centred Cards (`centred-cards.html`)
- Created three cards: Starter, Standard and Premium.
- Added prices 199, 349 and 499.
- Used `display: flex` to arrange cards in one row.
- Used `justify-content: center` and `align-items: center` to centre the cards.

### Task 3: Wrapping Cards (`wrapping-cards.html`)
- Created a Stationery Shop heading.
- Added four cards: Notebook, Pen, Bag and Book.
- Added prices 60, 15, 350 and 120.
- Used `flex-wrap: wrap` to move cards onto new rows when space is limited.

## 2. JavaScript Tasks

### Task 1: Reduce (`task1.js`)
- Created an array containing prices 120, 45 and 300.
- Used `reduce()` with an initial value of 0.
- Calculated the total price.

**Expected Output:**
```text
Total Price: 465
```

### Task 2: Some and Every (`task2.js`)
- Created an array containing marks 72, 85, 30 and 90.
- Used `some()` to check whether any mark is below 40.
- Used `every()` to check whether all marks are 35 or more.

**Expected Output:**
```text
Any mark below 40: true
All marks 35 or more: false
```

### Task 3: Map (`task3.js`)
- Created an array containing marks 72, 85, 64 and 90.
- Used `map()` to add 5 to every mark.
- Printed the new array and the original array.
- Verified that the original array remains unchanged.

**Expected Output:**
```text
New Marks: [ 77, 90, 69, 95 ]
Original Marks: [ 72, 85, 64, 90 ]
```

## 3. Folder Structure

```text
Assignment-13/
│
├── nav-flex.html
├── centred-cards.html
├── wrapping-cards.html
│
├── task1.js
├── task2.js
└── task3.js
```

## 4. How to Run

### HTML and CSS
1. Open the Assignment-13 folder in VS Code.
2. Open any HTML file in a browser.
3. Resize the browser window in `wrapping-cards.html` to test card wrapping.

### JavaScript
Run these commands in the VS Code terminal:

```bash
node task1.js
node task2.js
node task3.js
```

## 5. Screenshots
- Navigation bar browser output.
- Centred cards browser output.
- Wrapping cards browser output.
- `task1.js` terminal output.
- `task2.js` terminal output.
- `task3.js` terminal output.

## 6. Conclusion
In this assignment, I learned how to create flexible layouts using CSS Flexbox. I also learned how to use JavaScript array methods such as `reduce()`, `some()`, `every()`, and `map()` while understanding how to keep the original array unchanged.