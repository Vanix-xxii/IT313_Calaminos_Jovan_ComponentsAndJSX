# IT313 – Components and JSX

## Student Roster App

This project is a React Native Expo application that demonstrates the use of components, JSX, props, conditional rendering, array mapping, and keys.

## Features

- Reusable `StudentCard` component
- Props: `name`, `course`, `units`, and `isFullLoad`
- Conditional rendering of the "Full Load" label
- `StudentRoster` parent component
- Rendering students using `.map()`
- Dynamic total student count
- Reordering students using a button
- Stable keys using `student.id`

## Key Experiment

The application was tested using the array index as the key:

```tsx
key = { index };
```

The list was then reordered to demonstrate why array indexes are not recommended as keys when list items can change order.

The final version uses the student's unique ID:

```tsx
key={student.id}
```

This provides a stable identity for each student.

## Sample Students

- Ana Cruz – IT313 – 21 units
- Bea Santos – IT313 – 15 units
- Cid Ramos – IT313 – 18 units
- Dex Alonzo – IT313 – 12 units

## Technologies Used

- React Native
- Expo
- TypeScript
- JSX

## How to Run

Install the dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npx expo start
```

Open the application using Expo Go.

## Author

Jovan Calaminos
