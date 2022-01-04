import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import { Paper, Button, Typography } from "@material-ui/core"
import { Box } from "@material-ui/core"
import Link from "next/link"
import Signup from "../src/components/login/Signup"
import Login from "../src/components/Login/Login"
import theme from "../src/utils/theme"

const useStyles = makeStyles((theme) => ({
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
  
}))
const MainLogin = () => {
  const classes = useStyles(theme)

  return (
    <>
      <div
        className="main"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box component="main" fullwidth="md" className={classes.mainPaperBox}>
          <CssBaseline />
          <Grid container>
            <Signup />
            <Login />
          </Grid>
        </Box>
      </div>
    </>
  )
}

export default MainLogin
