import type { NextPage } from 'next'
import Image from 'next/image'
import Navbar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import Logo from '../public/Logo.svg'
import { Grid, Typography } from '@mui/material'
import Footer from '../components/Footer'
import { Box, Container } from '@mui/system'

const Home: NextPage = () => {
  return (
    <>
      <Navbar/>
      <div className={styles.container}>  
        <Grid className={styles.grid}> 
          <Container sx={{display: 'block'}}>
          <Typography variant='h3' className={styles.welcomeText}>Welcome to Pokedex App</Typography> 
            <Image className='logo' alt='logo' src={Logo} width={50} height={30} layout='responsive'/>
          </Container>
        </Grid>
      </div>
      <Footer/>
    </>
  )
}

export default Home
