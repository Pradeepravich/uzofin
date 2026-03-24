import { Button, type ButtonProps, type SxProps } from "@mui/material";

interface ChildrenProps extends ButtonProps {
  text: string;
  startIcon?: React.ReactNode;
  sx?: SxProps;
}

// const StyledButtonComponent = styled(Button)(({ theme }) => ({
//   backgroundColor: theme.palette.primary.main,
//   color: theme.palette.primary.contrastText,
//   padding: theme.spacing(1, 2),
// }));

const ButtonComponent = ({ text, startIcon, sx, ...other }: ChildrenProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={startIcon}
      {...other}
      sx={{
        ...sx,
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
