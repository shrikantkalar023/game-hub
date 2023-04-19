import {
  HStack,
  Image,
  Button,
  List,
  ListItem,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  // TODO: replace spinner with skeletons.
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((g) => (
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(g.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                objectFit="cover"
                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                onClick={() => onSelectGenre(g)}
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
