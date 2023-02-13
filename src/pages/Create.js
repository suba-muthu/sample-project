import React from "react";
import { Typography } from "@mui/material";

export default function Create() {
    return (
        <div>
            Create page
            <Typography 
              variant="h1"
              color="textSecondary"
              component='h2'
              gutterBottom
              >
                create a new note
            </Typography>
        </div>
    )
}