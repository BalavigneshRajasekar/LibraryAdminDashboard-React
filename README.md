# Library Dashboard with React Formik Validation

Library dashboard created with Two major features in order to add ,edit,delete the Books and Author details the main purpose of the project is handling the form validations All form used in the project is well validated with the help formik and yup, Used Router to navigate one path to other

## Documentation

The Smart components are Books.jsx ,Author.jsx
this two only produced the data in all over the project
The other components are dump In order to help us to create UI

#### 1. Author.jsx

The useFormik hook is used to achieve the validation of the form. It has an initialValues object that defines the initial values for the form fields, and a validationSchema object that defines the validation rules for the form fields. The onSubmit function is called when the form is submitted, and it handles the submission and editing of the author details.

The onEdit function is called when an author needs to be edited. It sets the editAuthor state to the author that needs to be edited and updates the form fields with the values of the author that needs to be edited.

The onDelete function is called when an author needs to be deleted. It filters the authors array to remove the author that needs to be deleted and sets the editAuthor state to null.

The component also renders an AuthorList component, which displays a list of all the authors and allows the user to edit or delete an author. The AuthorList component receives the authors array, the delete function, and the edit function as props. The delete function is called when the user wants to delete an author, and the edit function is called when the user wants to edit an author

#### 2.Books.jsx

The code starts by defining three state variables: "books", "id", and "editUser". The "books" state variable holds an array of all the books, the "id" state variable is used to generate a unique ID for each new book, and the "editUser" state variable is used to store the book that is being edited.

Next, the code defines the initial and edit schemas for the form. The initial schema contains empty strings for each field, while the edit schema contains the values of the fields of the book being edited.

The code then defines a validation schema for the form fields using the Yup library. The schema ensures that each field is required and that the ISBN field contains exactly 12 characters.

The "onSubmit" function is called when the form is submitted. It creates a new object with the form values and the current "id" value, adds it to the "books" array, resets the form fields, and increments the "id" value.

The "Delete" function removes a book from the "books" array when called with the book's ID.

The "edit" function updates a book in the "books" array when called with the edited form values. It creates a new array with the same books but with the edited book replaced by the edited form values, and then it sets the "editUser" state variable to null.

Finally, the code returns a container with a button that navigates back to the previous page, a heading that says "Books Details", and a flex container with two child divs. The first div contains a Formik form for adding or editing books, and the second div contains a BooksList component that displays a list of all the books. The BooksList component receives the "books" array, the "delete" function, and the "edit" function as props.

## Demo

https://library-admin-dashboard-react.vercel.app/

## Run Locally

Clone the project

```bash
  git clone https://github.com/BalavigneshRajasekar/LibraryAdminDashboard-React.git
```

Go to the project directory

```bash
  cd Library-Admin-Dashboard
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
