import { Box, Button, Grid2 as Grid, Paper, TextField, Typography } from "@mui/material";
import { usePetStore } from "../../stores/petStore"
import { useEffect, useState } from "react";
import { Pet, PetDefaultValues } from "../../models/Pet";
import { useUserStore } from "../../stores/userStore";


const CreatePetForm = () => {
  const {
   setPet
  } = usePetStore();

  const {
    userName,
    setUserName
  } = useUserStore();

  const [newPet, setNewPet] = useState(new PetDefaultValues());
  const [newTrainerName, setNewTrainerName] = useState('Your Name');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let formattedPet: Pet = {
      ...newPet,
      originalTrainer: newTrainerName
    }
    console.log(newPet);
    setPet(formattedPet);
    setUserName(newTrainerName);
  }

  useEffect(() =>{
    if(userName){
      setNewTrainerName(userName);
    }
  }, []);

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Box m={2}>
        <Typography variant="h4">New Pet Info</Typography>
      </Box>
      <Box component={Paper} p={2} m={2}>
        <Grid container spacing={2}>
          <Grid size={12} m={2}>
            <TextField id="trainer-name" label="Your Trainer Name" variant="standard" value={newTrainerName} 
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setNewTrainerName(event.target.value);
              }}
            />
          </Grid>

          <Grid size={12} m={2}>
            <TextField id="pet-name" label="Pet Name" variant="standard" value={newPet.name} 
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let tempPet: PetDefaultValues = {
                  ...newPet,
                  name: event.target.value
                };
                setNewPet(tempPet);
              }}
            />
          </Grid>
          
          <Grid spacing={2}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default CreatePetForm;