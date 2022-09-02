import * as React from "react";

//mui imports
import { Button, MenuItem, TextField, Typography } from "@mui/material";

export default function Input_form() {
    const tags = [
        {
            value: "",
            label: "*blank*",
        },
        {
            value: "kitchen",
            label: "kitchen",
        },
        {
            value: "bathroom",
            label: "bathroom",
        },
        {
            value: "other",
            label: "other",
        },
    ];

    const [tag, setTag] = React.useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTag(event.target.value);
    };

    return (
        <div>
            <Typography variant="h4">Stock Input:</Typography>
            <br />
            <TextField
                id="filled-basic"
                label="Name"
                focused
                required
                fullWidth
            />
            <br />
            <br />
            <TextField
                id="filled-basic"
                label="Description"
                focused
                required
                multiline
                maxRows={6}
                fullWidth
            />
            <br />
            <br />
            <TextField
                id="filled-basic"
                label="Tag"
                focused
                required
                select
                value={tag}
                onChange={handleChange}
                fullWidth
            >
                {tags.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <br />
            <br />
            <TextField
                id="stock"
                label="Amount"
                type="number"
                focused
                variant="outlined"
                color="primary"
                fullWidth
            />
            <br />
            <br />
            <TextField
                id="items"
                label="Items/package"
                type="number"
                focused
                variant="outlined"
                color="primary"
                fullWidth
            />
            <br />
            <br />
            <TextField
                id="weight"
                label="Weight in grams"
                type="number"
                focused
                variant="outlined"
                color="primary"
                fullWidth
            />
            <br />
            <br />
            <Button variant="outlined" color="primary" fullWidth>
                Picture
            </Button>
            <br />
            <br />
            <Button variant="outlined" color="error" fullWidth>
                Submit
            </Button>
            <br />
            <br />
        </div>
    );
}
