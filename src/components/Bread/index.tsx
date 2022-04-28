import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { FC } from "react";
import { Link } from "react-router-dom";
import { breadModel } from "../../model/Bread";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: 20,
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
    link: {
      textDecoration: "none",
      fontSize: 16,
      lineHeight: "22.8px",
      fontWeight: 400,
      color: "#000",
    },
    text: {
      color: "#0075FF",
      fontSize: 16,
      lineHeight: "22.8px",
      fontWeight: 400,
    },
  })
);

interface BreadProps {
  items: breadModel[];
}

export const Bread: FC<BreadProps> = ({ items }) => {
  const classes = useStyles();

  return (
    <div className="container">
      <div className={classes.root}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {items.map((v) =>
            v.path ? (
              <Link className={classes.link} to={v.path} key={v.id}>
                {v.text}
              </Link>
            ) : (
              <Typography key={v.id} className={classes.text} color="textPrimary">
                {v.text}
              </Typography>
            )
          )}
        </Breadcrumbs>
      </div>
    </div>
  );
};
