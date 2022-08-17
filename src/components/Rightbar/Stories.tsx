import React, { useEffect, useState } from "react";
// mui 5
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Skeleton from "@mui/material/Skeleton";
// custom data
import { stories_data } from "./data/stories_data";

const ImageListSkeleton = () => {
  const counts = [1, 2, 3, 4];
  return (
    <ImageList sx={{ height: 450 }} variant="masonry">
      {stories_data.map((story, index) => (
        <ImageListItem key={index}>
          <Skeleton
            sx={{ height: 100, width: 120 }}
            animation="wave"
            variant="rectangular"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const StoryImageList = () => {
  return (
    <ImageList sx={{ height: 450 }} variant="masonry">
      {stories_data.map((story, index) => (
        <ImageListItem key={index}>
          <img
            src={`${story.img}?w=248&fit=crop&auto=format`}
            srcSet={`${story.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={story.title}
            loading="lazy"
          />

          <ImageListItemBar
            title={story.title}
            subtitle={story.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${story.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

function Stories() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <Stack direction="column" alignItems="flex-start">
      <Typography variant="h6" color="text.secondary" sx={{ mt: 2, mb: 1 }}>
        Stories
      </Typography>
      {loading ? <ImageListSkeleton /> : <StoryImageList />}
    </Stack>
  );
}

export default Stories;
