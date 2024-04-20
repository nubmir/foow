# FOODO BACKEND

**Badges**

Optional badges such as npm version, test and build coverage, and so on.

**Summary**

One- or two-sentence description of what the module does.

## Overview

Optionally, include a section of one or two paragraphs with more high-level
information on what the module does, what problems it solves, why one would
use it and how. Don't just repeat what's in the summary.

## Quick Start

Clone repository:

```console
git clone https://github.com/HSBC-Kelompok-1/Foodo-Backend.git
```

Clone repository:

```console
cd Foodo-Backend
```

Install dependencies:

```console
$ npm install
```

Start the server on development:

```console
$ npm run dev
```

View the website at: http://localhost:3000

Start the server on production:

```console
$ npm start
```

## Basic use

General description of how to use the module with basic example.

## API

### - Authentication

**Endpoint** : **POST /auth/register**

Summary : route for making new user account

Request :

- Name : username <br>
  In : body <br>
  Description : username account max 12 char <br>
  Required : true <br>
  Type : String <br>

- Name : email <br>
  In : body <br>
  Description : email account, must be valid email format <br>
  Required : true <br>
  Type : String <br>

- Name : password <br>
  In : body <br>
  Description : password acoount, must be strong password<br>
  Required : true <br>
  Type : String <br>

Response Success :

```JSON
{
   "data": {
        "uuid": "0ff0a33e-c967-42ba-b842-35a1f871e5db",
        "email": "admin100@gmail.com",
        "username": "ibrhmsptra"
    },
    "message": "Create Account Success"
}
```

Response Error :

```JSON
{
   "message" : "Email alredy exists"
}
```

<br>
<hr>
<br>

**Endpoint** : **POST /auth/login**

Summary : route for login and authenticate user

Request :

- Name : email <br>
  In : body <br>
  Description : email account, must be valid email format <br>
  Required : true <br>
  Type : String <br>

- Name : password <br>
  In : body <br>
  Description : Must be the same password used for that email<br>
  Required : true <br>
  Type : String <br>

Response Success :

```JSON
{
   "data": {
        "uuid": "0ff0a33e-c967-42ba-b842-35a1f871e5db",
        "email": "admin100@gmail.com",
        "username": "ibrhmsptra"
    }
}
```

Set Cookie :

```javascript
token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiYjVhZjg1YjYtZmE1OS00ZmZkLThhNDctZTRiN2U5ZDFiZTEzIiwiZW1haWwiOiJpYnJobXNwdHJhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiaWJyaG1zcHRyYSIsImlhdCI6MTcxMzQzMjE2MCwiZXhwIjoxNzEzNDM1NzYwfQ.NzpYiArtWNbo9WKfKv-ueGsqRoTEbtylE_6ty9L6kfA";
```

Response Error :

```JSON
{
   "message" : "Invalid credentials"
}
```

<br>
<hr>
<br>

**Endpoint** : **POST /auth/logout**

Summary : route for logout and remove cookie token from user

Response Success :

```JSON
{
    "message" : "Successfully logout"
}
```

Set Cookie :

```javascript
token = null;
```

Response Error :

```JSON
{
   "message" : "Unauthorized user"
}
```

### - Categories

Endpoint : **GET /api/categories**

Summary : To get all food categories on foodo website.

Response Success :

```JSON
{
   "data" :[
      {
         "id" : 1,
         "name" : "Korea",
         "header_image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/Banner/Korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9CYW5uZXIvS29yZWEucG5nIiwiaWF0IjoxNzA5ODc4NzgzLCJleHAiOjE3NzI5NTA3ODN9.TgW03aNnWHB6tb1lFYYnbc6YzyNCyclGETKgzOPeKSE&t=2024-03-08T06%3A19%3A43.378Z",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z"
      },
      {
         "id" : 2,
         "name" : "Jepang",
         "header_image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/Banner/Jepang.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9CYW5uZXIvS29yZWEucG5nIiwiaWF0IjoxNzA5ODc4NzgzLCJleHAiOjE3NzI5NTA3ODN9.TgW03aNnWHB6tb1lFYYnbc6YzyNCyclGETKgzOPeKSE&t=2024-03-08T06%3A19%3A43.378Z",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/jepang.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z"
      }
   ]
}
```

Response Error :

```JSON
{
   "message" : "Data not found"
}
```

### - Food

**Endpoint** : **GET /api/food**

