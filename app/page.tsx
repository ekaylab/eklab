import Image from "next/image";

const services = [
  {
    title: "보기 좋은 홈페이지 제작",
    description:
      "휴대폰·PC·태블릿 어디서 봐도 잘 보이는 회사 홈페이지를 만들어 드립니다.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
        />
        <path strokeLinecap="round" d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "주문·예약·회원관리 시스템",
    description:
      "온라인 주문, 예약 접수, 회원 가입·관리 등 사업에 필요한 기능을 직접 개발해 드립니다.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "서버 설치 및 운영 관리",
    description:
      "사이트가 안 끊기고 빠르게 돌아가도록 서버를 설치하고, 도메인·보안 인증서까지 챙겨 드립니다.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
  },
  {
    title: "네이버·구글 검색 노출",
    description:
      "회사 이름을 검색하면 잘 나오게, 손님이 더 찾아오게 검색 최적화를 도와 드립니다.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.2-5.2M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
];

const portfolioItems = [
  {
    title: "이레비아 코리아",
    url: "https://eraybakorea.com",
    domain: "eraybakorea.com",
    description:
      "헤어 케어 브랜드 쇼핑몰 - 온라인 결제, 주문 이메일 발송, 서버 배포까지 직접 구축",
    image: "/portfolio/eraybakorea.png",
  },
  {
    title: "스마텔",
    url: "https://smartel.kr",
    domain: "smartel.kr",
    description: "알뜰폰 통신사 공식 웹사이트 개발",
    image: "/portfolio/smartel.png",
  },
  {
    title: "메디컬아이피",
    url: "https://medicalip.com",
    domain: "medicalip.com",
    description: "의료 AI 기술 회사의 공식 웹사이트 개발",
    image: "/portfolio/medicalip.png",
  },
  {
    title: "혁본",
    url: "https://hyukbon.com",
    domain: "hyukbon.com",
    description: "부동산 분양 대행 회사의 웹사이트 개발",
    image: "/portfolio/hyukbon.png",
  },
  {
    title: "신호숲",
    url: "https://sinhosup.com",
    domain: "sinhosup.com",
    description: "전기 시스템 진단 웹사이트 개발",
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
      <div className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
        {/* Decorative background blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-900/30" />
          <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-900/30" />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-900/20" />
        </div>

        <main className="container mx-auto px-4 py-16 md:py-24">
          {/* Hero Section */}
          <section className="mb-28 text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-white md:text-7xl">
              홈페이지가
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                필요하신가요?
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
              회사 홈페이지, 온라인 쇼핑몰, 예약·주문 시스템까지
              <br className="hidden md:block" />
              한 사람이 끝까지 책임지고 만들고, 오픈 후 1년간 무료로 관리합니다.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
              세금계산서 발행 가능
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="tel:+821072767477"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 sm:w-auto"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                010-7276-7477
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-800 transition-all hover:scale-105 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 sm:w-auto"
              >
                이메일로 문의
              </a>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-28">
            <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
              이런 일을 합니다
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500"
                >
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/30">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Portfolio Section */}
          <section className="mb-28">
            <h2 className="mb-4 text-center text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
              지금까지 만든 사이트
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-slate-600 dark:text-slate-400 md:text-lg">
              실제 운영 중인 사이트입니다.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {item.domain}
                        </p>
                      </div>
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-12 text-center shadow-2xl shadow-blue-500/30"
          >
            <div className="absolute inset-0 -z-10 opacity-20">
              <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white blur-3xl" />
            </div>

            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              연락처
            </h2>
            <p className="mb-2 text-lg leading-relaxed text-blue-50">
              전화나 이메일, 편한 쪽으로 연락 주세요.
            </p>
            <p className="mb-8 text-sm leading-relaxed text-blue-100">
              프로젝트마다 규모와 기능이 달라 비용이 달라집니다.
              <br />
              예산을 알려 주시면 거기에 맞춰 견적을 드립니다.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="tel:+821072767477"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:w-auto"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                010-7276-7477
              </a>
              <a
                href="mailto:ekankr2@gmail.com"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur transition-all hover:scale-105 hover:bg-white/20 sm:w-auto"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                ekankr2@gmail.com
              </a>
            </div>
            <p className="mt-8 text-sm text-blue-100">
              평일 오전 10시 - 오후 7시
            </p>
          </section>

          {/* Footer */}
          <footer className="mt-24 text-center text-sm text-slate-500 dark:text-slate-500 space-y-2">
            <div className="space-y-1">
              <p>이케이랩 | 사업자등록번호: 520-28-02146 | 대표 임익환</p>
              <p>경기광주세무서장 | 이메일: ekankr2@gmail.com | 전화: 010-7276-7477</p>
            </div>
            <p className="pt-4">
              © {new Date().getFullYear()} 이케이랩. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
