# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Web Development Project 2 - *Travel Trivia*

Submitted by: **Thy Tran**

This web app: **An interactive travel trivia flashcard app with study and quiz modes. Test your knowledge of world geography, landmarks, and travel destinations!**

Time spent: **X** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Some or all cards have images in place of or in addition to text (emoji icons for each card)
- [x] Cards have different visual styles such as color based on their category
  - [x] Difficulty: Easy (Blue), Medium (Green), Hard (Pink)
  - [x] Category: Capital Cities, Landmarks, Geography, Cities

The following **additional** features are implemented:

* [x] **Quiz Mode**: Interactive guessing with answer input and scoring
* [x] **Smart Answer Matching**: Fuzzy matching accepts variations (e.g., "Tokyo" or "tokyo")
* [x] **Real-time Scoring**: Live score tracking with percentage calculation
* [x] **Visual Feedback**: Cards pulse green for correct answers, shake red for incorrect
* [x] **Two Game Modes**: Toggle between Study Mode (flip cards) and Quiz Mode (type answers)
* [x] **Keyboard Support**: Press Enter to submit answers
* [x] **Responsive Design**: Works perfectly on mobile and desktop
* [x] **Beautiful Animations**: 3D card flip effects and smooth transitions

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

**Challenges encountered while building the app:**
- Implementing the 3D card flip animation with CSS transforms
- Creating a fuzzy matching algorithm for answer validation
- Managing multiple state variables for quiz mode functionality
- Ensuring responsive design works across different screen sizes
- Integrating both study and quiz modes in a single app

**Technical highlights:**
- Built with React 18 and Vite for fast development
- Used modern CSS features (gradients, animations, flexbox)
- Implemented smart answer checking with normalized string comparison
- Created reusable FlashCard component with props-based styling
- Added visual feedback animations for enhanced user experience

## License

    Copyright 2024 Thy Tran

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