Summary : to get food data

Request :

- Name : page <br>
  In : query <br>
  Description : To set pagination on data <br>
  Required : true <br>
  Type : Int <br>
  Default : 1

- Name : categories <br>
  In : query <br>
  Description : To get food data by categories using category id <br>
  Required : false <br>
  Type : Int <br>

- Name : price <br>
  In : query <br>
  Description : To get food sorted by price can be asc or desc<br>
  Required : true <br>
  Type : String <br>
  Default : "asc"

- Name : rating <br>
  In : query <br>
  Description : To get food sorted by rating can be asc or desc<br>
  Required : false <br>
  Type : String <br>

- Name : order <br>
  In : query <br>
  Description : To get food sorted by order can be asc or desc<br>
  Required : false <br>
  Type : String <br>

Response Success :

```JSON
{
   "page" : 2,
   "total_pages" : 5,
   "total_results" : 20,
   "data" :[
      {
         "id" : 1,
         "name" : "Nasi Goreng",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "price" : 20000,
         "rating" : 5,
         "order" : 18
      },
      {
        "id" : 2,
         "name" : "Ramen",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "price" : 25000,
         "rating" : 3,
         "order" : 13
      },
      {
        "id" : 3,
         "name" : "Taco",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "price" : 10000,
         "rating" : 4,
         "order" : 12
      },
      {
        "id" : 4,
         "name" : "Soto Ayam",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "price" : 15000,
         "rating" : 0,
         "order" : 0
      },
   ]
}
```

Response Error :

```JSON
{
   "message" : "Data not found"
}
```

<br>
<hr>
<br>

**Endpoint** : **GET /api/food/:id**

Summary : to get food detail

Request :

- Name : id <br>
  In : params <br>
  Description : send id food to get food details <br>
  Required : true <br>
  Type : Int <br>

Response Success :

```JSON
{
   "data" :{
      "id" : 1,
      "name" : "Nasi Goreng",
      "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
      "description" : "Nasi goreng adalah makanan berupa nasi yang digoreng dan dicampur dalam minyak goreng, margarin, atau mentega.",
      "rating" : 5,
      "order" : 20,
      "category" : "Nusantara",
      "ingredients" : [
         {
            "amount" : 4,
            "name" : "sdt garam",
            "price" : 4000
         },
         {
            "amount" : 2,
            "name" : "potong ayam",
            "price" : 10000
         },
         {
            "amount" : 1,
            "name" : "siung bawang",
            "price" : 1000
         },
      ],
      "Method" : [
         {
            "step" : 1,
            "how" : "Panaskan minyak dan siapkan nasi yang sudah dingin"
         },
         {
            "step" : 2,
            "how" : "Masuan nasi dan aduk dengan bumbu"
         },
         {
            "step" : 3,
            "how" : "masukan telur dan ayam yang sudah di masak dengan matang"
         },
         {
            "step" : 4,
            "how" : "sajian di piring hangat hangat"
         },
      ]
   }
}
```

Response Error :

```JSON
{
   "message" : "Data not found"
}
```

<br>
<hr>
<br>

**Endpoint** : **GET /api/food/search**

Summary : to search food data by user query

Request :

- Name : query <br>
  In : query <br>
  Description : To get food by query search from user <br>
  Required : true <br>
  Type : String <br>

Response Success :

```JSON
{
   "data" :[
      {
         "id" : 1,
         "name" : "Nasi Goreng",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "category" : "Nusantara"
      },
      {
        "id" : 2,
         "name" : "Ramen",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "category" : "Jepang"
      },
      {
        "id" : 3,
         "name" : "Taco",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "category" : "Western"
      },
      {
        "id" : 4,
         "name" : "Soto Ayam",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "category" : "Nusantara"
      },
   ]
}
```

Response Error :

```JSON
{
   "data" : [],
   "message" : "Data not found"
}
```

<br>
<hr>
<br>

**Endpoint** : **GET /api/food/random**

Summary : to get food data with random with limitation

Request :

- Name : limit <br>
  In : query <br>
  Description : To set limit on data <br>
  Required : true <br>
  Type : Int <br>
  Default : 1

Response Success :

