# Student Directory Viewer (IT 313 - Laboratory 6)

## Overview
This application is a React Native mobile screen built with Expo for browsing and searching a student advising list.

## Component Structure
- `StudentDirectory`: Parent component managing the list state, search query filtering state, and rendering the main container layout and search input.
- `StudentCard`: Presentational/interactive component rendering student information (photo, name, year) with a custom `Pressable` toggle button to flag students for advising.

## How to Run
1. Clone the repository: `git clone <repo-url>`
2. Install dependencies: `npm install`
3. Run the application: `npx expo start`