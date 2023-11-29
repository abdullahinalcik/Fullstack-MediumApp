import { Box, Link, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { useState } from "react";

const Footer = () => {
  const [navbarBg, setNavbarBg] = useState(false)
  window.addEventListener("scroll", () => {

    let height = (window.innerWidth > 900) ? 426 : 260

    window.scrollY > height ? setNavbarBg(true) : setNavbarBg(false);
  });
  const iconStyle = {
    fontSize: "1.6rem",
  };
  const newBlogStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "2px solid blue",
    p: 4,
    borderRadius: "2% 15%",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  };

  return (
    <Box
      sx={{
        height: 50,
        backgroundColor: navbarBg ? '#ffc11884' : '#FFC018', 
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        zIndex: 1,
      }}
      position="fixed"
      bottom="0"
      width={"100%"}
    >
      <Box
        sx={{
          display: { xs: "flex" },
          justifyContent: "beetween",
          alignItems: "center",
        }}
      ></Box>
      <Box
        sx={{
          display: { xs: "flex" },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          nowrap="true"
          component="a"
          sx={{
            mr: 2,
            display: { sm: 'flex', xs:"none" },
            fontWeight: 500,
            letterSpacing: ".2rem",
            color: "Whblackite",
          }}
        >
          Copyright &copy; Abdullah İnalcık 2023
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "flex" },
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          margin:{sm:2,xs:"auto"}
        }}
      >
        <Link
          href="https://github.com/abdullahinalcik"
          underline="hover"
          target="_blank"
          rel="noopener"
          color="initial"
          sx={{ "&:hover": { color: "red", bg: "primary" } }}
          //*üçüncü taraf içeriğine bağlantı verirken her zaman rel="noopener" veya rel="noreferrer" ayarının yapılması önerilir.
          // *rel="noopener", yeni sayfanın window.opener özelliğine erişmesini engeller ve ayrı bir işlemde çalışmasını sağlar. Bu olmadan, hedef sayfa potansiyel olarak sayfanızı kötü niyetli bir URL'ye yönlendirebilir.
          //* rel="noreferrer" has the same effect, but also prevents the Referer header from being sent to the new page. ⚠️ Removing the referrer header will affect analytics.
        >
          <GitHubIcon sx={iconStyle} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/abdullah-inalcik/"
          underline="hover"
          color="initial"
          target="_blank"
          rel="noopener"
          // color="initial"
          sx={{ "&:hover": { color: "red", bg: "primary" } }}
        >
          <LinkedInIcon sx={iconStyle} />
        </Link>
        <Link
          href="mailto:a.inalcik@gmail.com/"
          underline="hover"
          color="initial"
          target="_blank"
          rel="noopener"
          sx={{ "&:hover": { color: "red", bg: "primary" } }}
        >
          <MarkEmailReadIcon sx={iconStyle} />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
