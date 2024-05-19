import React, { useContext, useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { AuthContext } from '../../contexts/AuthContext.tsx';

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    const inputStyles = {
        '& .MuiInputLabel-root': {
            color: 'hsl(217, 10%, 69%)',
            '&.Mui-focused': {
                color: 'hsl(43, 100%, 50%)',
            },
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'hsl(217, 10%, 69%)',
            },
            '&:hover fieldset': {
                borderColor: 'hsl(43, 100%, 50%)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'hsl(43, 100%, 50%)',
            },
            '& input': {
                color: 'hsl(217, 10%, 69%)',
            },
        },
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <Container
            sx={{
                backgroundColor: 'hsl(0, 0%, 18%)',
                paddingY: '55px',
                borderRadius: '10px',
            }}
            maxWidth="sm"
        >
            <Typography
                sx={{ color: 'hsl(44, 26%, 77%)' }}
                variant="h4"
                component="h1"
                gutterBottom
            >
                Authorization
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={inputStyles}
                    inputProps={{ maxLength: 10 }}
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    sx={inputStyles}
                    inputProps={{ maxLength: 10 }}
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button
                    sx={{
                        marginTop: '20px',
                        backgroundColor: 'hsl(43, 100%, 60%)',
                        color: 'hsl(43, 89%, 15%)',
                        '&:hover': {
                            backgroundColor: 'hsl(43, 100%, 50%)',
                        },
                    }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Login
                </Button>
            </form>
        </Container>
    );
};

export default LoginForm;
