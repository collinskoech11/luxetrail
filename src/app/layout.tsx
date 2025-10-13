import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import AppBar from "@/components/layout/AppBar";
import Footer from "@/components/layout/Footer";
import { Container, Box } from "@mui/material";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar />
            <Box sx={{ flexGrow: 1 }}>
              <Box>
                {children}
              </Box>
            </Box>
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}