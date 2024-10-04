import { Button, Grid2 as Grid } from "@mui/material";
import { usePetStore } from "../stores/petStore";
import { useUserStore } from "../stores/userStore";

const GameOptions = () => {
  const {
    pet
  } = usePetStore();

  const {userName} = useUserStore();


  return (
    <>
      <Grid>
        <Button variant="contained">Feed</Button>
      </Grid>
      <Grid>
        <Button variant="contained">Clean</Button>
      </Grid>
      <Grid>
        <Button variant="contained">Lights</Button>
      </Grid>
    </>


  )
}

export default GameOptions;