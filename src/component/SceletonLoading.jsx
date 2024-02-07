import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const SceletonLoading = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        p: 8,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rectangular"
        width={300}
        height={150}
      />
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rectangular"
        width={300}
        height={150}
      />
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rectangular"
        width={300}
        height={150}
      />
    </Box>
  );
};

export default SceletonLoading;
