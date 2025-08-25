import { useList } from "@refinedev/core"
import React from "react"
import { PieChart, PropertyReferral, TotalRevenue } from "../components"
import { Box, Stack, Typography } from "@mui/material"

const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color={"#11142D"}>
        DashBoard
      </Typography>
      <Box mt={"20px"} display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for sale"
          value={30}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />
        <PieChart
          title="Properties for rent"
          value={400}
          series={[60, 40]}
          colors={["#275be8", "#c4e8ef"]}
        />
        <PieChart
          title="Total Customers"
          value={720}
          series={[10, 90]}
          colors={["#275be8", "#c4e8ef"]}
        />
        <PieChart
          title="Properties For Cities"
          value={550}
          series={[50, 50]}
          colors={["#275be8", "#c4e8ef"]}
        />
      </Box>
      <Stack
        mt={"25px"}
        width={"100%"}
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferral />
      </Stack>
    </Box>
  )
}

export default home
