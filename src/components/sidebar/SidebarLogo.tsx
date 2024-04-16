import { IoBeerOutline } from "react-icons/io5";

export const SidebarLogoComponent = () => {
  return (
    <>
      <h1 className="text-lg md:text-2xl font-bold text-white flex items-center">
        <IoBeerOutline />
        <span>The</span>
        <span className="text-blue-500">Drink</span>
        <span>Code.</span>
      </h1>
      <p className="text-slate-500 text-sm">Managing Restaurants for you 🥤</p>
    </>
  );
};
