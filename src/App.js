
import {CssBaseline,Grid, List} from '@material-ui/core'
import Header from './components/Header/Header'
import  PlacesList  from './components/PlacesList/PlacesList'
import Map from './components/Map/Map'
function App() {
  return (
    <>
     <CssBaseline />
     <Header/>
     <Grid container spacing={3} style={{width:'100%'}}>
       <Grid item xs={12} md={4}>
         <PlacesList />
       </Grid>
       <Grid item xs={12} md={8} >
         <Map />
       </Grid>
     </Grid>
    </>
  );
}

export default App;