```JSON
{
   "data" :[
      {
         "id" : 1,
         "name" : "Nasi Goreng",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "price" : 20000,
         "rating" : 5,
         "order" : 18
      },
      {
        "id" : 2,
         "name" : "Ramen",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "price" : 25000,
         "rating" : 3,
         "order" : 13
      },
      {
        "id" : 3,
         "name" : "Taco",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "price" : 10000,
         "rating" : 4,
         "order" : 12
      },
      {
        "id" : 4,
         "name" : "Soto Ayam",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "price" : 15000,
         "rating" : 0,
         "order" : 0
      },
   ]
}
```

Response Error :

```JSON
{
   "message" : "Something went wrong"
}
```

### - Bookmark

**Endpoint** : **POST /api/bookmark**

Summary : to add food on their bookmark / favorite

Request :

- Name : user_uuid <br>
  In : cookie <br>
  Description : uuid account from that user <br>
  Required : true <br>
  Type : Int <br>

- Name : food_id <br>
  In : params <br>
  Description : id food from users click <br>
  Required : true <br>
  Type : Int <br>

Response Success :

```JSON
{
   "data" :{
      "id" : 1,
      "name" : "Nasi Goreng",
      "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
      "description" : "Nasi goreng adalah makanan berupa nasi yang digoreng dan dicampur dalam minyak goreng, margarin, atau mentega.",
      "rating" : 5,
      "order" : 20,
      "category" : "Nusantara",
      "ingredients" : [
         {
            "amount" : 4,
            "name" : "sdt garam",
            "price" : 4000
         },
         {
            "amount" : 2,
            "name" : "potong ayam",
            "price" : 10000
         },
         {
            "amount" : 1,
            "name" : "siung bawang",
            "price" : 1000
         },
      ],
      "Method" : [
         {
            "step" : 1,
            "how" : "Panaskan minyak dan siapkan nasi yang sudah dingin"
         },
         {
            "step" : 2,
            "how" : "Masuan nasi dan aduk dengan bumbu"
         },
         {
            "step" : 3,
            "how" : "masukan telur dan ayam yang sudah di masak dengan matang"
         },
         {
            "step" : 4,
            "how" : "sajian di piring hangat hangat"
         },
      ]
   },
   "message" : "Food successfully added to bookmark"
}
```

Response Error :

```JSON
{
   "message" : "data insert failed"
}
```

<br>
<hr>
<br>

**Endpoint** : **DELETE /api/bookmark**

Summary : to delete food on their bookmark / favorite

Request :

- Name : user_uuid <br>
  In : body <br>
  Description : uuid account from that user <br>
  Required : true <br>
  Type : Int <br>

- Name : food_id <br>
  In : body <br>
  Description : id food from users click <br>
  Required : true <br>
  Type : Int <br>

Response Success :

```JSON
{
   "data" :{
      "id" : 1,
      "name" : "Nasi Goreng",
      "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
      "description" : "Nasi goreng adalah makanan berupa nasi yang digoreng dan dicampur dalam minyak goreng, margarin, atau mentega.",
      "rating" : 5,
      "order" : 20,
      "category" : "Nusantara",
      "ingredients" : [
         {
            "amount" : 4,
            "name" : "sdt garam",
            "price" : 4000
         },
         {
            "amount" : 2,
            "name" : "potong ayam",
            "price" : 10000
         },
         {
            "amount" : 1,
            "name" : "siung bawang",
            "price" : 1000
         },
      ],
      "Method" : [
         {
            "step" : 1,
            "how" : "Panaskan minyak dan siapkan nasi yang sudah dingin"
         },
         {
            "step" : 2,
            "how" : "Masuan nasi dan aduk dengan bumbu"
         },
         {
            "step" : 3,
            "how" : "masukan telur dan ayam yang sudah di masak dengan matang"
         },
         {
            "step" : 4,
            "how" : "sajian di piring hangat hangat"
         },
      ]
   },
   "message" : "Food successfully deleted from bookmark"
}
```

Response Error :

```JSON
{
   "message" : "data not found"
}
```

<br>
<hr>
<br>

**Endpoint** : **GET /api/bookmark**

Summary : to get user food bookmark / favorite

Request :

- Name : user_uuid <br>
  In : cookie <br>
  Description : uuid account from that user <br>
  Required : true <br>
  Type : Int <br>

- Name : page <br>
  In : query <br>
  Description : To set pagination on data <br>
  Required : true <br>
  Type : Int <br>
  Default : 1

- Name : price <br>
  In : query <br>
  Description : To get food sorted by price can be asc or desc<br>
  Required : true <br>
  Type : String <br>
  Default : "asc"

