import React, { useState } from "react";
import "../scss/components/projectItem.scss";
import {
  Card,
  CardOverflow,
  CardContent,
  Typography,
  IconButton,
  MenuItem,
} from "@mui/joy";
import Link from "@mui/joy/Link";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DropDown from "./DropDown";
import { v4 as uuidv4 } from "uuid";
import MoreVert from "@mui/icons-material/MoreVert";

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

        <DropDown
          buttonElement={<MoreVert fontSize="small" />}
          menuItems={[
            {
              reactElement: <MenuItem key={uuidv4()}> Edit </MenuItem>,
              onClick: () => console.log("Edit"),
            },
            {
              reactElement: (
                <MenuItem key={uuidv4()} color="danger">
                  Delete
                </MenuItem>
              ),
              onClick: () => handleDeleteProject(id),
            },
          ]}
        />
      </Card>
    </>
  );
};

export default ProjectItem;
