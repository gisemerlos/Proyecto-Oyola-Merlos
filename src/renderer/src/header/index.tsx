import { Badge, AppBar, Box, Toolbar, Typography, styled, alpha, InputBase } from '@mui/material'
import { ReactNode } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Compra from './compra'



//import MailIcon from '@mui/icons-material/Mail';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    marginLeft: "10px",
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

// export function BasicModal() {

const Header = ({ seleccionados, filtrarPor }: { seleccionados: number, filtrarPor: (string) => void }): ReactNode => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ferreteria Tomas
          </Typography>
          <Search onChange={(event: React.FormEvent<HTMLDivElement>) => filtrarPor(event.target.value)
          } sx={{
            marginRight: "20px"
          }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="buscar"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton sx={{ color: "#fff" }}>
            <AddIcon>
            </AddIcon>
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <Badge badgeContent={seleccionados} color="secondary">

              <ShoppingCartIcon onClick={handleOpen}>
              </ShoppingCartIcon>

            </Badge>
          </IconButton>

          <Modal
            open={open}
            onClose={handleClose}

          >
            <Compra/>

          </Modal>

        </Toolbar>
      </AppBar>
    </Box>
  )

}

export default Header
