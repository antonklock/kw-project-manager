import React from "react";
import "../scss/components/projectItem.scss";
import {
  Card,
  CardOverflow,
  CardContent,
  Typography,
  IconButton,
} from "@mui/joy";
import StarIcon from "@mui/icons-material/Star";

const ProjectItem = () => {
  return (
    <>
      <Card
        row
        variant="outlined"
        sx={{
          bgcolor: "background.body",
          zIndex: -1,
        }}
        className="projectItem"
      >
        <CardOverflow>
          <IconButton aria-label="Star project">
            <StarIcon />
          </IconButton>
        </CardOverflow>
        <CardContent>
          <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
            Project Name
          </Typography>
          <Typography level="body2">Project subtitle</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectItem;
