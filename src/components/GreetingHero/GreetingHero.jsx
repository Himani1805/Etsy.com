import React from 'react';
import './GreetingHero.css';
import { useUser } from '../../context/UserContext';

export default function GreetingHero() {
  // Read the logged-in user's name from context — this updates automatically when the user changes
  const { user } = useUser();

  // This section maps through our category data to show these circular buttons, making it easy for the user to jump into a specific shop.
  const categories = [
    { name: "Personalised Gifts", image: "https://i.etsystatic.com/23244419/r/il/256acb/5460344806/il_300x300.5460344806_3962.jpg" },
    { name: "Wall Art", image: "https://i.etsystatic.com/13937228/r/il/2aa962/5720982228/il_300x300.5720982228_3xm5.jpg" },
    { name: "Bedding & Blankets", image: "https://i.etsystatic.com/11651126/c/1999/1999/0/858/il/b8040d/4026650319/il_300x300.4026650319_bhl2.jpg" },
    { name: "Jewellery", image: "https://i.etsystatic.com/9266327/c/2000/2000/0/0/il/fc0035/5390294661/il_300x300.5390294661_ewbc.jpg" },
    { name: "Tees & Jumper", image: "https://i.etsystatic.com/9353657/r/il/ccdf94/3423095141/il_300x300.3423095141_khth.jpg" },
    { name: "On Sale", image: "https://i.etsystatic.com/17665462/c/1941/1941/40/330/il/88b0e6/3970877247/il_300x300.3970877247_n9na.jpg" }
  ];

  return (
    <section className="greeting-hero">
      <div className="greeting-hero-wrapper">
        <h1 className="greeting-text">
          {user.name}, take a break and browse your picks <span className="sparkles">* ° . * . °</span>
        </h1>
        
        <div className="greeting-categories">
          {categories.map((cat, idx) => (
            <div key={idx} className="circle-category-item">
              <div className="circle-image-wrapper">
                <img src={cat.image} alt={cat.name} className="circle-image" />
              </div>
              <span className="circle-label">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
