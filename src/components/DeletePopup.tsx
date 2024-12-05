import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
//import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { Box, Stack, Typography } from "@mui/material";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface DeletePopupProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default function DeletePopup(props: DeletePopupProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box
        sx={{
          maxWidth: "40rem",
          minHeight: "22.125rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginTop: "3.875rem",
          }}
        >
          <img src="../../assets/alert.svg" style={{ display: "flex" }} />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginTop: "0.853rem",
          }}
        >
          <Typography variant="h2" fontSize="1.5rem">
            ARE YOU SURE?
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginTop: "0.853rem",
          }}
        >
          <Typography variant="h2" fontSize="1.2rem">
            You will not be able to undo this action if you proceed!
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginTop: "2rem",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Button variant="outlined">Cancel</Button>
            <Button variant="contained">Delete</Button>
          </Stack>
        </Box>
      </Box>
      {/* <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem disablePadding key={email}>
            <ListItemButton onClick={() => handleListItemClick(email)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("addAccount")}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List> */}
    </Dialog>
  );
}

// export default function DeletePopup() {
//   const [open, setOpen] = React.useState(false);
//   const [selectedValue, setSelectedValue] = React.useState(emails[1]);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = (value: string) => {
//     setOpen(false);
//     setSelectedValue(value);
//   };

//   return (
//     <div>
//       <Typography variant="subtitle1" component="div">
//         Selected: {selectedValue}
//       </Typography>
//       <br />
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open simple dialog
//       </Button>
//       <SimpleDialog
//         selectedValue={selectedValue}
//         open={open}
//         onClose={handleClose}
//       />
//     </div>
//   );
// }
