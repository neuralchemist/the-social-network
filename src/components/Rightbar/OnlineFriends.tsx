import React, { useEffect, useState } from "react";
// mui 5
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Skeleton from "@mui/material/Skeleton";

const AvatarSkeleton = () => {
  const counts = [1, 2, 3, 4, 5];

  return (
    <AvatarGroup max={4}>
      {counts.map((count) => (
        <Skeleton
          key={count}
          animation="wave"
          variant="circular"
          width={40}
          height={40}
        />
      ))}
    </AvatarGroup>
  );
};

const AvatarFriends = () => {
  return (
    <AvatarGroup max={4}>
      {dummyFriendsOnline.map((friend) => (
        <Avatar key={friend.name} alt={friend.name} src={friend.src} />
      ))}
    </AvatarGroup>
  );
};

function OnlineFriends() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <Stack direction="column" alignItems="flex-start">
      <Typography variant="h6" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
        Online
      </Typography>
      {loading ? <AvatarSkeleton /> : <AvatarFriends />}
    </Stack>
  );
}

export default OnlineFriends;

const dummyFriendsOnline = [
  {
    name: "Remy Sharp",
    src: "https://material-ui.com/static/images/avatar/1.jpg",
  },
  {
    name: "Travis Howard",
    src: "https://material-ui.com/static/images/avatar/2.jpg",
  },
  {
    name: "Cindy Baker",
    src: "https://material-ui.com/static/images/avatar/3.jpg",
  },
  {
    name: "Agnes Walker",
    src: "https://material-ui.com/static/images/avatar/4.jpg",
  },
  {
    name: "Trevor Henderson",
    src: "https://material-ui.com/static/images/avatar/5.jpg",
  },
];
