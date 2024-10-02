import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box>
      <Card>
        <CardMedia>
          <CardContent>
            <Box>
              <Typography>Whoops!</Typography>
            </Box>
            <Box>
              <Typography>We couldn't find the page you're looking for</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" component={Link} to="/">Home</Button>
          </CardActions>
        </CardMedia>
      </Card>
    </Box>
  )
}

export default NotFound;