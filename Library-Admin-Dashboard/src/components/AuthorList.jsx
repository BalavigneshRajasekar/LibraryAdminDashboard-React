import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

function AuthorList(props) {
  const { author } = props;
  return (
    <div className="mt-5 d-flex flex-wrap gap-5 justify-content-center">
      {author.length > 0 ? (
        author.map((authors, index) => (
          <Card sx={{ width: 400 }} key={index}>
            <CardContent>
              <Typography variant="h6" color={"GrayText"}>
                Author Name : {authors.name}
              </Typography>
              <Typography variant="h6" color={"GrayText"}>
                DOB :{authors.date}
              </Typography>
              <Typography variant="h6" color={"GrayText"}>
                Bio : {authors.biography}
              </Typography>
              <CardActions>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => props.edit(authors)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => props.delete(authors.id)}
                >
                  Delete
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="mt-5">
          <h3 className="text-center text-secondary">
            Currently No Author Details
          </h3>
        </div>
      )}
    </div>
  );
}

export default AuthorList;
