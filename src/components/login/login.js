import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../../utils/theme"
import Grid from "@material-ui/core/Grid"
import { Paper, Button, Typography } from "@material-ui/core"
import Link from "next/link"
import { useLoginStyles } from "../../assests/styles/Styles"

function Login() {
  const classes = useLoginStyles()
  return (
    <>
      <Grid item xs={6} md={6}>
        <Paper className={classes.innerPaperBox}>
          <Typography variant="p" component="p" className={classes.typography}>
            قبلا حساب کاربری ایجاد کرده ام
          </Typography>
          <Link href="/login" passHref>
            <Button className={classes.loginBtnPaperBox} variant="outlined">
              ورود
            </Button>
          </Link>
        </Paper>
      </Grid>
    </>
  )
}

export default Login
