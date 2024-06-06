import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <MenuBookIcon sx={{ marginRight: 2 }}></MenuBookIcon>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Library Dashboard
            </Typography>
            <Button color="inherit" onClick={() => navigate("/Books")}>
              Books
            </Button>
            <Button color="inherit" onClick={() => navigate("/Author")}>
              Authors
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Nav;
