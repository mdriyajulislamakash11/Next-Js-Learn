import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-12">
        {/* side Navbar */}
        <div className="col-span-3">
            <ul>
                <li>user list</li>
            </ul>
        </div>

        {/* Dashboard Content */}
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
