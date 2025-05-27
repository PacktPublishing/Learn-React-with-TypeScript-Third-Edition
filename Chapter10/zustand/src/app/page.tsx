import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { Content } from '@/components/Content';
export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Content />
      </Main>
    </>
  );
}
