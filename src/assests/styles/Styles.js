import { makeStyles } from "@material-ui/core/styles"

export const useLoginStyles = makeStyles((theme) => ({
    direction: "rtl",
    innerDiv: {
      [`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
        padding: "15px",
      },
    },
    mainPaperBox: {
      width: "960px",
      height: "370px",
      borderRadius: "10px",
      // border:"1px solid #fff",
      background: " rgba( 255, 255, 255, 0.2 )",
      boxShadow: "0px 0px 14px 5px #3a3a3a",
      backdropFilter: "blur( 12px )",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
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
    },
    loginBtnPaperBox: {
      color: theme.palette.common.white,
      border: "1px solid #fff",
      fontFamily: "VazirThin",
      width: "160px",
      height: "44px",
      color:`red`,
      fontSize: "16px",
      fontWeight: "700",
      '&:hover': {
        backgroundColor: '#fff',
        color: '#3c52b2',
        background: "linearGradient(to left, salmon 50%, lightblue 50%) right",
        backgroundSize: "200%",
        transition: ".5s ease-out",
        backgroundPosition: "left"
      },
  
      [`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
        width: "100px",
        fontSize: "12px",
        height: "30px",
      },
    },
    typography: {
      fontSize: "24px",
      [`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
        fontSize: "15px",
      },
      [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]: {
        fontSize: "12px",
      },
      fontFamily: "VazirThin",
      textAlign: "center",
      padding: "25px",
    },
  }))