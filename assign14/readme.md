# Assignment 14: CSS Grid Layouts, Timers and Intervals

## Aim
To understand CSS Grid layouts, create equal and responsive columns, use named grid areas, and learn JavaScript timers using `setTimeout()`, `clearTimeout()`, `setInterval()`, and `clearInterval()`.

## 1. HTML and CSS Tasks

### Task 1: Grid with Equal Columns (`grid-first.html`)
- Created six boxes displaying numbers 1 to 6.
- Used `display: grid` to create a grid layout.
- Used `grid-template-columns: 1fr 1fr 1fr` for three equal columns.
- Applied a gap of `12px` between boxes.

### Task 2: Responsive Gallery (`gallery.html`)
- Created a heading named Club Photo Gallery.
- Added six boxes labelled Photo 1 to Photo 6.
- Used `repeat(auto-fill, minmax(150px, 1fr))`.
- Applied a gap of `10px`.
- Made the gallery responsive to different browser widths.

### Task 3: Grid Template Areas (`dashboard-areas.html`)
- Created a dashboard using CSS Grid.
- Used two columns: `200px` and `1fr`.
- Used `grid-template-areas` to arrange the layout.
- Added Header, Sidebar, Main and Footer sections.
- Header and Footer span across both columns.

## 2. JavaScript Tasks

### Task 1: setTimeout (`task1.js`)
- Printed `Start`.
- Used `setTimeout()` with a delay of 0 milliseconds.
- Printed `End`.
- Observed the execution order of synchronous code and the timer callback.

**Expected Output:**
```text
Start
End
Timer done
```

### Task 2: clearTimeout (`task2.js`)
- Scheduled a message using `setTimeout()` with a delay of 1000 milliseconds.
- Stored the timer ID in a variable.
- Used `clearTimeout()` to cancel the timer.
- Printed `Cancelled`.

**Expected Output:**
```text
Cancelled
```

### Task 3: setInterval and clearInterval (`task3.js`)
- Used `setInterval()` to print a message every 200 milliseconds.
- Increased the count after every interval.
- Used `clearInterval()` to stop execution when the count reached 3.

**Expected Output:**
```text
Tick 