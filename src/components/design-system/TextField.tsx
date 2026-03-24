import { TextField, type SxProps, type TextFieldProps } from "@mui/material";
import type { FC } from "react";

interface childrenProps
  extends Omit<TextFieldProps, "label" | "placeholder" | "helperText"> {
  label: string;
  placeholder?: string;
  helperText?: string;
  sx?: SxProps;
}

// const StyledTextFieldComponent = styled(TextField)(({ theme }) => ({
//   marginTop: theme.spacing(1),
//   marginBottom: theme.spacing(1),
// }));

const TextFieldComponent: FC<childrenProps> = ({
  label,
  placeholder,
  helperText,
  sx,
  ...other
}) => {
  return (
    <div>
      <label>{label}</label>
      <TextField
        placeholder={placeholder}
        sx={{
          ...sx,
        }}
        {...other}
      />
      {helperText && <span>{helperText}</span>}
    </div>
  );
};

export default TextFieldComponent;
