export type Product = {
  id: string;
  name: string;
  price: number;
  compareAt?: number;
  image: string;
  badge?: string;
  stock: number;
};

export type Stream = {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: "live" | "upcoming" | "ended";
  startsAt?: string;
  thumbnail: string;
  cover: string;
  viewerCount: number;
  hearts: number;
  seller: {
    handle: string;
    name: string;
    avatar: string;
    rating: number;
    sales: number;
    location: string;
    bio: string;
  };
  description: string;
  products: Product[];
  tags: string[];
};

const sellers = {
  marlo: {
    handle: "marlo.studio",
    name: "Marlo Yuen",
    avatar: "M",
    rating: 4.9,
    sales: 2412,
    location: "Brooklyn, NY",
    bio: "Hand-thrown stoneware, fired weekly in my studio in Bushwick. Each piece is one of a kind.",
  },
  rosa: {
    handle: "rosa.thrifts",
    name: "Rosa Delacroix",
    avatar: "R",
    rating: 4.8,
    sales: 1903,
    location: "Austin, TX",
    bio: "Curated 70s & 80s vintage. Sized fairly, photographed honestly. No filters, no fluff.",
  },
  kenji: {
    handle: "kenji.knives",
    name: "Kenji Watanabe",
    avatar: "K",
    rating: 5.0,
    sales: 612,
    location: "Portland, OR",
    bio: "Forged carbon-steel kitchen knives. Third-generation bladesmith, working alone.",
  },
  amani: {
    handle: "amani.beads",
    name: "Amani Okafor",
    avatar: "A",
    rating: 4.9,
    sales: 4180,
    location: "Lagos, NG",
    bio: "Beadwork, cowrie jewelry, and woven raffia. Sourced and made within 50km of my studio.",
  },
  juno: {
    handle: "juno.plants",
    name: "Juno Park",
    avatar: "J",
    rating: 4.7,
    sales: 8721,
    location: "Seoul, KR",
    bio: "Rare aroids, propagated in-house. Shipping worldwide with phyto certs.",
  },
  cleo: {
    handle: "cleo.scents",
    name: "Cleo Almeida",
    avatar: "C",
    rating: 4.9,
    sales: 1567,
    location: "Lisbon, PT",
    bio: "Small-batch perfumery. Natural isolates, no synthetics. 30ml flacons only.",
  },
};

