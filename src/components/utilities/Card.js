import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";

export default function DisplayCard({
  PROPERTY_NAME,
  PROPERTY_RENT,
  PROPERTY_IMG,
  PROPERTY_ADDRESS,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={PROPERTY_NAME}
        subheader={`₹${PROPERTY_RENT}/month`}
      />
      <CardMedia component="img" height="194" image={PROPERTY_IMG} />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {PROPERTY_ADDRESS}
        </Typography>
      </CardContent>

      <Divider sx={{ ml: 2, mr: 2 }} />

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