- Name : rating <br>
  In : query <br>
  Description : To get food sorted by rating can be asc or desc<br>
  Required : false <br>
  Type : String <br>

- Name : order <br>
  In : query <br>
  Description : To get food sorted by order can be asc or desc<br>
  Required : false <br>
  Type : String <br>

Response Success :

```JSON
{
   "page" : 2,
   "total_pages" : 5,
   "total_results" : 20,
   "data" :[
      {
         "id" : 1,
         "name" : "Nasi Goreng",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "price" : 20000,
         "rating" : 5,
         "order" : 18
      },
      {
        "id" : 2,
         "name" : "Ramen",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "price" : 25000,
         "rating" : 3,
         "order" : 13
      },
      {
        "id" : 3,
         "name" : "Taco",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "price" : 10000,
         "rating" : 4,
         "order" : 12
      },
      {
        "id" : 4,
         "name" : "Soto Ayam",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "price" : 15000,
         "rating" : 0,
         "order" : 0
      },
   ]
}
```

Response Error :

```JSON
{
   "message" : "data not found"
}
```

<br>
<hr>
<br>

**Endpoint** : **GET /api/bookmark/search**

Summary : to search food on their bookmark / favorite

Request :

- Name : user_uuid <br>
  In : cookie <br>
  Description : uuid account from that user <br>
  Required : true <br>
  Type : Int <br>

- Name : food_id <br>
  In : params <br>
  Description : id food that want to search <br>
  Required : true <br>
  Type : Int <br>

Response Success :

```JSON
{
   "data" :[
      {
         "id" : 1,
         "name" : "Nasi Goreng",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "price" : 20000,
         "rating" : 5,
         "order" : 18
      }
   ]
}
```

Response Error :

```JSON
{
   "message" : "data not found"
}
```

### - Order

**Endpoint** : **POST /api/order**

Summary : to create order / food transaction on table order

Request :

- Name : user_uuid <br>
  In : cookie <br>
  Description : uuid account from that user <br>
  Required : true <br>
  Type : Int <br>

- Name : food_id <br>
  In : body <br>
  Description : id of food want to order by user <br>
  Required : true <br>
  Type : Int <br>

- Name : location <br>
  In : body <br>
  Description : Location where food will be sent <br>
  Required : true <br>
  Type : Int <br>

Response Success :

```JSON
{
   "data" :{
      "id" : 1,
      "name" : "Nasi Goreng",
      "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
      "description" : "Nasi goreng adalah makanan berupa nasi yang digoreng dan dicampur dalam minyak goreng, margarin, atau mentega.",
      "rating" : 5,
      "order" : 20,
      "category" : "Nusantara",
      "ingredients" : [
         {
            "amount" : 4,
            "name" : "sdt garam",
            "price" : 4000
         },
         {
            "amount" : 2,
            "name" : "potong ayam",
            "price" : 10000
         },
         {
            "amount" : 1,
            "name" : "siung bawang",
            "price" : 1000
         },
      ],
      "Method" : [
         {
            "step" : 1,
            "how" : "Panaskan minyak dan siapkan nasi yang sudah dingin"
         },
         {
            "step" : 2,
            "how" : "Masuan nasi dan aduk dengan bumbu"
         },
         {
            "step" : 3,
            "how" : "masukan telur dan ayam yang sudah di masak dengan matang"
         },
         {
            "step" : 4,
            "how" : "sajian di piring hangat hangat"
         },
      ]
   },
   "message" : "Food successfully ordered"
}
```

Response Error :

```JSON
{
   "message" : "data insert failed"
}
```

<br>
<hr>
<br>

**Endpoint** : **PATCH /api/order/rating**

Summary : to give rating on food that already ordered and auto-update on rating food tables

Request :

- Name : user_uuid <br>
  In : cookie <br>
  Description : uuid account from that user <br>
  Required : true <br>
  Type : Int <br>

- Name : food_id <br>
  In : body <br>
  Description : id of food want to order by user <br>
  Required : true <br>
  Type : Int <br>

- Name : rating <br>
  In : body <br>
  Description : rate from user value can be beetwen 1-5 <br>
  Required : true <br>
  Type : Int <br>

Response Success :

```JSON
{
   "message" : "Food successfully rated"
}
```

Response Error :

```JSON
{
   "message" : "Patch / Update data failed"
}
```

