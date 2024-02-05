import Button from '@mui/material/Button';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import TextField from '@mui/material/TextField';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Driend</h1>
      <Button variant="outlined">Outlined</Button>
      <TextField id="outlined-basic" label="Put your text here" variant="outlined"/>
      <Footer />
    </div>
  );
}
