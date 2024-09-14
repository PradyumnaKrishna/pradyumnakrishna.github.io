import Container from '@/app/_components/container';
import { EXAMPLE_PATH } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-neutral-200 text-center">
      <Container>
        <p className="text-sm font-mono font-light tracking-widest uppercase p-2 mx-auto">
          Designed and Developed by Pradyumna Krishna &copy; 2024
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
