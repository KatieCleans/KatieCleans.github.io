Here is an upgraded `README.md` file.

This version is more professional, using **badges** to show the license and website status, **icons** for the tech stack, and much **clearer instructions** for Katie on how to edit the most important parts (especially the prices).

-----

### Upgraded `README.md`

Copy and paste the text below into your `README.md` file.

```markdown
# Katie Cleans
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg) ![Website](https://img.shields.io/website?up&label=katiecleans.github.io&url=https%3A%2F%2Fkatiecleans.github.io)

This is the official website for **Katie Cleans**, a professional cleaning service specializing in Stress-Free Turnover Cleaning for apartments and rentals.

> **Live Site:** [https://katiecleans.github.io/](https://katiecleans.github.io/)


*(To add a screenshot, take one, add it to this repository as `screenshot.png`, and then replace the line above with `![Homepage Screenshot](screenshot.png)`)*

---

## ✨ Key Features
* **Simple & Fast:** A static site with no frameworks for instant loading.
* **Interactive Quote Tool:** A real-time quote calculator built with vanilla JavaScript.
* **Services Checklist:** A clear, detailed breakdown of what's included in a turnover clean.
* **Clean & Modern Design:** A professional, trustworthy, and mobile-responsive layout.

## 🛠️ Tech Stack
This site is built with basic, vanilla web technologies for maximum speed and simplicity.
* ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✏️ How to Edit the Website
All changes can be made by editing the files directly on GitHub.

### 1. To Change Text (e.g., phone number, service descriptions):
* **Homepage:** Edit the `index.html` file.
* **Services Page:** Edit the `services.html` file.

### 2. To Change Prices on the Quote Tool:
This is a **two-step** process. Both must be done!

1.  **Change the Display Text:**
    * Open the `index.html` file.
    * Find the "Select Apartment Size" section.
    * Change the text in the `<option>` tags (e.g., `Studio ($150)`).
    * Update the add-on text as well (e.g., `Inside Oven (+$30)`).

2.  **Change the Calculator Logic:**
    * Open the `script.js` file.
    * Find the `BASE_PRICES` and `ADDON_PRICES` variables at the top.
    * Update the numbers to match the new prices.

### 3. To Change Colors or Fonts:
* All styles are in the `style.css` file.
* Key colors (like the navy blue and mint green) are defined at the top as CSS variables (`--navy`, `--mint`) for easy changes.

## 📜 License
This project is released under the **MIT License**. See the `LICENSE` file for details.
```
