import { Box, Stack, useTheme } from "@mui/material";
import BadgeAvatar from "./BadgeAvatar";
import NavMenu from "./NavMenu";
import Title from "./Title";

function MainAppBar() {
  const theme = useTheme();

  return (
    <Box>
      <Stack direction="row-reverse" spacing="2.3rem" alignItems="center">
        <BadgeAvatar />
        <NavMenu />
      </Stack>
    </Box>
  );
}

export default MainAppBar;
