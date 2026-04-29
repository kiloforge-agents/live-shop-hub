export const dynamic = "force-static";

export function GET() {
  const manifest = {
    name: "LiveShopHub — Live commerce for makers",
    short_name: "LiveShopHub",
    description:
      "Host live shopping streams and let buyers tap to purchase instantly.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf7",
    theme_color: "#fafaf7",
    orientation: "portrait",
    categories: ["shopping", "social", "lifestyle"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any maskable" },
    ],
    shortcuts: [
      { name: "Browse live streams", url: "/" },
      { name: "Go live", url: "/sell" },
    ],
  };
  return Response.json(manifest);
}
