import Link from "next/link";

const mockUrls=["https://iauq6fdic2.ufs.sh/f/6FjQeyfANohveewM7NWPoYWGFRrMmi4hvwTLE5NCktjIHcQA", "https://iauq6fdic2.ufs.sh/f/6FjQeyfANohvlCBAbRHGzB0xuEkJDh174oVqdWmvb2Tg6Pr5", "https://iauq6fdic2.ufs.sh/f/6FjQeyfANohvyHasBy4spyS8TLOzPX0KYD6lnmgkiv7cRBoe"]
const mockImages=mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return(
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
        <div key={image.id} className="w-48">
          <img
          src={image.url}
          alt="image"/>
        </div>
        ))}
        </div>
    </main>
  );
}
