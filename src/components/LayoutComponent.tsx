import { styled } from "@mui/material";
import Navbar from "./Navbar";

const Header = styled("header")({
  width: "100%",
  // color: "#fff",
});

interface LayoutComponentProps {
  children?: React.ReactNode;
}

const LayoutComponent = ({ children }: LayoutComponentProps) => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <main>{children}</main>
    </>
  );
};

export default LayoutComponent;
