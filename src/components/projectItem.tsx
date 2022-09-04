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

type ChildProps = {
  handleDelete: (keyToDelete: string) => void;
  id: string;
};

const ProjectItem = (props: ChildProps) => {
  const { handleDelete, id } = props;
  const [checked, setChecked] = useState(false);
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
          <Link fontWeight="sm">path/path/path/path/path/path</Link>
        </CardContent>

        <Button
          variant="solid"
          color="danger"
          onClick={() => {
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
