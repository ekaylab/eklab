import Image from "next/image";

const portfolioItems = [
  {
    title: "Smartel",
    url: "https://smartel.kr",
    domain: "smartel.kr",
    description: "알뜰폰 통신사 공식 웹사이트 개발",
    icon: "🌐",
    image: "/portfolio/smartel.png",
  },
  {
    title: "MEDICAL IP",
    url: "https://medicalip.com",
    domain: "medicalip.com",
    description: "의료 AI 기술 회사의 공식 웹사이트 개발",
    icon: "🏥",
    image: "/portfolio/medicalip.png",
  },
  {
    title: "혁본",
    url: "https://hyukbon.com",
    domain: "hyukbon.com",
    description: "부동산 분양 대행 회사의 웹사이트 개발",
    icon: "🏢",
    image: "/portfolio/hyukbon.png",
  },
  {
    title: "Sinhosup",
    url: "https://sinhosup.com",
    domain: "sinhosup.com",
    description: "전기 시스템 진단 웹사이트 개발",
    icon: "⚡",
    image: "/portfolio/sinhosup.png",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "이케이랩",
    alternateName: "EKLab",
    legalName: "이케이랩",
    description: "당신의 아이디어를 현실로 만드는 웹 개발 파트너입니다",
    email: "ekankr2@gmail.com",
    url: "https://eklab.kr",
    sameAs: ["https://ekankr2.github.io/"],
    areaServed: "KR",
    serviceType: "웹 개발 프리랜스 서비스",
    founder: {
      "@type": "Person",
      name: "임익환",
    },
    taxID: "520-28-02146",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-black">
        <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <section className="mb-24 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-black dark:text-white md:text-7xl">
            이케이랩
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
            당신의 아이디어를 현실로 만드는 웹 개발 파트너입니다
          </p>
        </section>

        {/* Portfolio Section */}
        <section className="mb-24">
          <h2 className="mb-12 text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
            포트폴리오
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {portfolioItems.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:border-blue-500 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-500"
              >
                {/* 이미지 미리보기 */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-6xl">
                      {item.icon}
                    </div>
                  )}
                </div>
                
                {/* 카드 내용 */}
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                      {item.title}
                    </h3>
                    <svg
                      className="h-5 w-5 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
                    {item.domain}
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mx-auto max-w-2xl rounded-3xl border border-zinc-200 bg-gradient-to-br from-blue-50 to-purple-50 p-12 text-center shadow-xl dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-800">
          <h2 className="mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl">
            프로젝트 문의
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            프로젝트에 대해 논의하고 싶으시거나 견적이 필요하시다면
            <br />
            언제든지 연락 주세요. 세금 계산서 발행도 가능합니다.
          </p>
          <a
            href="mailto:ekankr2@gmail.com"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            ekankr2@gmail.com
          </a>
        </section>

        {/* Footer */}
        <footer className="mt-24 text-center text-sm text-zinc-500 dark:text-zinc-500 space-y-2">
          <div>
            <p>이케이랩 | 사업자등록번호: 520-28-02146 | 임익환</p>
            <p>경기광주세무서장 | 이메일: ekankr2@gmail.com</p>
          </div>
          <p className="pt-4">© {new Date().getFullYear()} 이케이랩. All rights reserved.</p>
        </footer>
      </main>
    </div>
    </>
  );
}
