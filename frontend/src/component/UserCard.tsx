import React, {ReactElement} from "react";
import {Card, CardContent, Grid, List, ListItem, Typography} from "@mui/material";
import {UserResponseDto} from "../state/api/rawApi";

function dateStrToBirthday(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('de', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
}

export default function UserCard(user: UserResponseDto): ReactElement {
    return (
        <Grid key={user.id} item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{textAlignLast: 'center'}}>
                <CardContent>

                    <Typography variant="h4" sx={{paddingBottom: 0.5,}}>
                        {user.name}
                    </Typography>

                    <Typography variant="body1" color="text.secondary">
                        {dateStrToBirthday(user.birthday)}
                    </Typography>

                    <List>
                        {user.addresses.map((address, i) => (
                            <ListItem
                                key={i}
                                sx={{display: 'list-item', padding: 0.5,}}
                            >
                                {address.fullAddress}
                            </ListItem>
                        ))}
                    </List>

                </CardContent>
            </Card>
        </Grid>
    );
};
