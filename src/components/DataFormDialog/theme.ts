import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
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
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: 'hsl(0, 0%, 18%)',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'hsl(43, 100%, 50%)',
                },
            },
        },
    },
});

export default theme;
