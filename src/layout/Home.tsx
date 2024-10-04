import { Grid2 as Grid } from "@mui/material";
import { usePetStore } from "../stores/petStore";
import CreatePetForm from "./forms/CreatePetForm";
import GameScreen from "./GameScreen";

const Home = () => {
  const {
    pet
  } = usePetStore();

  return (
    <Grid maxWidth='xl'>
      <h1>Terminally Online</h1>
      {pet ?
        <GameScreen /> 
        : <CreatePetForm />
      }
    </Grid>
  )
}

export default Home;