export const streams: Stream[] = [
  {
    id: "1",
    slug: "stoneware-mug-drop-no-14",
    title: "Stoneware Mug Drop No. 14 — Reactive Glaze Edition",
    category: "Ceramics",
    status: "live",
    thumbnail:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&auto=format&fit=crop&q=70",
    cover:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1600&auto=format&fit=crop&q=80",
    viewerCount: 1247,
    hearts: 18432,
    seller: sellers.marlo,
    description:
      "Pulling 14 mugs straight from the kiln. Reactive iron glaze on speckled clay body. Each one fires differently — first to tap buys.",
    tags: ["handmade", "ceramic", "small-batch"],
    products: [
      {
        id: "p1",
        name: "Reactive Iron Mug — 12oz",
        price: 64,
        compareAt: 84,
        image:
          "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&auto=format&fit=crop&q=70",
        badge: "Live drop",
        stock: 6,
      },
      {
        id: "p2",
        name: "Speckled Cream Tumbler",
        price: 48,
        image:
          "https://images.unsplash.com/photo-1525974160448-038dacadcc71?w=600&auto=format&fit=crop&q=70",
        stock: 11,
      },
      {
        id: "p3",
        name: "Pour-over Carafe — Indigo",
        price: 132,
        compareAt: 158,
        image:
          "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=600&auto=format&fit=crop&q=70",
        badge: "1 of 1",
        stock: 1,
      },
    ],
  },
  {
    id: "2",
    slug: "vintage-denim-haul-fall-23",
    title: "Vintage Denim Haul — 80s Levi's, Wrangler, Lee",
    category: "Vintage",
    status: "live",
    thumbnail:
      "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=900&auto=format&fit=crop&q=70",
    cover:
      "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=1600&auto=format&fit=crop&q=80",
    viewerCount: 892,
    hearts: 9821,
    seller: sellers.rosa,
    description:
      "Flat-laying 40+ pieces tonight. All washed, measured, and modeled. Sizes 24 through 38.",
    tags: ["vintage", "denim", "thrift"],
    products: [
      {
        id: "p4",
        name: "Levi's 501 — 1986 Selvedge, W30",
        price: 188,
        image:
          "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop&q=70",
        badge: "1 of 1",
        stock: 1,
      },
      {
        id: "p5",
        name: "Wrangler Cowboy Cut — W34",
        price: 94,
        image:
          "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&auto=format&fit=crop&q=70",
        stock: 1,
      },
      {
        id: "p6",
        name: "Lee Storm Rider Jacket — M",
        price: 245,
        compareAt: 320,
        image:
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=70",
        badge: "Collector",
        stock: 1,
      },
    ],
  },
  {
    id: "3",
    slug: "hand-forged-petty-knife-batch-9",
    title: "Hand-forged Petty Knife — Batch 9",
    category: "Kitchen",
    status: "live",
    thumbnail:
      "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=900&auto=format&fit=crop&q=70",
    cover:
      "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=1600&auto=format&fit=crop&q=80",
    viewerCount: 412,
    hearts: 3204,
    seller: sellers.kenji,
    description:
      "Three petty knives finished today. White #2 carbon steel, walnut handles. I'll demo each on a tomato.",
    tags: ["knives", "kitchen", "carbon-steel"],
    products: [
      {
        id: "p7",
        name: "Petty 150mm — Walnut",
        price: 320,
        image:
          "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=600&auto=format&fit=crop&q=70",
        badge: "1 of 3",
        stock: 1,
      },
      {
        id: "p8",
        name: "Honing Strop — Leather",
        price: 48,
        image:
          "https://images.unsplash.com/photo-1611791484670-ce19b801d192?w=600&auto=format&fit=crop&q=70",
        stock: 8,
      },
    ],
  },
  {
    id: "4",
    slug: "rare-aroid-auction-monstera-thai",
    title: "Rare Aroid Auction — Thai Constellation Monstera",
    category: "Plants",
    status: "upcoming",
    startsAt: "Tonight 8:30pm KST",
    thumbnail:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=900&auto=format&fit=crop&q=70",
    cover:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=1600&auto=format&fit=crop&q=80",
    viewerCount: 0,
    hearts: 412,
    seller: sellers.juno,
    description:
      "Live auction. Three top-cuts of mother plant, each rooted. Phyto cert included for international buyers.",
    tags: ["plants", "auction", "rare"],
    products: [
      {
        id: "p9",
        name: "Thai Constellation — Top Cut",
        price: 480,
        image:
          "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&auto=format&fit=crop&q=70",
        badge: "Auction",
        stock: 3,
      },
    ],
  },
  {
    id: "5",
    slug: "cowrie-and-brass-friday-restock",
    title: "Cowrie & Brass — Friday Restock",
    category: "Jewelry",
    status: "live",
    thumbnail:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=900&auto=format&fit=crop&q=70",
    cover:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1600&auto=format&fit=crop&q=80",
    viewerCount: 2031,
    hearts: 27411,
    seller: sellers.amani,
    description:
      "Fresh restock of cowrie chokers, brass bangles, and waist beads. Modeling each piece live.",
    tags: ["jewelry", "handmade", "afro-modern"],
    products: [
      {
        id: "p10",
        name: "Cowrie Choker — Single Strand",
        price: 38,
        image:
          "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&auto=format&fit=crop&q=70",
        stock: 24,
      },
      {
        id: "p11",
        name: "Brass Stack Bangles (Set of 5)",
        price: 72,
        compareAt: 95,
        image:
          "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=600&auto=format&fit=crop&q=70",
        badge: "Bestseller",
        stock: 15,
      },
      {
        id: "p12",
        name: "Waist Beads — Custom Sized",
        price: 28,
        image:
          "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&auto=format&fit=crop&q=70",
        stock: 40,
      },
    ],
  },
  {
    id: "6",
    slug: "perfumery-q-and-a-tonka-week",
    title: "Perfumery Q&A — Tonka Week",
    category: "Fragrance",
    status: "upcoming",
    startsAt: "Sat 7pm WET",
    thumbnail:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=900&auto=format&fit=crop&q=70",
    cover:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1600&auto=format&fit=crop&q=80",
    viewerCount: 0,
    hearts: 1820,
    seller: sellers.cleo,
    description:
      "Talking through tonka bean as a base note. Sampling four blends I'm developing — one will be released.",
    tags: ["fragrance", "natural", "small-batch"],
    products: [
      {
        id: "p13",
        name: "Tonka & Smoke — 30ml",
        price: 145,
        image:
          "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=70",
        stock: 18,
      },
      {
        id: "p14",
        name: "Discovery Set — 4× 2ml",
        price: 32,
        image:
          "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&auto=format&fit=crop&q=70",
        badge: "New",
        stock: 60,
      },
    ],
  },
];

export function getStreamBySlug(slug: string) {
  return streams.find((s) => s.slug === slug);
}

export function getLiveStreams() {
  return streams.filter((s) => s.status === "live");
}

export function getUpcomingStreams() {
  return streams.filter((s) => s.status === "upcoming");
}

export const categories = [
  "All",
  "Ceramics",
  "Vintage",
  "Kitchen",
  "Plants",
  "Jewelry",
  "Fragrance",
];

export function formatPrice(cents: number) {
  return `$${cents.toFixed(0)}`;
}

export function formatViewers(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return n.toString();
}
