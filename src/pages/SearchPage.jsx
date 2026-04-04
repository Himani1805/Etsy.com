import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import EtsyHeader from '../components/EtsyHeader/EtsyHeader';
import './SearchPage.css';

// A catalogue of products to search through
const ALL_PRODUCTS = [
  { id: 1, title: "Personalised Name Necklace", price: "₹1,299", originalPrice: "₹2,499", image: "https://i.etsystatic.com/9266327/c/2000/2000/0/0/il/fc0035/5390294661/il_300x300.5390294661_ewbc.jpg", category: "Jewellery", seller: "CraftsByRia" },
  { id: 2, title: "Custom Photo Frame Gift", price: "₹899", originalPrice: "₹1,799", image: "https://i.etsystatic.com/23244419/r/il/256acb/5460344806/il_300x300.5460344806_3962.jpg", category: "Personalised Gifts", seller: "GiftCornerIndia" },
  { id: 3, title: "Watercolour Floral Wall Art Print", price: "₹450", originalPrice: "₹900", image: "https://i.etsystatic.com/13937228/r/il/2aa962/5720982228/il_300x300.5720982228_3xm5.jpg", category: "Wall Art", seller: "ArtByPriya" },
  { id: 4, title: "Handmade Boho Macrame Hanging", price: "₹1,200", originalPrice: "₹2,200", image: "https://i.etsystatic.com/22616224/r/il/b6322e/4455425340/il_340x270.4455425340_9sdf.jpg", category: "Home Decor", seller: "BohoIndia" },
  { id: 5, title: "Luxury Cotton Throw Blanket", price: "₹2,499", originalPrice: "₹4,199", image: "https://i.etsystatic.com/11651126/c/1999/1999/0/858/il/b8040d/4026650319/il_300x300.4026650319_bhl2.jpg", category: "Bedding & Blankets", seller: "CozyHomeStore" },
  { id: 6, title: "Custom Embroidered Tote Bag", price: "₹699", originalPrice: "₹1,299", image: "https://i.etsystatic.com/9353657/r/il/ccdf94/3423095141/il_300x300.3423095141_khth.jpg", category: "Tees & Jumper", seller: "ThreadsByAnanya" },
  { id: 7, title: "Vintage Brass Candle Holder Set", price: "₹1,899", originalPrice: "₹3,499", image: "https://i.etsystatic.com/47756093/r/il/9baa6a/5612798449/il_340x270.5612798449_ajl6.jpg", category: "Vintage", seller: "VintageVaultIN" },
  { id: 8, title: "Silver Hoop Earrings with Charm", price: "₹549", originalPrice: "₹999", image: "https://i.etsystatic.com/34040842/r/il/813dec/5617810051/il_340x270.5617810051_e201.jpg", category: "Jewellery", seller: "SilverMoonJewels" },
  { id: 9, title: "Personalised Birthday Gift Box", price: "₹1,599", originalPrice: "₹2,799", image: "https://i.etsystatic.com/17665462/c/1941/1941/40/330/il/88b0e6/3970877247/il_300x300.3970877247_n9na.jpg", category: "On Sale", seller: "GiftWrappedLove" },
  { id: 10, title: "Handpainted Ceramic Mug Set", price: "₹799", originalPrice: "₹1,499", image: "https://i.etsystatic.com/47832933/c/2727/2165/80/554/il/bc8f78/5782831776/il_340x270.5782831776_obxf.jpg", category: "Home Decor", seller: "ClayByKavya" },
  { id: 11, title: "Floral Printed Cushion Cover", price: "₹399", originalPrice: "₹799", image: "https://i.etsystatic.com/21435611/r/il/93f7e2/5242634368/il_340x270.5242634368_tbrp.jpg", category: "Bedding & Blankets", seller: "HomeThreads" },
  { id: 12, title: "Personalised Star Map Poster", price: "₹999", originalPrice: "₹1,799", image: "https://i.etsystatic.com/34040842/r/il/1e05d5/5570225496/il_340x270.5570225496_qsys.jpg", category: "Wall Art", seller: "StarPrintStudio" },
];

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // Filter products based on the search query
  const results = useMemo(() => {
    if (!query.trim()) return ALL_PRODUCTS;
    const lower = query.toLowerCase();
    return ALL_PRODUCTS.filter(
      p =>
        p.title.toLowerCase().includes(lower) ||
        p.category.toLowerCase().includes(lower) ||
        p.seller.toLowerCase().includes(lower)
    );
  }, [query]);

  return (
    <div className="search-page">
      <EtsyHeader />

      <div className="search-results-wrapper">
        <div className="search-results-header">
          <h1 className="search-results-title">
            {results.length > 0
              ? <>{results.length} results for <span className="search-query-text">"{query}"</span></>
              : <>No results for <span className="search-query-text">"{query}"</span></>
            }
          </h1>
        </div>

        {results.length === 0 ? (
          <div className="search-empty-state">
            <p>😕 We couldn't find anything matching your search. Try different keywords!</p>
          </div>
        ) : (
          <div className="search-results-grid">
            {results.map(product => (
              <div key={product.id} className="search-product-card">
                <div className="search-product-img-wrapper">
                  <img src={product.image} alt={product.title} className="search-product-img" />
                </div>
                <div className="search-product-info">
                  <p className="search-product-seller">{product.seller}</p>
                  <p className="search-product-title">{product.title}</p>
                  <div className="search-product-price-row">
                    <span className="search-product-price">{product.price}</span>
                    <span className="search-product-original">{product.originalPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
