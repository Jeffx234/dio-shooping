import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, Button } from '@material-ui/core/'
import Cart from './Cart'
import Background from './Background.svg'

const Header = () => {
  return (
    <Grid
      container
      height="300px"
      spacing={20}
      direction="row"
      justify="space-between"
      alignItems="center"
      xs={12}
    >
      <Typography variant="h3">Dio Shopping</Typography>
      <Link to="/">
        <Button color="primary" variant="contained">
          Home
        </Button>
      </Link>
      <Link to="/contato">
        <Button color="primary" variant="contained">
          Contato
        </Button>
      </Link>
      <Cart />
    </Grid>
  )
}

export default Header
