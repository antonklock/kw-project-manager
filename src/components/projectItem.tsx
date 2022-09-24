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

type ProjectItemProps = {
  handleDeleteProject: (keyToDelete: string) => void;
  id: string;
  path: string;
  name: string;
  client: string;
  starred: boolean;
};

const ProjectItem = (props: ProjectItemProps) => {
  const { handleDeleteProject, id, path, starred, name, client } = props;
  const [isStarred, setStarred] = useState(starred);

  const handlePathClick = () => {
    console.log("Path clicked");
  };
  return (
    <>
      <Card row variant="outlined" className="projectItem">
        <CardOverflow className="cardPart">
          <IconButton
            aria-label="Star project"
            variant="plain"
            onClick={() => setStarred(!isStarred)}
          >
            {isStarred ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
        </CardOverflow>

        <CardContent className="cardPart">
          <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
            {name}
          </Typography>
          <Typography level="body2"> {id} </Typography>
        </CardContent>

        <CardContent className="cardPart">
          <Typography fontWeight="md" textColor="plainColor" mb={0.5}>
            {client}
          </Typography>
        </CardContent>

        <CardContent className="cardPart">
          <Link fontWeight="sm" onClick={handlePathClick}>
            {path}
          </Link>
        </CardContent>

        <Button
          variant="solid"
          color="danger"
          onClick={() => {
            handleDeleteProject(id);
          }}
        >
          Delete
        </Button>
      </Card>
    </>
  );
};

export default ProjectItem;
