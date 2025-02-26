import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from '@mui/icons-material/Menu';

import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <Stack spacing={2}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container className="main">
        <div className="section-1">
          <Container
            sx={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "#ffffff3d",
            }}
          >
            <Stack
              className="profile-1"
              spacing={2}
              alignItems="center"
              sx={{
                margin: "16px 0px",
              }}
            >
              <Avatar
                src="Screenshot 2025-02-26 at 11.32.22 AM.png"
                sx={{ width: 200, height: 200 }}
              />
              <Typography variant="h4">DASHBOARD</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo ipsa enim deserunt illum laborum esse dicta ut nisi!
                Perferendis, sint. Officia odit dolor quaerat. Quos a itaque sed
                officia porro.
              </Typography>
              <Stack direction="row" spacing={1}>
                <Button sx={{ flex: 1 }} variant="outlined">
                  Click me!
                </Button>
                <Button sx={{ flex: 1 }} variant="contained">
                  Click me!
                </Button>
              </Stack>
            </Stack>
          </Container>
          <div className="profile-2"></div>
        </div>
        <div className="section-2">section 2</div>
      </Container>
    </Stack>
  );
}
