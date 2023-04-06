// Import Images
import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fa-brands fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fa-brands fa-twitter" },
  { id: 3, href: "https://www.instagram.com", icon: "fa-brands fa-instagram" },
];

export const services = [
  {
    id: 1,
    title: "saving money",
    icon: "fas fa-wallet fa-fw",
    text: "Forage knausgaard echo park, messenger bag lumbersexual bun. ",
  },
  {
    id: 2,
    title: "endless hiking",
    icon: "fas fa-tree fa-fw",
    text: "Shabby chic flexitarian banh mi 3 wolf moon. Migas listicle bitters.",
  },
  {
    id: 3,
    title: "amazing comfort",
    icon: "fas fa-socks fa-fw",
    text: "Snackwave twee poutine pork belly, tilde activated charcoal mukbang.",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: "august 26th",
    title: "Tibet Adventure",
    text: "Vaporware fingerstache keytar, hell of cold-pressed twee pug iceland. Four loko chia aesthetic quinoa letterpress humblebrag microdosing cold-pressed everyday carry. 3 wolf moon woke kitsch hell of.",
    location: "china",
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    img: tour2,
    date: "october 1th",
    title: "best of java",
    text: "Letterpress ugh cred taiyaki subway tile solarpunk seitan organic intelligentsia tousled green juice artisan. Actually subway tile neutra taiyaki, viral enamel pin live-edge man braid shaman.",
    location: "indonesia",
    duration: 11,
    price: 1400,
  },
  {
    id: 3,
    img: tour3,
    date: "september 15th",
    title: "explore hong kong",
    text: "Chartreuse locavore beard, grailed pickled meh hexagon fam bespoke unicorn tilde. Intelligentsia fam pabst, blackbird spyplane messenger bag live-edge wayfarers viral butcher fixie salvia asymmetrical letterpress.",
    location: "hong kong",
    duration: 8,
    price: 5000,
  },
  {
    id: 4,
    img: tour4,
    date: "december 5th",
    title: "kenya highlights",
    text: "Tacos vinyl listicle cliche art party heirloom. Yes plz +1 chia, 3 wolf moon bespoke kitsch church-key. Pop-up lomo intelligentsia praxis grailed big mood blue bottle vexillologist squid mustache fingerstache.",
    location: "kenya",
    duration: 20,
    price: 3300,
  },
];
