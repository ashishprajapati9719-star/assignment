# Assignment 8: HTML, CSS and JavaScript

## Aim
To create HTML sign-up forms with different input types and choices, and to understand JavaScript inheritance, methods, and object composition.

## 1. HTML – Sign-Up Forms and Choices

### Task 1: Sign-Up Form
**File:** `signup.html`

- Created a sign-up form.
- Added Full Name, Email, and Password fields.
- Used labels for all input fields.
- Added a Submit button.

### Task 2: Radio Buttons and Dropdown
**File:** `choices.html`

- Created Female and Male radio button options.
- Used the same `name` attribute for radio buttons.
- Added a course dropdown with BCA and B.Tech options.

### Task 3: Required Form Fields
**File:** `signup-required.html`

- Created Full Name and Email fields.
- Used the `required` attribute.
- Added browser validation for empty fields.

## 2. CSS – Styling

No separate CSS task was provided in this assignment. Therefore, no separate CSS file was created.

## 3. JavaScript – Inheritance, Methods and Composition

### Task 1: Inheritance
**File:** `task1.js`

- Created a `Person` class.
- Created a `Teacher` class using `extends`.
- Used `super()` to call the parent constructor.
- Called the inherited `greet()` method.

**Expected Output:**
```text
Hi, I am Anita
```

### Task 2: Method to Check a Value
**File:** `task2.js`

- Created a `Locker` class.
- Added a `checkPin()` method.
- Checked whether the entered PIN matches the stored PIN.

**Expected Output:**
```text
false
true
```

### Task 3: Object Composition
**File:** `task3.js`

- Created an `Engine` class.
- Created a `Car` class.
- Added an Engine object inside the Car object.
- Used the `start()` method to display engine power.

**Expected Output:**
```text
Car starts with 150 HP
```

## 4. How to Run JavaScript Files

Open the VS Code terminal and run these commands:

```bash
node task1.js
node task2.js
node task3.js
```

## 5. Screenshots

- `signup.html` – Sign-up form screenshot.
- `choices.html` – Radio buttons