# Skip Size Selector - Redesign 

This project is a redesign of the **"Choose Your Skip Size"** page from [WeWantWaste.co.uk](https://wewantwaste.co.uk), created as part of a front-end coding challenge.

## 🔗 Live Preview

[View on CodeSandbox](https://5kk7vy-3000.csb.app/) – *(Replace this with your actual link)*

---

## 🚀 Project Overview

The goal was to **completely redesign** the "Choose Your Skip Size" page to create a more modern, clean, and responsive UI while **keeping all functionality intact**.

The data is fetched from the live API:

https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft


---

## ✨ Key Features

- **Responsive Design** – Adapts beautifully to both mobile and desktop screens.
- **Dark UI Theme** – Modern and accessible design with soft shadows and dark cards.
- **Skip Size Badge** – Each skip card has a circular avatar showing its size in yards.
- **Details Displayed**:
  - Skip Size
  - Hire Period (days)
  - Price before VAT
  - VAT percentage
  - Heavy Waste Allowed
  - Road Placement Allowed
- **Accessibility Tags** – Green and red badges indicate eligibility clearly.
- **Clean and Maintainable Code** – Modular and scalable with minimal inline styles.

---

## 🧱 Tech Stack

- **React (with Hooks)**
- **CSS (Custom styling)**
- **Responsive Grid (CSS Grid & Flexbox)**

---

## 📁 Folder Structure
src/
│
├── App.js # Main component handling fetch and rendering skip cards
├── Style.css # Custom responsive styles for the new UI
└── index.js # React DOM entry point


---

## 🧠 How It Works

- On component mount, the app calls the skip API using `useEffect`.
- Retrieved skip data is stored using `useState`.
- Each skip is rendered as a responsive card showing key information.
- Conditional rendering and class styling show:
  - Green badges for allowed features
  - Red badges for disallowed features
- Mobile responsiveness is handled using CSS Grid with `auto-fit` and `minmax()`.

---

## 📸 Design Inspiration

The layout is inspired by admin-style user cards commonly used in dashboards. The image section was replaced with a **circular badge displaying the skip size** for better usability and distinction.


