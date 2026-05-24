import Image from "next/image";

const services = [
  {
    title: "보기 좋은 홈페이지 제작",
    description: "휴대폰·PC·태블릿 어디서 봐도 잘 보이는 회사 홈페이지를 만들어 드립니다.",
    icon: "💻",
  },
  {
    title: "주문·예약·회원관리 시스템",
    description: "온라인 주문, 예약 접수, 회원 가입·관리 등 사업에 필요한 기능을 직접 개발해 드립니다.",
    icon: "⚙️",
  },
  {
    title: "서버 설치 및 운영 관리",
    description: "사이트가 안 끊기고 빠르게 돌아가도록 서버를 설치하고, 도메인·보안 인증서까지 챙겨 드립니다.",
    icon: "☁️",
  },
  {
    title: "네이버·구글 검색 노출",
    description: "회사 이름을 검색하면 잘 나오게, 손님이 더 찾아오게 검색 최적화를 도와 드립니다.",
    icon: "📈",
  },
];

const processSteps = [
  {
    step: "01",
    title: "전화·이메일 상담",
    description: "어떤 사이트가 필요하신지 편하게 말씀해 주세요. 상담은 무료입니다.",
  },
  {
    step: "02",
    title: "견적서 작성",
    description: "필요한 기능, 제작 기간, 비용을 정리해서 견적서로 알려 드립니다.",
  },
  {
    step: "03",
    title: "제작 진행",
    description: "일주일에 한 번 진행 상황을 보여 드리고, 의견을 반영하며 만들어 드립니다.",
  },
  {
    step: "04",
    title: "오픈 및 사후 관리",
    description: "완성된 사이트를 오픈해 드리고, 이후 문제가 생기면 바로 도와 드립니다.",
  },
];

const portfolioItems = [
  {
    title: "Erayba Korea",
    url: "https://eraybakorea.com",
    domain: "eraybakorea.com",
    description: "헤어 케어 브랜드 쇼핑몰 - 온라인 결제, 주문 이메일 발송, 서버 배포까지 직접 구축",
    icon: "🧴",
    image: "/portfolio/eraybakorea.png",
  },
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
    telephone: "+82-10-7276-7477",
    url: "https://eklab.kr",
    sameAs: ["https://ekankr2.github.io/"],
    areaServed: "KR",
    serviceType: "웹 개발 프리랜스 서비스",
    founder: {
      "@type": "Person",
      name: "임익환",
    },
    taxID: "520-28-02146",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "웹 개발 서비스",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
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
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-2xl">
            회사·가게 홈페이지부터
            <br className="md:hidden" />
            온라인 주문·예약 시스템까지
            <br />
            <span className="font-semibold text-black dark:text-white">
              처음부터 끝까지 한 사람이 책임지고 만들어 드립니다
            </span>
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-base">
            {["1인 책임 개발", "네이버·구글 검색 노출", "세금계산서 발행", "사후 관리"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-300 bg-white/60 px-3 py-1 text-zinc-700 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-24">
          <h2 className="mb-4 text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
            이런 일을 해 드립니다
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-zinc-600 dark:text-zinc-400 md:text-lg">
            어려운 기술 용어 없이, 사장님께 필요한 결과물만 알려 드립니다.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-blue-500 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-500"
              >
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
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

        {/* Process Section */}
        <section className="mb-24">
          <h2 className="mb-4 text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
            진행 순서
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-zinc-600 dark:text-zinc-400 md:text-lg">
            상담부터 오픈까지, 모든 과정을 친절하게 안내해 드립니다.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-3 text-sm font-bold text-blue-500">
                  {step.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mx-auto max-w-2xl rounded-3xl border border-zinc-200 bg-gradient-to-br from-blue-50 to-purple-50 p-12 text-center shadow-xl dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-800">
          <h2 className="mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl">
            프로젝트 문의
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            프로젝트에 대해 논의하고 싶으시거나 견적이 필요하시다면
            <br />
            언제든지 연락 주세요. 세금 계산서 발행도 가능합니다.
          </p>
          <p className="mb-8 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            프로젝트 규모와 기능에 따라 비용이 달라집니다.
            <br />
            예산 범위를 알려 주시면 맞춤 견적을 드립니다.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+821072767477"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:w-auto"
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              010-7276-7477
            </a>
            <a
              href="mailto:ekankr2@gmail.com"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-zinc-300 bg-white px-8 py-4 text-lg font-semibold text-zinc-800 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 sm:w-auto"
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
              이메일 보내기
            </a>
          </div>
          <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
            상담 가능 시간: 평일 10:00 - 19:00
          </p>
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
