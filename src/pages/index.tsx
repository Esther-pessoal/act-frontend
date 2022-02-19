import { InputStyled } from "../common/components/Input";
import InputContext from "../common/contexts/InputContext";
import Layout from "../common/layout/Index";
import { FormContainer } from "../Profile/Container/FormContainer";

function Home () {
  return (
    <Layout title="Home">
      <InputContext>
      <FormContainer />
      </InputContext>
    </Layout>
  );
}

export default Home;