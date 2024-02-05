import Button from '@mui/material/Button';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
      <Button variant="outlined">Outlined</Button>
      <Footer />
    </div>
  );
}
