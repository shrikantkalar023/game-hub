import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const gameDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading marginY={5} fontSize="5xl" as="h1">
        {game.name}
      </Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};

export default gameDetailPage;
