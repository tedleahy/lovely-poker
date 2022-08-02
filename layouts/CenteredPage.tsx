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
const PageContainer = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up('md')]: {
		width: '50%',
	},
}));

const CenteredPage = ({ children, title }: CenteredPageProps) => {
    return (
		<RootStyle>
			<PageContainer sx={{ mb: 5 }}>
				<Typography variant="h3" sx={{ my: 5 }}>
					{title}
				</Typography>
				{children}
			</PageContainer>
		</RootStyle>
    );
};

export default CenteredPage;
