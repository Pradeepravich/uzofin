import { Card, CircularProgress, styled, type CardProps } from "@mui/material";
import type { FC } from "react";

interface ChildrenProps extends CardProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

const StyledCardComponent = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  transition: "box-shadow 0.3s ease-in-out",
}));

const CardComponent: FC<ChildrenProps> = ({
  children,
  isLoading = false,
  ...other
}) => {
  return <StyledCardComponent {...other}>
    {children}
    {isLoading && <CircularProgress size={24} />}
  </StyledCardComponent>;
};

export default CardComponent;
