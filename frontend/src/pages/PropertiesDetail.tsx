import { Place, Star } from "@mui/icons-material"
import { Box, Stack, Typography } from "@mui/material"
import { useGetIdentity, useShow } from "@refinedev/core"
import React from "react"
import { useNavigate } from "react-router-dom"

function PropertiesDetail() {
  const navigate = useNavigate()
  const { data: user } = useGetIdentity<any>()
  const { queryResult } = useShow<any>()

  const { data, isLoading, isError } = queryResult
  const Properties = data?.data ?? []
  if (isLoading) return <Typography>isLoading...</Typography>
  if (isError) return <Typography>isError...</Typography>

  return (
    <div>
      <Box
        borderRadius={"15px"}
        padding={"20px"}
        bgcolor="#fcfcfc"
        width="fit-content"
      >
        <Typography fontSize={25} fontWeight={500} color={"#11142d"}>
          Detail
        </Typography>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", lg: "row" }}
          gap={10}
          mt="10px"
        >
          <Box flex={1} maxWidth={780}>
            <img
              src={Properties.photo}
              width={700}
              height={543}
              style={{
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <Box mt={"15px"}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
                alignItems={"center"}
              >
                <Typography
                  fontSize={18}
                  fontWeight={500}
                  color={"#11142d"}
                  textTransform={"capitalize"}
                >
                  {Properties.propertyType}
                </Typography>
                <Box>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} sx={{ color: "#f2c94c" }} />
                  ))}
                </Box>
              </Stack>

              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
                alignItems={"center"}
              >
                <Box>
                  <Typography
                    fontSize={22}
                    fontWeight={600}
                    color={"#11142d"}
                    mt={"10px"}
                  >
                    {Properties.title}
                  </Typography>

                  <Stack
                    mt={0.5}
                    direction={"row"}
                    alignItems={"centrt"}
                    gap={0.5}
                  >
                    <Place sx={{ color: "#808191" }} />
                    <Typography fontSize={14} color={"#11142d"}>
                      {Properties.location}
                    </Typography>
                  </Stack>
                </Box>

                <Box>
                  <Typography
                    fontSize={16}
                    fontWeight={600}
                    color={"#11142d"}
                    mt={"10px"}
                  >
                    Price
                  </Typography>

                  <Stack direction={"row"} alignItems={"flex-end"} gap={1}>
                    <Typography
                      fontSize={25}
                      fontWeight={600}
                      color={"#475BE8"}
                    >
                      ${Properties.price}
                    </Typography>
                    <Typography fontSize={14} color={"#808191"} mb={0.5}>
                      for one day
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default PropertiesDetail
