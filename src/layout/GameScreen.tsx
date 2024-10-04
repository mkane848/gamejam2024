import { Grid2 as Grid, Typography } from "@mui/material";
import { usePetStore } from "../stores/petStore";
import PetInfo from "./PetInfo";
import GameOptions from "./GameOptions";

const GameScreen = () => {
  const {
    pet
  } = usePetStore();


  return (
    <Grid maxWidth='xl'>
      <Grid container direction="row" spacing={2} sx={{ justifyContent: "center", alignItems: "center",}}>
        <Grid>
          <PetInfo />
        </Grid>

        <Grid>
          <p>Pet icons and "screen" stuff</p>
        </Grid>
      </Grid>
      <Grid container direction="column" spacing={2} sx={{ justifyContent: "center", alignItems: "center",}}>
        <Grid size={12}>
          <Typography variant="h4">Options</Typography>
        </Grid>
        <Grid container size={12}>
          <GameOptions />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default GameScreen;