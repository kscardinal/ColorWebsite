# 🎨 ColorWebsite
`ColorWebsite` is a simple and interactive web tool for previewing and copying branding color hex codes.


![License](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub Release](https://img.shields.io/github/v/release/kscardinal/ColorWebsite)
![GitHub commit activity](https://img.shields.io/github/commit-activity/t/kscardinal/ColorWebsite)
![GitHub last commit](https://img.shields.io/github/last-commit/kscardinal/ColorWebsite)

---

## Table of Contents  
- [Overview](#Overview)
- [Features](#features)
- [Tech Stack](#Tech-Stack)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Usage](#usage)
- [Customization](#Customization)
- [License](#License)

---

## Overview  

`ColorWebsite` was built as a lightweight branding tool for quickly previewing and copying company-approved color hex codes. It provides an intuitive interface where users can hover, click, and instantly apply color styles to sample text while copying the code to the clipboard.

---

## Features  

- Displays primary, secondary, and shade color groups as clickable buttons
- Hover over a color to preview it on sample text
- Click a color button to:
  - Apply the color to text
  - Highlight the selected color button
  - Copy the hex code to clipboard
  - Show a confirmation notification

---

## Tech Stack  

- **Frontend**: HTML, CSS, JavaScript 
- **Backend**: N/A
- **Database**: N/A
- **Other Tools**: Browser-native Clipboard API  

---

## Project Structure  

- colorWebsite/
- ├── [`colorWebsite.html`](colorWebsite.html)                       # Main HTML page
- ├── [`colorWebsite.css`](colorWebsite.css)                       # Layout, colors, and button styles
- └── [`colorWebsite.js`](colorWebsite.js)                       # Handles preview, selection, copy-to-clipboard, and notifications


---

## Setup

1. **Clone repo**
```bash
git clone https://github.com/kscardinal/ColorWebsite.git
cd ColorWebsite
```
2. Open `colorWebsite.html` in your browser.
3. No build tools or dependencies are required.

---

## Usage

1. Hover over any color button to preview the color on the sample text.
2. Click a color button to:
  a. Apply the color to the text
  b. Copy the hex code to your clipboard
  c. See a notification confirming the copy action

---

## Customization

- Add or modify colors in `colorWebsite.html` by editing the button elements
- Update theme variables or styling rules in `colorWebsite.css` to match branding needs

---

## License

This project is licensed under the MIT License, which means you are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, as long as you include the original copyright and license notice in any copy of the software. The software is provided "as is," without warranty of any kind.
