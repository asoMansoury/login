import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../../utils/theme"
import Grid from "@material-ui/core/Grid"
import { Paper, Button, Typography } from "@material-ui/core"
import Link from "next/link"
import { useLoginStyles } from "../../assests/styles/Styles"


function Signup() {
    const classes = useLoginStyles()
  return (
    <>
      <Grid item xs={6} md={6} className={classes.gridPaperBox}>
        <Paper spacing={2} className={classes.innerPaperBox}>
          <Typography variant="p" component="p" className={classes.typography}>
            ایجاد حساب کاربری جدید
          </Typography>
          <Link href="/signup" passHref>
            <Button className={classes.loginBtnPaperBox} variant="outlined">
              ثبت نام کنید
            </Button>
          </Link>
        </Paper>
      </Grid>
    </>
  )
}

export default Signup
