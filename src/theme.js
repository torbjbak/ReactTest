import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
// A custom theme for this app
const theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#ff5722',
			light: '#ff8a65',
			dark: '#bf360c',
		},
		secondary: {
			main: '#c2185b',
			light: '#ec407a',
			dark: '#880e4f',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#ffffff',
		},
	},
	overrides: {
		MuiPaper: {
			root: {
				padding: '20px 10px',
				margin: '10px',
				backgroundColor: '#fff', // 5d737e
			},
		},
		MuiButton: {
			root: {
				margin: '5px',
			},
		},
	},
});
export default theme;