import React from "react";
// mui 5
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
// custom type
import { PostType } from "./types";

interface Props {
  post: PostType;
}

function Post({ post }: Props) {
  return (
    <Card sx={{ maxWidth: 600, margin: "0 auto", mt: 1, mb: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: "red" }} aria-label="user">
            {post.user}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.title}
        subheader={post.date}
      />
      <CardMedia
        component="img"
        height="56.5%"
        image={post.image}
        alt={post.title}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
