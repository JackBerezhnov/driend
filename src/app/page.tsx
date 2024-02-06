import Button from '@mui/material/Button';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import TextField from '@mui/material/TextField';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <Navbar />
      <h1>Driend</h1>
      <TextField id="outlined-basic" label="Put your text here" variant="outlined" className="bg-gray-200 text-white"/>
      <Footer />
    </div>
  );
}
