import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { PATHS } from "../utils";
import { logout } from "../utils/reusable";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Customer Posts
        </Typography>
        <Button color="inherit" onClick={() => navigate(PATHS.frontPage)}>
          Home
        </Button>
        <Button color="inherit" onClick={() => navigate(PATHS.posts)}>
          Posts
        </Button>
        {/* Logout Button */}
        <Button color="inherit" onClick={() => logout(navigate)}>
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
