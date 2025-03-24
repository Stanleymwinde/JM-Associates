import { MainNav } from "@/components/ui/navbar";
import { Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <MainNav />
      <Text textAlign={"center"} alignContent={"center"} fontSize={"3xl"}>
        Welcome Smwinde
      </Text>
    </>
  );
}
