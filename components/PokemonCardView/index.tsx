import * as React from 'react';
import { styled, Card, CardHeader, CardMedia, CardContent, Collapse, IconButton, Typography, Box, Grid,
  LinearProgress, IconButtonProps, CardActions} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import getPokemonImage from '../../utils/getPokemonImage';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const PokemonViewCard: React.FC<any> = ({pokemon}) => {
  
  const [expanded, setExpanded] = React.useState(false);
  const id = pokemon.id
  getPokemonImage(id)
  const name = capitalizeFirstLetter(pokemon.name)  
  
  const types = pokemon.types.map((type: any) => {
    const typeName = capitalizeFirstLetter(type.type.name)    
    type.type.name = typeName
    return type
  })

  const abilities = pokemon.abilities.map((ability: any) => {
    const abilityName = capitalizeFirstLetter(ability.ability.name) 
    ability.ability.name = abilityName
    return ability
  })

  const stats = pokemon.stats.map((stat: any, index: any) => { 
    const statName = capitalizeFirstLetter(stat.stat.name)    
    const colors = ["error", "warning", "info", "secondary", "primary", "success"]
    stat.stat.name = statName
    stat = {stat, color: colors[index]}
    return {stat}
  })

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <Grid item 
      key={1} 
      xs={12} 
      sm={6} 
      md={6} 
      lg={4}
    >
      <Card sx={{}}>
        <CardHeader        
          title={name}
          subheader={
              types.map((type: any, index: number) => {
                const name = type.type.name
                const tname = name.toLowerCase()
                return (
                  <>
                    <span key={index+name} id={`type-${index+1}`}
                      className={tname}
                    >
                      {name}
                    </span>
                  </>
                )
              })
            }
        />
        <CardMedia 
          id={`pokemon-image-${id}`}
          component="img"
          alt={`${name} image`}
        />
        <CardContent>
          <Typography 
            variant="body2" 
            color="text.secondary"
          >
          {abilities.map((ability:any, index:number) => {
            const name = ability.ability.name
            return(
              <span key={index+name}>
                {name+' '}
              </span>
            )
          })}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
          >
            Weigth: {`${pokemon.weight}`} | Heigth: {`${pokemon.height}`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>        
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse 
          in={expanded} 
          timeout="auto" 
          unmountOnExit
        >
          <CardContent>
            <Box>
            {stats.map((stat: any, index: number) => {
                const name = stat.stat.stat.stat.name
                const base = stat.stat.stat.base_stat
                const color = stat.stat.color
                return (
                  <Box key={index+name}>{name}{' '}{base}{' '}
                    <LinearProgress 
                      variant="determinate" 
                      value={Math.round((100 / 150) * base)}
                      color={color}
                    />                    
                  </Box>
                )
              })}
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

export default PokemonViewCard