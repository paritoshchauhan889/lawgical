import * as React from "react";
import { CssBaseline } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Image from "next/image";
import DropdownMenu from "./DropDownMenu";
import SideMenu from "./SideMenu";
import MenuItem from "./MenuItem";
import Grid from "@mui/material/Grid";
import Link from "next/link";

import DrawerAccordionList from "../components/DrawerAccordionList";
import navbarItemList from "@/data/navItemList";
const drawerWidth = 240;

//hooks
import useWindowSize from "../hooks/useWindowSize";

function Navbar(props) {
  const windowSize = useWindowSize();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawerComponent = (
    <Box sx={{ textAlign: "center" }}>
      <Image
        src={"/lawgical-logo.png"}
        width={130}
        height={37}
        alt="lawgical logo"
      />
      <Divider />
      <List>
        {navbarItemList.map(
          (item, index) =>
            (item?.list.length > 0 && (
              <React.Fragment key={index.toString()}>
                <DrawerAccordionList item={item} index={index} />
              </React.Fragment>
            )) || (
              <ListItem key={index}>
                <Link
                  href={item.link}
                  style={{
                    textDecoration: "none",
                    color: "#000",
                  }}
                >
                  {item.title}
                </Link>
              </ListItem>
            )
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="static"
        sx={{
          boxShadow: 2,
          backgroundColor: "white",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <Image
                src={"/lawgical-logo.png"}
                width={windowSize.width > 700 ? 270 : 170}
                height={67}
                alt="lawgical logo"
              />
            </Link>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setMobileOpen(true)}
              sx={{ ml: "80px", display: { md: "none" } }}
            >
              <MenuIcon sx={{ color: "#000" }} />
            </IconButton>
          </Box>
          {/* Start of container  */}
          <Grid
            container
            justifyContent={"right"}
            marginRight={"-8px"}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "right",
                px: 2,
              }}
            >
              <Box>
                <Link href="/" style={{ textDecoration: "none" }}>
                  <Button
                    variant="text"
                    size="large"
                    sx={{
                      fontWeight: 600,
                      color: "#252E4E",
                    }}
                  >
                    HOME
                  </Button>
                </Link>
              </Box>
              <Box>
                <Link href="/about-us" style={{ textDecoration: "none" }}>
                  <Button
                    size="large"
                    variant="text"
                    sx={{
                      fontWeight: "bold",
                      color: "#252E4E",
                    }}
                  >
                    ABOUT US
                  </Button>
                </Link>
              </Box>
              <Box>
                <DropdownMenu text="Practice Area">
                  <MenuItem
                    text="Sexual Harassment Laws"
                    link="/practice-area/sexual-harassment"
                  />
                  <SideMenu text="Corporate Laws">
                    <MenuItem
                      text="Commercial Agreements"
                      link="/practice-area/commercial-agreement"
                    />
                    <MenuItem
                      text="M&A Private Equity"
                      link="/practice-area/m&a-private-equity"
                    />
                    <MenuItem text="Start Up" link="/practice-area/start-up" />
                    <MenuItem
                      text="Commercial Matters"
                      link="/practice-area/corporate-commercial-matters"
                    />
                    <MenuItem
                      text="White Collar Crime"
                      link="/practice-area/white-collar-crime"
                    />
                  </SideMenu>
                  <SideMenu
                    text="Employment & Labour Law"
                    link="/practice-area/employment-labour-law"
                  >
                    <MenuItem
                      text="Regulatory Compliances"
                      link="/practice-area/regulatory-affairs"
                    />
                    <MenuItem
                      text="HR Advisory"
                      link="/practice-area/HR-advisory"
                    />
                  </SideMenu>
                  <MenuItem
                    text="Intellectual Property"
                    link="/practice-area/intellectual-property"
                  />
                  <MenuItem
                    text="Real Estate"
                    link="/practice-area/real-estate"
                  />
                  <MenuItem
                    text="Litigation"
                    link="/practice-area/litigation"
                  />
                  <MenuItem
                    text="Dispute Resolution & Arbitration"
                    link="/practice-area/dispute-resolution-arbitration"
                  />
                  <MenuItem
                    text="Family Law /Divorce Matters"
                    link="/practice-area/family-law"
                  />
                  <MenuItem
                    text="Immigration, Citizenship & Residency"
                    link="/practice-area/immigration-citizenship-residency"
                  />
                  <MenuItem
                    text="Social Sector /NGOs"
                    link="/practice-area/social-sector"
                  />
                </DropdownMenu>
              </Box>
              <Box>
                <DropdownMenu text="OUR PEOPLE">
                  <MenuItem
                    text="Nidhi Mathur"
                    link="/our-people/nidhi-mathur"
                  />
                  <MenuItem
                    text="Vikrant Yadav"
                    link="/our-people/vikrant-yadav"
                  />
                  <MenuItem text="Ritu Mathur" link="/our-people/ritu-mathur" />
                </DropdownMenu>
              </Box>
              <Box>
                <Link href="/careers" style={{ textDecoration: "none" }}>
                  <Button
                    variant="text"
                    size="large"
                    sx={{
                      fontWeight: "bold",
                      color: "#252E4E",
                    }}
                  >
                    CAREERS
                  </Button>
                </Link>
              </Box>
              <Box>
                <Link href="/coming-soon" style={{ textDecoration: "none" }}>
                  <Button
                    size="large"
                    variant="text"
                    sx={{
                      fontWeight: "bold",
                      color: "#252E4E",
                      mr: "10px",
                    }}
                  >
                    BLOGS
                  </Button>
                </Link>
              </Box>
              <Box>
                <Link href="/contact-us" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      fontWeight: "bold",
                      backgroundColor: "#DA9042",
                      color: "#fff",
                      padding: "10px 20px",
                      "&:hover": {
                        backgroundColor: "#DA9042",
                        color: "#fff",
                      },
                    }}
                  >
                    Contact Us
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawerComponent}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
