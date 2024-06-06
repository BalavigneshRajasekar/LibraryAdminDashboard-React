import { Button, Container, Paper, TextField, colors } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import AuthorList from "./AuthorList";

function Author() {
  const [authors, setAuthors] = useState([]);
  const [id, setId] = useState(0);
  const [editAuthor, setEditAuthor] = useState(null);

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      date: "",
      biography: "",
    },

    validationSchema: yup.object({
      name: yup.string().required("* name required"),
      date: yup
        .date()
        .max(new Date(Date.now()), "DOB must not greater then todays date")
        .required("* DOB required"),
      biography: yup.string().required("* biography required"),
    }),
    onSubmit: (values) => {
      //This if block handle the Update Authors
      if (editAuthor) {
        const editedData = authors.map((author) => {
          if (author.id == editAuthor.id) {
            return { ...values, ["id"]: editAuthor.id };
          }
          return author;
        });

        setAuthors(editedData);
        setEditAuthor(null);
        values.name = "";
        values.date = "";
        values.biography = "";
      }
      //This else Block handle the submit
      else {
        let data = { ...values, ["id"]: id };
        setId(authors.length + 1);
        setAuthors([...authors, data]);
        values.name = "";
        values.date = "";
        values.biography = "";
      }
    },
  });

  const onEdit = (authors) => {
    setEditAuthor(authors);

    formik.setValues({
      name: authors.name,
      date: authors.date,
      biography: authors.biography,
    });
  };
  const onDelete = (id) => {
    setAuthors(authors.filter((author) => author.id !== id));
    setEditAuthor(null);
  };

  return (
    <Container fixed>
      <h1 className="fw-bold bg-success rounded-2 text-center mt-3">
        Author Details
      </h1>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            sx={{ marginTop: 2 }}
            fullWidth
            id="name"
            name="name"
            label="Author Name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            sx={{ marginTop: 2 }}
            fullWidth
            id="date"
            name="date"
            type="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
          />

          <TextField
            sx={{ marginTop: 2 }}
            fullWidth
            id="Bio"
            name="biography"
            label="Bio_graphy"
            type="text"
            multiline
            rows={4}
            value={formik.values.biography}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.biography && Boolean(formik.errors.biography)}
            helperText={formik.touched.biography && formik.errors.biography}
          />
          {editAuthor ? (
            <Button
              sx={{ marginTop: 2 }}
              color="secondary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Update
            </Button>
          ) : (
            <Button
              sx={{ marginTop: 2 }}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Submit
            </Button>
          )}
        </form>
      </div>
      <div>
        <AuthorList
          author={authors}
          delete={onDelete}
          edit={onEdit}
        ></AuthorList>
      </div>
    </Container>
  );
}

export default Author;
