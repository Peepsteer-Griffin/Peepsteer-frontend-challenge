# 📚 BookStream Frontend Challenge

Welcome to the **BookStream Frontend Developer Challenge**! This project is designed to evaluate your skills in React and working with JSON data to create a functional and user-friendly search interface.

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

Your task is to build a **search results page** using the provided React starter code and sample data.

The user should be able to:

- Search using a search bar.
- View matching **users (authors)** _first_, followed by matching **books**.
- See clean, consistent layout cards for each result.

---

## 📁 Provided

- A React app scaffold inside the `/starter-code` directory.
- A JSON file (`/data/searchData.json`) containing:
  - A list of `users` (authors)
  - A list of `books`
- A set of profile and cover images in the `/assets/` folder.
- Optional inspiration image of the mobile app search page.

---

## 🔍 Requirements

### ✅ Core Functionality

- [ ] Build a page that displays **all users and books** when no search term is entered.
- [ ] Add a **search bar** to filter results in real-time or on input.
- [ ] When search is active:
  - [ ] Show matching **users first**
  - [ ] Then show matching **books**
  - [ ] Matching should check `name`, `title`, and other text fields as appropriate
- [ ] Handle **missing/null values** in the data gracefully (e.g. no profile image, missing region).

### ⚙️ Optional Bonus Features

You may implement any of the following **only if you want to go above and beyond**:

- [ ] Add **filters** (e.g. by `region`, `dateCreated`, or other fields).
- [ ] Add sort functionality (e.g. alphabetically or by date).
- [ ] Responsive styling.

These are totally optional and not expected. We care more about quality and clarity than complexity.

---

## 🧪 Data Sample

You’ll find the data in `/data/searchData.json`, that'll look something like this:

```json
{
  "books": [
    {
      "id": "52eddf60-398a-4839-85ab-a186dd4d66d2",
      "book_title": "The Magician’s Nephew",
      "chapter_count": 15,
      "page_count": 221,
      "book_description": "When Digory and Polly are tricked by Digory’s peculiar Uncle Andrew into becoming part of an experiment, they set off on the adventure of a lifetime. What happens to the children when they touch Uncle Andrew’s magic rings is far beyond anything even the old magician could have imagined. Hurtled into the Wood between the Worlds, the children soon find that they can enter many worlds through the mysterious pools there. In one world they encounter the evil Queen Jadis, who wreaks havoc in the streets of London when she is accidentally brought back with them. When they finally manage to pull her out of London, unintentionally taking along Uncle Andrew and a coachman with his horse, they find themselves in what will come to be known as the land of Narnia.",
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

Once finished with this challenge, please include a reflection in this README.md below, answering, in a few simple sentences, what you would improve upon if given more time to work on this project.
