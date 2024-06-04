import React from "react";

function BooksList(props) {
  const { data } = props;
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr className="text-center">
            <th>S.no</th>
            <th>Title</th>
            <th>Author</th>
            <th>Published</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((book, index) => (
                <tr key={book.id}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publishedDate}</td>
                  <td>{book.isbn}</td>
                  <td className="d-md-flex gap-2">
                    <button
                      className="btn btn-secondary px-4"
                      onClick={() => props.edit(book)}
                    >
                      {" "}
                      Edit
                    </button>
                    <button
                      className="btn btn-danger mt-2  mt-md-0 "
                      onClick={() => props.delete(book.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : "No books available"}
        </tbody>
      </table>
    </div>
  );
}

export default BooksList;