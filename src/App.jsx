import "leaflet/dist/leaflet.css";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import Map from "./component/Map";
import { useState } from "react";
import Stats from "./component/Stats";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [statsData, setStatsData] = useState(null);

  return (
    <div className="h-screen overflow-hidden p-2">
      <Map
        handelDrawerOpen={setDrawerOpen}
        handelStatsData={setStatsData}
        isDrawerOpen={drawerOpen}
      />
      <Drawer anchor="bottom" open={drawerOpen}>
        <div className="w-5 mx-auto">
          <Button
            variant="contained"
            color="error"
            size="large"
            onClick={() => setDrawerOpen(false)}
          >
            Close
          </Button>
        </div>

        <Stats data={statsData} />
      </Drawer>
    </div>
  );
}

export default App;
