# Film-List_Svelte_Django Web Appplication

This project is a web application that uses **Svelte** for the frontend and **Django** for the backend. 

## Table of Contents
- [Backend Setup (Django)](#backend-setup-django)
- [Frontend Setup (Svelte)](#frontend-setup-svelte)
- [Running the Application](#running-the-application)
- [Credits](#credits)

## Backend Setup (Django)

1. **Clone the Repository**

   ```bash
   git clone <your-repo-url>
   cd <your-repo-directory>
   ```

2. **Set up Python virtual environment**

   If you're using `virtualenv`:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```

3. **Install Django and other dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Apply Migrations**

      ```bash
   python manage.py makemigrations
   ```

   ```bash
   python manage.py migrate
   ```

6. **Run Django Development Server**

   ```bash
   python manage.py runserver
   ```

The Django server will be running at: `http://127.0.0.1:8000/`

## Frontend Setup (Svelte)

1. **Navigate to the frontend directory**

   ```bash
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the Svelte Development Server**

   ```bash
   npm run dev
   ```

The Svelte app will be running at: `http://localhost:5173/`

## Running the Application

- Start the Django server (in the backend folder):
  ```bash
  python manage.py runserver
  ```
  
- Start the Svelte development server (in the frontend folder):
  ```bash
  npm run dev
  ```

You should now be able to access the application at `http://localhost:5173/`, with the Django backend serving data and APIs.

## Credits

[Svelte and Django App by BugBytes](https://youtube.com/playlist?list=PL-2EBeDYMIbQ2lx2wgi9cplRAd_EEorIS&si=cdxb-G5HzP8JZ6Gi) \
[BugBytes](https://www.youtube.com/@bugbytes3923)
