import React from "react"
import CoffeeIcon from "@mui/icons-material/Coffee"
import { Box, Typography } from "@mui/material"
function Title({ collapsed }: any) {
  return (
    <Box display={"flex"}>
      <CoffeeIcon sx={{ marginRight: collapsed ? 0 : 2 }} />
      <Typography
        fontSize={14}
        fontWeight={700}
        display={collapsed ? "none" : "block"}
      >
        Test
      </Typography>
    </Box>
  )
}

export default Title
