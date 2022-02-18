import { InputStyled } from "../common/components/Input";
import Layout from "../common/layout/Index";

function Home () {
  return (
    <Layout title="Home">
      <h2>Insira seu nome</h2>
      <InputStyled name="name" />
    </Layout>
  );
}

export default Home;