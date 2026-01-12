import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Placeholder images - Replace with his real work for the demo!
const photos = [
    { src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80", width: 800, height: 1200 }, // Groom / Dark Moody
    { src: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?w=1600&q=80", width: 1600, height: 900 }, // Couple Wide
    { src: "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?w=800&q=80", width: 800, height: 1200 }, // Indian Bride (New Link)
    { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80", width: 800, height: 1200 }, // Model Portrait
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80", width: 1600, height: 900 }, // Party / Event
    { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80", width: 800, height: 1200 }, // Jewellery / Detail
];

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery" className="py-20 bg-dark px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Selected Works</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <PhotoAlbum 
            layout="masonry" 
            photos={photos} 
            onClick={({ index }) => setIndex(index)}
            columns={(containerWidth) => {
                if (containerWidth < 500) return 1;
                if (containerWidth < 800) return 2;
                return 3;
            }}
        />

        <Lightbox
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={photos}
        />
      </div>
    </section>
  );
};

export default Gallery;