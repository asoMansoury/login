import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../src/utils/theme"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import { Paper, Button, Typography } from "@material-ui/core"
import { Box } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  direction: "rtl",
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
    color: theme.palette.common.white,
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
    fontSize: "16px",
    fontWeight: "700",
  },
  typography: {
    fontSize: "24px",
    fontFamily: "VazirThin",
    textAlign: "center",
    padding: "25px",
  },
}))

const Login = () => {
  const classes = useStyles()

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
        <Box component="main" fullWidth="md" className={classes.mainPaperBox}>
          <CssBaseline />
          <Grid container>
            <Grid item xs={6} md={6} className={classes.gridPaperBox}>
              <Paper spacing={2} className={classes.innerPaperBox}>
                <Typography
                  variant="p"
                  component="p"
                  className={classes.typography}
                >
                  ایجاد حساب کاربری جدید
                </Typography>
                <Button className={classes.loginBtnPaperBox} variant="outlined">
                  ثبت نام کنید
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={6} md={6}>
              <Paper className={classes.innerPaperBox}>
                <Typography
                  variant="p"
                  component="p"
                  className={classes.typography}
                >
                  قبلا حساب کاربری ایجاد کرده ام
                </Typography>
                <Button className={classes.loginBtnPaperBox} variant="outlined">
                  ورود
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  )
}

export default Login
