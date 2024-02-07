import Button from '@mui/material/Button';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import TextField from '@mui/material/TextField';

async function getData() {
  const res = await fetch("https://catfact.ninja/breeds");

  if(!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="flex flex-col justify-center items-center text-center bg-gray-200 h-screen">
      <Navbar />
      <h1 className="text-black">Driend</h1>
      <TextField id="outlined-basic" label="Put your text here" variant="outlined" className="bg-gray-200 text-white"/>
      <Button variant="contained">Post</Button>
      <p>{data.data[0].breed}</p>
      <Footer />
    </div>
  );
}
