# 👩‍💻 Developer Manual: What to Eat?

## Overview
This document explains how to install, run, and develop the "What to Eat?" application. The frontend uses plain HTML/CSS/JS and the Meal DB as well as Chart.js for data visualization. The backend uses [Supabase](https://supabase.io) for storage.

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/what-to-eat.git
cd what-to-eat
```
### 2. Install Dependencies
```bash
npm install
npm install @supabase/supabase-js
npm install express
npm install vercel
```

## Bugs
The favorites database is not working on the website. In Insomia calls, GET and POST requests are successful but when it is combined on to the front-end. 

## API Documentation 
### POST
- Adds a new meal to the favorites table in Supabase
- Request Body:
``` json
{
  "meal_name": "Shakshuka",
  "meal_type": "Breakfast",
  "cooking_difficulty": "Medium"
}
```
- Success response:
``` json 
[
  {
    "meal_name": "Shakshuka",
    "meal_type": "Breakfast",
    "cooking_difficulty": "Medium"
  }
]
```
- Errors:
Returns 500 error. 
## GET 
- Fetches all meal entries from the favorites table in Supabase
- Success Response:
``` json 
[
  {
    "meal_name": "Tacos",
    "meal_type": "Dinner",
    "cooking_difficulty": "Easy"
  },
  {
    "meal_name": "Shakshuka",
    "meal_type": "Breakfast",
    "cooking_difficulty": "Medium"
  }
]
```
- Errors:
Returns 500 error. 