# Recipe Search App – Documentation & Showcase

> *A small React project created as a learning exercise.*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Table of Contents
1. [Introduction](#1-introduction)
2. [Tech Stack](#2-tech-stack)
3. [Installation](#3-installation)
4. [Features](#4-features)
5. [License](#6-license)

## 1. Introduction

The **Recipe Search App** lets you explore meals from the Spoonacular API. It is a small portfolio project – **not intended for production** – showing basic React hooks, local storage usage and API calls.

## 2. Tech Stack

| Layer      | Technology | Key Libraries        |
| ---------- | ---------- | -------------------- |
| Front‑end  | React 18   | chart.js, react-icons |

## 3. Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Provide a valid Spoonacular API key using `REACT_APP_API_KEY` (e.g. in `.env`).
3. Start the development server:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## 4. Features

- **Recipe search** – type a food name and press **Enter** to fetch matching recipes.
- **Recipe details** – view ingredients, instructions and a taste chart powered by Chart.js.
- **Favorites** – bookmark recipes for quick access; data is saved in `localStorage`.
- **Units and servings** – toggle metric/US measures and change the serving count.
- **Responsive** – layout adapts to smaller screens.

## 5. License

This project is licensed under the [MIT License](./LICENSE).