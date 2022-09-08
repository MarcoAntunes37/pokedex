import type { NextPage } from 'next'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {useQuery} from '@tanstack/react-query';
import getPokemonListData from '../../utils/getPokemonListData';
import {useState} from 'react'
import Footer from '../../components/Footer';
import PokemonViewCard from '../../components/PokemonCardView';
import {Pagination, Skeleton} from '@mui/material';
import Navbar from '../../components/NavBar';

const Pokedex: NextPage = () => {
  const PER_PAGE = 21
  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(0)
  
  const {data, isLoading} = useQuery(['pokemon-list', page], 
  () => getPokemonListData(PER_PAGE, offset), { keepPreviousData: true })
  
  const handlePageChange = (e: any, page: any) => {
    const offset = (page-1) * PER_PAGE
    setPage(page)
    setOffset(offset)
  } 

  return (
      <>
      <Navbar/>      
        <Box sx={{marginTop: 4}}>
          <Container>
            <Pagination sx={{
                display: 'flex', 
                justifyContent: 'center'
              }}
              onChange={handlePageChange} 
              count={55}
              size="large" 
              page={page} 
              variant="outlined" 
              shape="rounded"
            />
          </Container>
          <Container sx={{ py: 5}}>          
            <Grid 
              container 
              spacing={4}
            >
            {isLoading && !data 
            ? <Skeleton variant="rectangular" width={360} height={580}/>
            : null}
              {data?.pokemons.map((pokemon: any, index: number) => {
                return(
                  <PokemonViewCard 
                    key={index+pokemon.name} 
                    pokemon={pokemon}
                  />                  
                )
              })}
            </Grid>
          </Container>
        </Box>
        <Container>
          <Pagination sx={{
              display: 'flex', 
              justifyContent: 'center'
            }}
            onChange={handlePageChange} 
            count={55}
            size="large" 
            page={page} 
            variant="outlined" 
            shape="rounded"
          />
        </Container>
        <Footer/>
      </>
  );
}


export default Pokedex
