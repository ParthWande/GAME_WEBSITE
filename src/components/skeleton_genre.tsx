import {
  Box,
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const SkeletonGenre = () => {
  return (
    <Box>
      <List>
        <Skeleton height={'25px'}/>
        <ListItem >
          <HStack>
            <SkeletonText/>
          </HStack>
        </ListItem>
      </List>
    </Box>
  );
};

export default SkeletonGenre;
