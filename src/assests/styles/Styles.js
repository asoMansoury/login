import { makeStyles } from "@material-ui/core/styles"

export const useLoginStyles = makeStyles((theme) => ({
    direction: "rtl",
    innerDiv: {
      [`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
        padding: "15px",
      },
    },
    innerPaperBox: {
      background: "inherit",
      color: theme.palette.common.main,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "370px",
      border: "none !important",
      background:"none !important"
    },
    loginBtnPaperBox: {
      color: "#fff !important",
      border: "1px solid #fff !important" ,
      fontFamily: "VazirLight !important",
      width: "160px",
      height: "44px",
      fontSize: "16px !important",
      fontWeight: "700 !important",
      '&:hover': {
        backgroundColor: '#fff !important' ,
        color: '#3c52b2 !important',
        background: "linearGradient(to left, salmon 50%, lightblue 50%) right !important",
        backgroundSize: "200% !important",
        transition: ".5s ease-out !important",
        backgroundPosition: "left !important"
      },
  
      [`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
        width: "100px",
        fontSize: "12px",
        height: "30px",
      },
    },
    typographyPaperBox: {
      color:theme.palette.common.white,
      fontSize: "24px",
      [`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
        fontSize: "15px",
      },
      [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]: {
        fontSize: "12px",
      },
      fontFamily: "VazirLight !important",
      textAlign: "center",
      padding: "25px",
    },
  }))