<br>
<hr>
<br>

**Endpoint** : **GET /api/order**

Summary : to get user order history

Request :

- Name : user_uuid <br>
  In : cookie <br>
  Description : uuid account from that user <br>
  Required : true <br>
  Type : Int <br>

- Name : page <br>
  In : query <br>
  Description : To set pagination on data <br>
  Required : true <br>
  Type : Int <br>
  Default : 1

- Name : date <br>
  In : query <br>
  Description : To get food sorted by date can be asc or desc<br>
  Required : true <br>
  Type : String <br>
  Default : "desc"

- Name : price <br>
  In : query <br>
  Description : To get food sorted by price can be asc or desc<br>
  Required : false <br>
  Type : String <br>

Response Success :

```JSON
{
   "page" : 2,
   "total_pages" : 5,
   "total_results" : 20,
   "data" :[
      {
         "id" : 1,
         "name" : "Nasi Goreng",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "date" : "2024-04-16T05:01:13.613Z",
         "price" : 20000,
         "rating" : 5,
      },
      {
        "id" : 2,
         "name" : "Ramen",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "date" : "2024-04-16T05:01:13.613Z",
         "price" : 25000,
         "rating" : 3,
      },
      {
        "id" : 3,
         "name" : "Taco",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "date" : "2024-04-16T05:01:13.613Z",
         "price" : 10000,
         "rating" : 4,
      },
      {
        "id" : 4,
         "name" : "Soto Ayam",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "date" : "2024-04-16T05:01:13.613Z",
         "price" : 15000,
         "rating" : 0,
      },
   ]
}
```

Response Error :

```JSON
{
   "message" : "data not found"
}
```

<br>
<hr>
<br>

**Endpoint** : **GET /api/order/:food_id**

Summary : to get user order detail

Request :

- Name : user_uuid <br>
  In : cookie <br>
  Description : uuid account from that user <br>
  Required : true <br>
  Type : Int <br>

- Name : food_id <br>
  In : params <br>
  Description : id food from users click<br>
  Required : true <br>
  Type : Int <br>

Response Success :

```JSON
{
   "data" : {
         "location" : "Jakarta Timur",
         "date" : "2024-04-16T05:01:13.613Z",
         "food_id" : 1,
         "name" : "Nasi Goreng",
         "image" : "https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9rb3JlYS5wbmciLCJpYXQiOjE3MDk2Mzk2MDUsImV4cCI6MTc3MjcxMTYwNX0.CrlG5v4LW3Zo9_9J82Y-qTfVlrydWMe4kPX_-M6HsdQ&t=2024-03-05T11%3A53%3A25.587Z",
         "price" : 20000,
         "ingredients" : [
         {
            "amount" : 4,
            "name" : "sdt garam",
            "price" : 4000
         },
         {
            "amount" : 2,
            "name" : "potong ayam",
            "price" : 10000
         },
         {
            "amount" : 1,
            "name" : "siung bawang",
            "price" : 1000
         },
      ]
   }
}
```

Response Error :

```JSON
{
   "message" : "data not found"
}
```

## Examples

Additional examples here.

## Tests

What tests are included and how to run them.

## Contributing

This project welcomes contributions from the community. Contributions are
accepted using GitHub pull requests; for more information, see
[GitHub documentation - Creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

For a good pull request, we ask you provide the following:

1. Include a clear description of your pull request in the description
   with the basic "what" and "why"s for the request.
2. The tests should pass as best as you can. GitHub will automatically run
   the tests as well, to act as a safety net.
3. The pull request should include tests for the change. A new feature should
   have tests for the new feature and bug fixes should include a test that fails
   without the corresponding code change and passes after they are applied.
   The command `npm run test-cov` will generate a `coverage/` folder that
   contains HTML pages of the code coverage, to better understand if everything
   you're adding is being tested.
4. If the pull request is a new feature, please include appropriate documentation
   in the `README.md` file as well.
5. To help ensure that your code is similar in style to the existing code,
   run the command `npm run lint` and fix any displayed issues.

## Contributors

- **Agung**
- **Adam Wisnu Pradana**
- **I Ketut Repo Antara**
- **Ibrahim Saputra**
- **Fachrizal Kurniawan**
- **Immanuel Bayumurti**

## License

Link to the license, with a short description of what it is,
e.g. "MIT" or whatever.

```

```
