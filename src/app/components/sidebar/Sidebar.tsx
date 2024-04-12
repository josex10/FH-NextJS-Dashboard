import { IoAppsOutline, IoCalculatorOutline } from "react-icons/io5";

import SidebarLinkComponent, { LinkProps } from "./SidebarLink";
import { ProfileProps, SidebarProfileComponent } from "./SidebarProfile";
import { SidebarLogoComponent } from "./SidebarLogo";

const SidebarComponent = () => {
  const links: LinkProps[] = [
    {
      path: "/dashboard/main",
      icon: <IoAppsOutline size={25} />,
      name: "Dashboard",
      desc: "Data Overview",
    },
    {
      path: "/dashboard/counter",
      icon: <IoCalculatorOutline size={25} />,
      name: "Counter",
      desc: "Local State",
    },
  ];

  const profile: ProfileProps = {
    imageUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?",
    name: "Jose Badilla P",
    path: "/dashboard/main",
  };
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-96 left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <SidebarLogoComponent />
      </div>
      <div id="profile" className="px-6 py-4">
        <SidebarProfileComponent {...profile} />
      </div>
      <nav className="px-6 py-4">
        {links.map((link) => (
          <SidebarLinkComponent key={link.path} {...link} />
        ))}
      </nav>
    </div>
  );
};

export default SidebarComponent;
