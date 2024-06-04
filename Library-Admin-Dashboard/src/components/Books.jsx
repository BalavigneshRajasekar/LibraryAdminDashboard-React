import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import "../App.css";
import BooksList from "./BooksList";
function Books() {
  const [books, setBooks] = useState([]);
  const [id, setId] = useState(0);
  const [editUser, setEditUser] = useState(null); //Contain the book which is going to edit
  const [showEdit, setShowEdit] = useState(false);

  //Initial Schema
  const initialSchema = {
    id: "",
    title: "",
    author: "",
    publishedDate: "",
    isbn: "",
  };
  //Schema only for editing purpose
  const editValues = {
    id: editUser?.id,
    title: editUser?.title,
    author: editUser?.author,
    publishedDate: editUser?.publishedDate,
    isbn: editUser?.isbn,
  };
  const validation = yup.object({
    title: yup.string().required("Title is required"),
    author: yup.string().required("Author is required"),
    publishedDate: yup.string().required("Published Date is required"),
    isbn: yup
      .number()
      .min(12, "min 12 number")

      .required("ISBN is required"),
  });

  function onSubmit(values) {
    const data = { ...values, ["id"]: id };

    setBooks([...books, data]);
    setId(books.length + 1);
    values.title = "";
    values.author = "";
    values.publishedDate = "";
    values.isbn = "";
  }
  const Delete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const edit = (values) => {
    const editedBook = books.map((book) => {
      if (book.id == values.id) {
        return values;
      }
      return book;
    });
    setBooks(editedBook);
    setEditUser(null);
  };

  return (
    <div className="d-md-flex justify-content-around container">
      <div>
        <Formik
          initialValues={editUser ? editValues : initialSchema}
          validationSchema={validation}
          onSubmit={editUser ? edit : onSubmit}
          enableReinitialize
        >
          <Form>
            <div>
              <Field
                type="text"
                name="title"
                className="form-control   text-center "
                placeholder="title"
              />
              <ErrorMessage name="title" component="div"></ErrorMessage>
            </div>
            <div>
              <Field
                type="text"
                name="author"
                className="form-control   text-center"
                placeholder="title"
              />
              <ErrorMessage name="author" component="div"></ErrorMessage>
            </div>
            <div>
              <Field
                type="date"
                name="publishedDate"
                className="form-control  text-center"
                placeholder="title"
              />
              <ErrorMessage name="publishedDate" component="div"></ErrorMessage>
            </div>
            <div>
              <Field
                type="number"
                name="isbn"
                className="form-control text-center"
                placeholder="ISBN"
              />
              <ErrorMessage name="isbn" component="div"></ErrorMessage>
            </div>
            <div>
              {editUser ? (
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              )}
            </div>
          </Form>
        </Formik>
      </div>
      <div>
        <BooksList data={books} delete={Delete} edit={setEditUser}></BooksList>
      </div>
    </div>
  );
}

export default Books;
