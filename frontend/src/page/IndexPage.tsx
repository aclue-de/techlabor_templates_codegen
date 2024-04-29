import React, {useEffect, useRef} from 'react';
import {Box, Button, Grid, Stack, Typography,} from '@mui/material';
import {useDeleteApiUserMutation, useGetApiUserQuery, usePostApiUserMutation} from "../state/api/rawApi";
import UserCard from "../component/UserCard";
import createUser from "../entity/createUser";

export default function IndexPage() {
    // Query
    const {data: userData} = useGetApiUserQuery();
    // Mutation
    const [createUserRequest] = usePostApiUserMutation();
    const [deleteUserRequest] = useDeleteApiUserMutation();
    const users = userData ?? [];

    const handleCreateUser = () => {
        const userRequestDto = createUser(users.length + 1);
        createUserRequest({userRequestDto});
    };

    const handleDeleteUser = () => {
        deleteUserRequest();
    };

    // Scroll to new User Card
    const listRef = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        const lastChild = listRef.current?.lastChild as HTMLElement;
        if (lastChild) {
            lastChild.scrollIntoView({behavior: 'smooth'});
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [users])

    return (
        <Stack sx={{
            height: 'inherit',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            padding: 2,
        }}>
            <Typography pb={2} variant={"h3"}>Users</Typography>
            <Grid container spacing={2}
                  ref={listRef}
                  sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      height: 390,
                      overflow: 'auto',
                      placeContent: 'center',
                      paddingRight: 1,
                      '& > :last-child': {paddingBottom: '20px'},
                  }}>
                {users.length === 0 ?  <Typography>No Users</Typography> : users.map(UserCard)}
            </Grid>

            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
            }}>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCreateUser}
                >
                    Create User
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    onClick={handleDeleteUser}
                >
                    Delete All
                </Button>
            </Box>
        </Stack>
    );
}
