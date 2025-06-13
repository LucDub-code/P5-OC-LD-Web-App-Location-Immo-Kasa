import "./Gallery.scss";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => setLogements(data));
  }, []);

  return (
    <div className="gallery">
      {logements.map((logement) => (
        <Card 
        key={logement.id} 
        cover={logement.cover} 
        title={logement.title} 
        />
      ))}
    </div>
  );
}
