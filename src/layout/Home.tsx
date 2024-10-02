import { Grid2 as Grid } from "@mui/material";
import { usePetStore } from "../stores/petStore";
import CreatePetForm from "./forms/CreatePetForm";
import PetInfo from "./PetInfo";

const Home = () => {
  const {
    pet
  } = usePetStore();

  return (
    <Grid maxWidth='xl'>
      <h1>Terminally Online</h1>
      {pet ?
        <PetInfo /> 
        : <CreatePetForm />
      }
    </Grid>
  )
}

export default Home;