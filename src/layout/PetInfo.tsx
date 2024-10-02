import { Grid2 as Grid } from "@mui/material";
import { usePetStore } from "../stores/petStore";
import { useUserStore } from "../stores/userStore";

const PetInfo = () => {
  const {
    pet
  } = usePetStore();

  const { userName } = useUserStore();

  return (
    <Grid maxWidth='xl'>
      <h2>Trainer Details</h2>
      <p>{userName}</p>
      <h2>Pet Details</h2>
      <p>{pet?.name}</p>
    </Grid>
  )
}

export default PetInfo;