import { Grid2 as Grid, List, ListItem, ListItemText } from "@mui/material";
import { usePetStore } from "../stores/petStore";
import { useUserStore } from "../stores/userStore";

const PetInfo = () => {
  const {
    pet
  } = usePetStore();


  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', }}>
      <ListItem>
        <ListItemText primary="Name" secondary={pet?.name} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Age" secondary={pet?.status.age} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Weight" secondary={pet?.status.weight} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Strength" secondary={pet?.status.strength} />
      </ListItem>
    </List>
  )
}

export default PetInfo;