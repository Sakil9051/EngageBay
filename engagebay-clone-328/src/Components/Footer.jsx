import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Divider,
  Button,
  ButtonGroup,
  IconButton,
  Grid,
  GridItem,
  Flex,
  HStack,
  Image,
  Heading,
  Input,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <Box
      w={"full"}
      bgImage={
        "url('https://cdn5.engagebay.com/new/assets/img/footer_bg.jpeg')"
      }
      bgRepeat={"repeat"}
      backgroundAttachment={"fixed"}
      bgSize={"90%"}
    >
        <Image
        w={"full"}
        src="https://cdn5.engagebay.com/new/assets/img/patterns/wave.svg"
      />
      <Box w={"full"}>
        <Box className="footer-top" w={"90%"} padding={"2rem"}>
          <Image
            w={"30%"}
            src="https://cdn5.engagebay.com/new/assets/img/cta-img.svg"
          />

          <Box>
            <Heading my={"10"} color={"white"}>
              Get Started
            </Heading>
            <Box className="footer-rigth">
              <Input
                w={"xs"}
                bgColor={"rgb(0 0 0 / 20%)"}
                focusBorderColor="lime"
                placeholder="Name"
                border={"none"}
                color={"#FFFFFF"}
                h={"4xs"}
                py={3}
              />

              <Input
                w={"xs"}
                focusBorderColor="lime"
                placeholder="Website URL"
                border={"none"}
                color={"white"}
                h={"4xs"}
                py={3}
                bgColor={"rgb(0 0 0 / 20%)"}
              />

              <Input
                w={"xs"}
                focusBorderColor="lime"
                placeholder="Username"
                border={"none"}
                color={"white"}
                h={"4xs"}
                bgColor={"rgb(0 0 0 / 20%)"}
                py={3}
              />

              <Input
                w={"xs"}
                focusBorderColor="lime"
                placeholder="Password"
                border={"none"}
                opacity={1}
                py={3}
                h={"4xs"}
                color={"white"}
                bgColor={"rgb(0 0 0 / 20%)"}
              />
              <ButtonGroup
                textAlign={"center"}
                gap="4"
                m={"auto"}
                size={["sm", "md"]}
              >
                <Button h={"5xm"} px={8} py={3} colorScheme="orange">
                  SIGNUP FOR FREE
                </Button>
                <Button
                  h={"5xm"}
                  px={8}
                  py={3}
                  colorScheme="gray"
                  color={"black"}
                >
                  SCHEDULE A CALL
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box color={"white"} mt={"60px"}>
        <Container as={Stack} maxW={"8xl"} py={5} px={12}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", lg: "1fr 1fr 1fr 1fr 1fr" }}
            spacing={7}
            color={"white"}
            justify={"space-between"}
            w={"95%"}
            m={"auto"}
            mb={10}
            fontSize={14}
          >
            <Stack
              align={"flex-start"}
              w={"full"}
              alignContent={"space-between"}
            >
              <Heading fontWeight={"500"} fontSize={17} mb={2}>
                Attract Web Visitors
              </Heading>
              <Link href={"#"}>Email Marketing</Link>
              <Link href={"#"}>Email Templates</Link>
              <Link href={"#"}>Email Broadcast</Link>
              <Link href={"#"}>Double Opt-In Email</Link>
              <Link href={"#"}>Autoresponder Email</Link>
              <Link href={"#"}>Email A/B Testing</Link>
              <Link href={"#"}>RSS-to-Email</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Heading fontWeight={"500"} fontSize={17} mb={2}>
                Integrations
              </Heading>
              <Link href={"#"}>Zapier Integration</Link>
              <Link href={"#"}>Xero Integration</Link>
              <Link href={"#"}> Mailgun Integration</Link>
              <Link href={"#"}>Mandrill Integration</Link>
              <Link href={"#"}> Postmark Integration</Link>
              <Link href={"#"}> Sendgrid Integration</Link>
              <Link href={"#"}>PieSync Integration</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Heading fontWeight={"500"} fontSize={17} mb={2}>
                Alternatives
              </Heading>
              <Link href={"#"}>Comparisons</Link>
              <Link href={"#"}>Infusionsoft Alternative</Link>
              <Link href={"#"}>Drip Alternative</Link>
              <Link href={"#"}>ActiveCampaign Alternative</Link>
              <Link href={"#"}>Insightly Alternative</Link>
              <Link href={"#"}>Insightly Alternative</Link>
              <Link href={"#"}>HubSpot Alternative</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Heading fontWeight={"500"} fontSize={17} mb={2}>
                Solutions
              </Heading>
              <Link href={"#"}>Wordpress Plugin</Link>
              <Link href={"#"}>Email Tracker</Link>
              <Link href={"#"}>Real Estate CRM</Link>
              <Link href={"#"}>CRM for Non-profits</Link>
              <Link href={"#"}>Call Center CRM</Link>
              <Link href={"#"}> Cloud CRM</Link>
              <Link href={"#"}>Developers</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Heading fontWeight={"500"} fontSize={17} mb={2}>
                Sales & Engage Prospects
              </Heading>
              <Link href={"#"}>Email Sequences</Link>
              <Link href={"#"}>Web Forms</Link>
              <Link href={"#"}>Landing Pages</Link>
              <Link href={"#"}>Marketing Automation</Link>
              <Link href={"#"}> Push Notifications</Link>
              <Link href={"#"}>Video Marketing Templates</Link>
              <Link href={"#"}>Influencers</Link>
            </Stack>
          </SimpleGrid>
          <Divider
            orientation="horizontal"
            borderColor={"#A0AEC0"}
            w={"full"}
            bg={"#A0AEC0"}
            borderWidth={"1px"}
          />
          <Box mt={"80px"} ml={2}>
            <Box className="footer-bottem" mt={4} gap={20}>
              <Stack spacing={6}>
                {/* <Image
                  w={"200px"}
                  h={"30px"}
                  src="https://cdn5.engagebay.com/new/assets/img/engagebay-logo-white.svg"
                /> */}
                <Text fontSize={"sm"}>
                  One platform for all your Marketing, Sales, and Support teams.
                </Text>
                <Flex direction={"row"}>
                  <ButtonGroup variant="ghost">
                    <IconButton icon={<FaFacebook fontSize="1.25rem" />} />
                    <IconButton icon={<FaLinkedin fontSize="1.25rem" />} />
                    <IconButton icon={<FaTwitter fontSize="1.25rem" />} />

                    <IconButton icon={<FaYoutube fontSize="1.25rem" />} />
                    <IconButton icon={<FaInstagram fontSize="1.25rem" />} />
                  </ButtonGroup>
                  <HStack ml={3} fontSize={12}>
                    <Link href={"#"}>Legal</Link>
                    <Text>|</Text>
                    <Link href={"#"}> Terms of Service</Link>
                    <Text>|</Text>
                    <Link href={"#"}>Privacy Policy</Link>
                  </HStack>
                </Flex>
              </Stack>
              <Stack fontSize={13}>
                <Text>
                  EngageBay Inc.,1007 North Orange Street 4th Floor #180
                  Wilmington, DE 19801
                </Text>
                <HStack>
                  <Link href={"#"}>support@engagebay.com </Link>
                  <Text>+1.(877).509.3570</Text>
                </HStack>
                <Text>© EngageBay 2022. All Rights Reserved.</Text>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
