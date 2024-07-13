import { ReactNode } from "react";
import "@/assets/styles/globals.css";

interface MainLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Property Pulse | Find the perfect Rental",
  description: "Find the perfect rental property",
  keywords:
    "rental, property, real estate, house, apartment, condo, townhouse, single family home, multi family home, duplex, triplex, quadplex, penthouse, loft, studio, flat, villa, mansion, cottage, bungalow, cabin, chalet, farmhouse, ranch, townhome, mobile home, tiny home, houseboat, boat, yacht, floating home, treehouse, earth house, igloo, cave, castle, palace, fort, lighthouse, windmill, dome, pyramid, skyscraper, high rise",
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
