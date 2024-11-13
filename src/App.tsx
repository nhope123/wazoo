import Box from "@mui/material/Box"
import { SxProps, Theme } from "@mui/material/styles"

const rootSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  height: "100vh",
  width: "100vw",

};

const App = () => {

  return (
    <Box sx={rootSx}>
      App Placeholder
    </Box>
  )
}

export default App
