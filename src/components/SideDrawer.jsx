import React, { useState, Fragment } from "react";
import { Drawer, Button } from "@material-tailwind/react";
import SideNav from "./Sidenav.jsx";

function SideDrawer() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <Fragment>
        <Button onClick={openDrawer===true?closeDrawer:openDrawer}>
        <i className="bi bi-list text-black" style={{"font-size":25}}></i>
        </Button>
        <Drawer open={open} onClose={closeDrawer} className="">
          <div className="sticky">
            <SideNav />
          </div>
        </Drawer>
      </Fragment>
    </>
  );
}

export default SideDrawer;
