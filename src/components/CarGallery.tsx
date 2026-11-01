import React, { useState } from "react";

export const CarGallery: React.FC<{ name: string; images: string[] }> = ({ name, images }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="rent-gallery">
      <img className="rent-gallery-main" src={images[active]} alt={`${name}, фото ${active + 1} из ${images.length}`} />
      <div className="rent-gallery-thumbs">
        {images.map((src, i) => (
          <button key={src} type="button" aria-label={`Показать фото ${i + 1}`} aria-pressed={i === active} onClick={() => setActive(i)}>
            <img src={src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
};
