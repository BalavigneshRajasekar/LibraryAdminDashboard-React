import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import "../App.css";
import BooksList from "./BooksList";
import { Container, Button } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import { useNavigate } from "react-router-dom";
function Books() {
  const [books, setBooks] = useState([]); // Hold all the books details
  const [id, setId] = useState(0); // help us to add the id for each books
  const [editUser, setEditUser] = useState(null); //Contain the book which is going to edit
  const navigate = useNavigate();
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
  //Validation for each fields
  const validation = yup.object().shape({
    title: yup.string().required("* Title is required"),
    author: yup.string().required("* Author is required"),
    publishedDate: yup
      .date()
      .max(
        new Date(Date.now()),
        "* Published Date Must not greater then todays date"
      )
      .required("* Published Date is required"),
    isbn: yup
      .string()
      .min(12, "* min 12 Char")
      .max(12, "* max 12 Char")

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
        return { ...values, ["id"]: values.id };
      }
      return book;
    });
    setBooks(editedBook);
    setEditUser(null);
  };

  return (
    <Container fixed>
      <Button
        onClick={() => navigate("/")}
        className="mt-3"
        variant="outlined"
        startIcon={<WestIcon></WestIcon>}
      >
        Go back
      </Button>
      <h1 className="fw-bold bg-success rounded-2 text-center mt-3">
        Books Details
      </h1>
      <div className="d-flex justify-content-center gap-5 flex-wrap mt-5">
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
        <div className="mt-3">
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
