import {Box} from "@chakra-ui/react";
import Header from "../components/header";
import api from "../services/api";
import Body from "../components/body";

export default function Home({featuredClientes}) {
  return (
    <Box>
      <Header />
      <Body featuredClientes={featuredClientes}/>
    </Box>
  );
}

export async function getServerSideProps(){
  const { data } = await api.get("/clients")

  return {
    props: {
      featuredClientes: data
    }
  }
}
