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
    <div>
      {author.length > 0
        ? author.map((authors, index) => (
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
        : "noauthors"}
    </div>
  );
}

export default AuthorList;
