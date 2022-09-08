import {Toolbar, Typography, AppBar, Stack, Divider, Container} from '@mui/material';
import Logo from '../../public/Logo.svg'
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar(){  
    return(
        <AppBar position="relative" sx={{p: 1}}>
          <Toolbar >
            <Typography 
              variant="h6" 
              color="inherit" 
            >
              <Image src={Logo} height={60} width={120} alt='logo'/>
            </Typography>
            <Stack 
              direction='row' 
              spacing={2} 
              divider={<Divider orientation="vertical" flexItem />}
            >
              <span></span>
              <Link href={'/'}>Home</Link>
              <Link href={'/pokedex'}>Pokedex</Link>
            </Stack>           
          </Toolbar>            
        </AppBar>
      )
}