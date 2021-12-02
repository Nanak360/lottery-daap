import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import getWeb3 from "./../getWeb3";

export default function Nav() {
  const [accounts, setAccounts] = React.useState(null);
  const [web3, setWeb3] = React.useState(null);

  React.useEffect(async () => {
    try {
      // Get network provider and web3 instance.
      let w3 = await getWeb3();
      setWeb3(w3);

      // Use web3 to get the user's accounts.
      setAccounts(await w3.eth.getAccounts());
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
    return () => {};
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Lottery
          </Typography>
          <Button color="inherit">Connect Wallet</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
