import { Box, Button, Flex, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
let links = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/about",
    label: "About",
  },

  {
    to: "/contact",
    label: "Contact",
  },

  {
    to: "/Login",
    label: "Login",
  },
];

export function Navbar() {
  return (
    <Box>
      <Box pos="fixed" top="1rem" right="1rem" align="center">
        <Flex display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              <Button variant="ghost">{link.label}</Button>
            </Link>
          ))}
        </Flex>
        <IconButton
          icon={<HamburgerIcon />}
          display={{ base: "block", md: "none" }}
        ></IconButton>
      </Box>
   
          <Flex justify="flex-end">


      <Flex direction='column' align="center">
          {links.map((link) => (
            <Link  key={link.to} to={link.to}>
              <Button variant="ghost">{link.label}</Button>
            </Link>
          ))}
        </Flex>
        </Flex>
    </Box>
  );
}
