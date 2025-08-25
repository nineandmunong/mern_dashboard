import React from "react"
import { CustomButton, PropertyCard } from "../components"
import { Add } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import { useTable } from "@refinedev/core"
import { useNavigate } from "react-router-dom"

const AllProperties = () => {
  const navigate = useNavigate()

  const {
    tableQueryResult: { data, isLoading, isError },
    current,
    setCurrent,
    pageCount,
    sorter,
    setSorter,
    filters,
    setFilters,
  } = useTable()

  const currentPrice = sorter.find((item) => item.field === "price")?.order

  const AllProperties = data?.data ?? []
  if (isLoading) return <Typography>isLoading...</Typography>
  if (isError) return <Typography>isError...</Typography>

  return (
    <Box>
      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {AllProperties.map((property) => (
          <PropertyCard
            key={property._id}
            id={property._id}
            title={property.title}
            location={property.location}
            price={property.price}
            photo={property.photo}
          />
        ))}
      </Box>
    </Box>
  )
}

export default AllProperties
