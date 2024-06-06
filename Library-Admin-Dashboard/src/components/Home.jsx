import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonIcon from "@mui/icons-material/Person";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="div d-flex gap-3 h-25">
      <Button variant="contained" onClick={() => navigate("/Books")}>
        Manage Books
        <MenuBookIcon sx={{ fontSize: 50, marginLeft: 2 }}></MenuBookIcon>
      </Button>
      <Button variant="contained" onClick={() => navigate("/Author")}>
        Manage Authors
        <PersonIcon sx={{ fontSize: 50, marginLeft: 2 }}></PersonIcon>
      </Button>
    </div>
  );
}

export default Home;
