import React, { useState, useEffect, useReducer, useContext } from "react";

import { i18n } from "../../translate/i18n";
import MainHeader from "../../components/MainHeader";
import Title from "../../components/Title";
import MainContainer from "../../components/MainContainer";
import { makeStyles } from "@material-ui/core";
import FormUserInformation from "../../components/Solar/formUserInfo";


const useStyles = makeStyles((theme) => ({
  mainPaper: {
    flex: 1,
    padding: theme.spacing(1),
    overflowY: "scroll",
    ...theme.scrollbarStyles,
  },
}));

const Solar = () => {
  const classes = useStyles();

  return (
    <MainContainer className={classes.mainContainer}>
      <MainHeader>
        <Title>{i18n.t("solar.title")}</Title>
      </MainHeader>
      <FormUserInformation />
    </MainContainer>
  );
};

export default Solar;
