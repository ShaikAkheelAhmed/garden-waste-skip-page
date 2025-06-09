import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [skips, setSkips] = useState([]);

  useEffect(() => {
    fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
      .then((res) => res.json())
      .then((data) => setSkips(data))
      .catch((err) => console.error("Error loading skips:", err));
    }, []);
    console.log(skips)
    
  return (
    <div className="App">
      <h1>Choose Your Skip Size</h1>
      <div className="skip-grid">
        {skips.map((skip, index) => (
         <div className="skip-card" key={index}>
         <div className="skip-avatar">{skip.size} YD</div>
         <h3>{skip.size} Yard Skip</h3>
         <p>Hire Period: {skip.hire_period_days} days</p>
         <p>Price (Excl. VAT): £{skip.price_before_vat}</p>
         <p>VAT: {skip.vat}%</p>
         <span className={`badge ${skip.allows_heavy_waste ? "yes" : "no"}`}>
           {skip.allows_heavy_waste ? "Heavy Waste Allowed" : "No Heavy Waste"}
         </span>
         <span className={`badge ${skip.allowed_on_road ? "yes" : "no"}`}>
           {skip.allowed_on_road ? "Allowed on Road" : "Not Allowed on Road"}
         </span>
         <button className="select-button">Select This Skip</button>
       </div>
        ))}
      </div>
    </div>
  );
}
