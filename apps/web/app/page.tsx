import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <Container>
      <Stack spacing={3}>
        <h1>What can I help with?</h1>
        {/* <h3 className="headline">anything</h3> */}
        {/* <input type="date" placeholder="Message ChatGPT"></input> */}
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <button>click me!</button>
        <Button variant="contained">Hello World</Button>
      </Stack>
    </Container>
  );
}
