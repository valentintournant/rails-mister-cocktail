import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Discover", "Our delicious Cocktails", ""],
    typeSpeed: 60,
    loop: true
  });
}

export { loadDynamicBannerText };
