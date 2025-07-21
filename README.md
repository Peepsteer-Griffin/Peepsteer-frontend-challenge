# 📚 Peepsteer Frontend Challenge

Welcome to the **Peepsteer Frontend Developer Challenge**! This project is designed to evaluate your skills in React and working with JSON data to create a functional and user-friendly search interface.

---

## 🚀 Getting Started

To begin the challenge:

1. **Fork this repository** to your own GitHub account.
2. Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/YOUR-USERNAME/bookstream-frontend-challenge.git
   ```

3. Navigate into the project directory
   ```bash
   cd bookstream-frontend-challenge/starter-code
   ```
4. Install dependencies
   ```bash
   npm install
   ```
5. Start the development server

   ```bash
   npm start

   ```

---

## 🧠 The Goal

Build a React page that displays a list of authors (users) and books from the provided JSON data.

- The page should show **all users and books initially**.
- Include a **search bar with a submit button**.
- When a search term is submitted, **filter the users and books** by matching the `user_name` or `book_title` fields.
- Show matching results in any order or grouped by type.
- Handle missing or null data gracefully (e.g., missing profile images or book covers).

---

## 📁 Provided

- React app scaffold inside the `/starter-code` directory.
- Sample JSON data file at `/data/searchData.json`, containing:
  - A small list of users (authors).
  - A small list of books.
- Profile and cover images in `/assets/` folder.

---

## 🔍 Requirements

### Core Features (Must Do)

- Render all users and books on initial load.
- Add a search bar with a submit button.
- Filter users and books by `user_name` or `book_title` when the search is submitted.
- Display filtered results clearly, grouped or mixed.
- Gracefully handle missing/null data fields such as images or descriptions.

### UI Expectations

- Build your own CSS and layout — no pre-styled components are provided.
- Create clean, consistent card components for users and books.
- Pay attention to spacing, typography, and overall UI clarity.
- Responsive design is optional but welcome.

---

## 🧪 Data Sample

Here is an example of the data structure inside `/data/searchData.json`:

```json
{
  "books": [
    {
      "id": "52eddf60-398a-4839-85ab-a186dd4d66d2",
      "book_title": "The Magician’s Nephew",
      "chapter_count": 15,
      "page_count": 221,
      "book_description": "When Digory and Polly are tricked by Digory’s peculiar Uncle Andrew into becoming part of an experiment...",
      "cover_image": null,
      "genre_tags": "Children,Fantasy",
      "createdAt": "2025-06-11T02:58:27.000Z",
      "updatedAt": "2025-06-11T02:58:27.000Z",
      "authorId": "d952198d-09e0-4a3e-8712-2ebe2865eb55"
    }
  ],
  "users": [
    {
      "id": "7c410486-57e1-4557-8fde-c7becc04ab89",
      "user_name": "Melissa Smith",
      "user_region": "NYC",
      "user_description": "Entrepreneur, innovator, reader.",
      "user_profile_image": "Profile1.jpg"
    }
  ]
}
```

## 📝 Reflection

Once you finish, please include a short reflection in this README below describing what you would improve or add if you had more time.

---

## 🕒 Estimated Time

This challenge should take approximately **4.5 to 6 hours** to complete, including writing your own CSS and handling missing data gracefully.

---

## 🎯 What We Are Looking For

- Proper React fundamentals: component structure, state management, controlled inputs.
- Clean and reusable UI components.
- Thoughtful error handling for missing/null data.
- Well-structured and readable code.
- Attention to UI design, layout, and user experience.

---

If you have any questions, feel free to ask! Good luck and have fun building!

```

```
