import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import "../App.css";
import BooksList from "./BooksList";
import { Container, Paper } from "@mui/material";
function Books() {
  const [books, setBooks] = useState([]);
  const [id, setId] = useState(0);
  const [editUser, setEditUser] = useState(null); //Contain the book which is going to edit

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
    title: yup.string().required("* Title is required"),
    author: yup.string().required("* Author is required"),
    publishedDate: yup.date().required("* Published Date is required"),
    isbn: yup
      .string()
      .min(12, "* min 12 Char")

      .required("* ISBN is required"),
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
    <Container fixed>
      <div className="d-md-flex justify-content-around">
        <div>
          <Formik
            initialValues={editUser ? editValues : initialSchema}
            validationSchema={validation}
            onSubmit={editUser ? edit : onSubmit}
            enableReinitialize
          >
            <Form>
              <div className="mt-3">
                <Field
                  type="text"
                  name="title"
                  className="form-control   text-center "
                  placeholder="Title"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-danger"
                ></ErrorMessage>
              </div>
              <div className="mt-3">
                <Field
                  type="text"
                  name="author"
                  className="form-control   text-center"
                  placeholder="Author"
                />
                <ErrorMessage
                  name="author"
                  component="div"
                  className="text-danger"
                ></ErrorMessage>
              </div>
              <div className="mt-3">
                <Field
                  type="date"
                  name="publishedDate"
                  className="form-control  text-center"
                  placeholder="title"
                />
                <ErrorMessage
                  name="publishedDate"
                  component="div"
                  className="text-danger"
                ></ErrorMessage>
              </div>
              <div className="mt-3">
                <Field
                  type="text"
                  name="isbn"
                  className="form-control text-center"
                  placeholder="ISBN"
                />
                <ErrorMessage
                  name="isbn"
                  component="div"
                  className="text-danger"
                ></ErrorMessage>
              </div>
              <div className="mt-3 ">
                {editUser ? (
                  <button type="submit" className="btn btn-primary btn1">
                    Update
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary btn1">
                    Submit
                  </button>
                )}
              </div>
            </Form>
          </Formik>
        </div>
        <div>
          <BooksList
            data={books}
            delete={Delete}
            edit={setEditUser}
          ></BooksList>
        </div>
      </div>
    </Container>
  );
}

export default Books;
