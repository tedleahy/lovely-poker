import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface CenteredPageProps {
    children: React.ReactNode,
    title: string;
};

const RootStyle = styled(Box)(() => ({
	display: 'flex',
	justifyContent: 'center',
}));

const CenteredPage = ({ children, title }: CenteredPageProps) => {
	return (
		<RootStyle>
			<Box sx={{ mb: 5 }}>
				<Typography variant="h3" sx={{ my: 5 }}>
					{title}
				</Typography>
					{children}
			</Box>
		</RootStyle>
	);
};

export default CenteredPage;
