# CodeAnt AI: Hiring Challenge

## Description
This project is a part of the CodeAnt AI hiring challenge. The goal is to implement a web application based on the provided Figma design. The application includes a dashboard, a sidebar, and a repository list fetched from GitHub.

## Table of Contents
- [Overview](#overview)
- [Objectives](#objectives)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Folder Structure](#folder-structure)

## Overview
The CodeAnt AI project is designed to help developers manage their repositories efficiently. It includes a dashboard with a sidebar for navigation and a main content area that displays a list of repositories fetched from GitHub. The application is responsive and adapts to different screen sizes.

## Objectives
- Implement a responsive sidebar with navigation links.
- Fetch and display repositories from GitHub.
- Implement search and filter functionality for repositories.
- Provide a refresh option to update the repository list.
- Implement sign-in buttons for different platforms.
- Ensure the application matches the provided Figma design.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/codeant-ai.git
2. Navigate to the project directory:
    ```bash
    cd antai-master
3. Install the dependencies:
    ```bash
    npm install
4. Start the development server:
    ```bash
    npm run dev

## Technologies Used
- React
- Tailwind CSS
- Heroicons
- React Router
- React Spinners

## Features
- Responsive sidebar with navigation links
- Fetch and display repositories from GitHub
- Search and filter repositories
- Refresh repository list
- Sign-in buttons for different platform

## Folder Structure

## Folder Structure

📦 codeant-ai
    
    ┣ 📂 public                  # Static files
    ┃  ┣ 📂 assets              # Images and icons
    ┃  ┃  ┣ 📜 logo.png
    ┃  ┃  ┣ 📜 github.svg
    ┃  ┃  ┣ 📜 bitbucket.svg
    ┃  ┃  ┣ 📜 azure.svg
    ┃  ┃  ┣ 📜 gitlab.svg
    ┃  ┃  ┣ 📜 sso.svg
    ┃  ┃  ┣ 📜 Logo.svg
    ┃  ┃  ┗ 📜 Ant.svg
    ┃  ┗ 📜 index.html
    
    ┣ 📂 src                    # Source files
    ┃  ┣ 📂 components          # React components
    ┃  ┃  ┣ 📂 Dashboard        # Dashboard related components
    ┃  ┃  ┃  ┣ 📜 LeftDashBoard.jsx
    ┃  ┃  ┃  ┗ 📜 RightDashboard.jsx
    ┃  ┃  ┗ 📂 Homepage        # Homepage related components
    ┃  ┃     ┣ 📜 HomeSideBar.jsx
    ┃  ┃     ┣ 📜 HomePageRepos.jsx
    ┃  ┃     ┗ 📜 Repository.jsx
    ┃  ┣ 📂 pages              # Page components
    ┃  ┃  ┣ 📜 Dashboard.jsx
    ┃  ┃  ┗ 📜 HomePage.jsx
    ┃  ┣ 📜 App.js             # Main App component
    ┃  ┣ 📜 App.css            # Global styles
    ┃  ┗ 📜 index.js           # Entry point
    
    ┗ 📜 package.json          # Project dependencies and scripts