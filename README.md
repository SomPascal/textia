# Text Stylizer

## Project Description
This project is a web-based text styling tool that allows users to convert plain text into various Unicode-styled formats, such as bold, italic, script, and gothic. It provides a user-friendly interface for instant text transformation and includes a convenient clipboard feature for easy sharing of the styled output.

Inspired by tools like Yaytext, this application aims to offer a simple yet powerful way to enhance your text for social media, documents, or any other platform that supports Unicode characters.

## Features
Multiple Styles: Convert text into various Unicode styles including:

- Bold (Sans-Serif Bold)
- Italic
- Bold Italic
- Script
- Bold Script
- Fraktur (Gothic)
- Bold Fraktur (Bold Gothic)
- Monospace
- Double-Struck (Blackboard Bold)
- Circled Filled
- Square Filled
- Comprehensive Character Support: Includes conversions for:
    - Uppercase and lowercase Latin letters (A-Z, a-z)
    - Numbers (0-9) where available in the Unicode block
    - Common punctuation marks
    - Basic accented Latin characters
    - Instant Conversion: See your text transform in real-time as you type.
    - One-Click Copy: Easily copy the styled text to your clipboard using a custom useClipboard hook.
    - Minimalist UI: A clean and professional user interface designed for ease of use.

## Technologies Used
### Frontend:

**Preact:** A fast 3KB React alternative with the same modern API.

**TypeScript:** For type-safe and maintainable code.

**Tailwind CSS:** For rapid and responsive UI development.

### Backend:

(Currently, the core text conversion is client-side. Laravel could be integrated for future features like user accounts, saved conversions, or more complex server-side processing if needed.)

### Installation
To set up the project locally, follow these steps:

Clone the repository:

```shell
git clone https://github.com/SomPascal/textia.git tetxia
cd textia
```

### Install dependencies:

```shell
npm install
```
### Run the development server:

```shell
npm run dev
```

This will typically start the application at http://localhost:400 (or similar).

## Usage

* Type or Paste Text: Enter your desired text into the input area on the page.

* Select a Style: Choose your preferred text style from the available options (e.g., "Bold", "Italic").

* Copy to Clipboard: The converted text will appear below the input. Click the "Copy to Clipboard" button to copy the styled text, which you can then paste into any application that supports Unicode characters.


# Contributing
Contributions are welcome! If you have suggestions for new styles, features, or bug fixes, please open an issue or submit a pull request.

# License
This project is licensed under the MIT License. See the LICENSE file for details.

MIT License

    Copyright (c) 2025 NDJENGWES RUBEN

---
look at the LICENSE file of this project for more information.