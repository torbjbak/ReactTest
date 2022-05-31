import React from 'react';
import PropTypes from 'prop-types'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const DrawerListItem = (props) => {
	return(
		<ListItem key={props.text} disablePadding sx={{ display: 'block' }}>
			<ListItemButton
				sx={{
					minHeight: 48,
					justifyContent: props.open ? 'initial' : 'center',
					px: 2.5,
				}}
				onClick={props.onClick}
			>
				<ListItemIcon
					sx={{
						minWidth: 0,
						mr: props.open ? 3 : 'auto',
						justifyContent: 'center',
					}}
				>
					{props.icon}
				</ListItemIcon>
				<ListItemText primary={props.text} sx={{ opacity: props.open ? 1 : 0 }} />
			</ListItemButton>
		</ListItem>
	)
}

DrawerListItem.propTypes = {
	text: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
	icon: PropTypes.element.isRequired
}

export default DrawerListItem;