import React, { useState } from "react";
import "../scss/components/projectItem.scss";
import {
  Card,
  CardOverflow,
  CardContent,
  Typography,
  IconButton,
  Button,
} from "@mui/joy";
import Link from "@mui/joy/Link";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import electron from "electron";

type ChildProps = {
  handleDelete: (keyToDelete: string) => void;
  id: string;
  path: string;
};

const ProjectItem = (props: ChildProps) => {
  const { handleDelete, id, path } = props;
  const [checked, setChecked] = useState(false);

  //"C:UsersAdminOneDriveDesktophello.txt"

  const handlePathClicked = () => {
    // electron.shell.showItemInFolder("C:/Users/Admin/OneDrive/Desktop/");
  };
  return (
    <>
      <Card row variant="outlined" className="projectItem">
        <CardOverflow className="cardPart">
          <IconButton
            aria-label="Star project"
            variant="plain"
            onClick={() => setChecked(!checked)}
          >
            {checked ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
        </CardOverflow>

        <CardContent className="cardPart">
          <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
            Project Name
          </Typography>
          <Typography level="body2"> {id} </Typography>
        </CardContent>

        <CardContent className="cardPart">
          <Link fontWeight="sm" onClick={handlePathClicked}>
            {path}
          </Link>
        </CardContent>

        <Button
          variant="solid"
          color="danger"
          onClick={() => {
            console.log("id", id);
            handleDelete(id);
          }}
        >
          Delete
        </Button>
      </Card>
    </>
  );
};

export default ProjectItem;
