import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Config } from "../interfaces/Config";


export default function Indicator(config: Config) {
  return (
    <Paper
      sx={{
        px: 2,
        py: 5,
        m: 2,
        display: "flex",
        flexDirection: "column"
      }}
      elevation={5}
    >
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {config.title}
      </Typography>
      <Typography component="p" variant="h4">
        {config.value.toString()}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {config.subtitle}
      </Typography>
    </Paper>
  );
}
