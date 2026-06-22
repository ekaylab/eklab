import Image from "next/image";

const services = [
  {
    title: "홈페이지·소개 사이트",
    description:
      "회사 소개, 브랜드 페이지, 개인 포트폴리오 — 보여주고 싶은 걸 깔끔하고 보기 좋게 담아 드려요.",
  },
  {
    title: "주문·결제·예약 시스템",
    description:
      "주문·결제·예약·회원 관리를 방문자가 사이트에서 직접. 확인 메일까지 자동으로 나가게 해 드려요.",
  },
  {
    title: "봇·업무 자동화",
    description:
      "반복하던 작업을 대신 돌리는 프로그램, 채팅 봇, 데이터 자동 수집 — 손 많이 가던 일을 컴퓨터가 대신 처리하게 만들어요.",
  },
  {
    title: "서버 설치·운영",
    description:
      "사이트가 24시간 안 끊기고 빠르게 열리도록, 어려운 뒷단 관리는 제가 다 맡아요. 본업에만 신경 쓰세요.",
  },
  {
    title: "검색 노출·방문자 분석",
    description:
      "네이버·구글에 잘 나오게(SEO) 사람을 모으고, 누가 얼마나 들어오는지·어디서 빠져나가는지 분석해서 매출 늘릴 방법까지 같이 찾아 드려요.",
  },
  {
    title: "그 외 필요한 거 뭐든",
    description:
      "위에 없는 것도 괜찮아요. 만들고 싶은 게 있으면 일단 말씀해 주세요. 되는지 안 되는지부터 솔직하게 알려 드려요.",
  },
];

const portfolioItems = [
  {
    title: "이레비아 코리아",
    url: "https://eraybakorea.com",
    domain: "eraybakorea.com",
    description:
      "헤어 케어 브랜드 쇼핑몰. 온라인 결제부터 주문 메일 발송, 서버 배포까지 혼자 다 했어요.",
    image: "/portfolio/eraybakorea.png",
  },
  {
    title: "스마텔",
    url: "https://smartel.kr",
    domain: "smartel.kr",
    description: "알뜰폰 통신사 공식 웹사이트.",
    image: "/portfolio/smartel.png",
  },
  {
    title: "메디컬아이피",
    url: "https://medicalip.com",
    domain: "medicalip.com",
    description: "의료 AI 기술 회사 공식 웹사이트.",
    image: "/portfolio/medicalip.png",
  },
  {
    title: "혁본",
    url: "https://hyukbon.com",
    domain: "hyukbon.com",
    description: "부동산 분양 대행 회사 웹사이트.",
    image: "/portfolio/hyukbon.png",
  },
  {
    title: "신호숲",
    url: "https://sinhosup.com",
    domain: "sinhosup.com",
    description: "전기 시스템 진단 웹사이트.",
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
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
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

      <div className="relative min-h-screen">
        {/* Top bar */}
        <header className="mx-auto flex max-w-5xl items-center justify-between px-5 pt-8">
          <span className="font-display text-2xl font-bold tracking-tight">
            이케이랩<span className="text-tomato">.</span>
          </span>
          <span className="font-hand -rotate-3 text-lg text-ink-soft">
            1인 개발 공방
          </span>
        </header>

        <main className="mx-auto max-w-5xl px-5">
          {/* Hero */}
          <section className="relative pt-16 pb-24 md:pt-24 md:pb-32">
            <p className="rise font-hand mb-6 inline-block -rotate-2 rounded-full border-2 border-ink bg-gold px-4 py-1 text-lg">
              안녕하세요, 임익환입니다 👋
            </p>
            <h1 className="rise font-display text-5xl leading-[1.1] font-bold tracking-tight md:text-7xl">
              필요한 거,
              <br />
              <span className="text-tomato">제대로</span> 만들어
              <br />
              드릴게요.
            </h1>
            <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
              회사 소개 사이트, 온라인 쇼핑몰, 예약·주문 시스템, 업무 자동화까지
              — 웹으로 만들 수 있는 건 웬만하면 다 만들어요. 만들고 나서도 옆에서
              챙겨 드려요.
            </p>

            <div className="rise mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-ink bg-tomato px-7 py-3.5 text-lg font-bold text-paper shadow-[6px_6px_0_0_var(--ink)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_0_var(--ink)] active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0_0_var(--ink)]"
              >
                문의하기
                <span aria-hidden>→</span>
              </a>
              <span className="font-hand text-lg text-ink-soft">
                세금계산서 발행도 됩니다
              </span>
            </div>
          </section>

          {/* Services */}
          <section className="border-t-2 border-ink py-20">
            <div className="mb-12">
              <p className="font-mono mb-2 text-sm tracking-[0.25em] text-tomato">
                No. 01
              </p>
              <h2 className="font-display text-3xl font-bold md:text-5xl">
                이런 걸 만들어요
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className="group flex gap-5 border-2 border-ink bg-paper-2 p-7 shadow-[6px_6px_0_0_var(--ink)] transition-all hover:-translate-y-1 hover:shadow-[6px_10px_0_0_var(--ink)]"
                >
                  <span className="font-display shrink-0 text-3xl font-bold text-tomato">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display mb-2 text-xl font-bold">
                      {service.title}
                    </h3>
                    <p className="leading-relaxed text-ink-soft">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Portfolio */}
          <section className="border-t-2 border-ink py-20">
            <div className="mb-4">
              <p className="font-mono mb-2 text-sm tracking-[0.25em] text-tomato">
                No. 02
              </p>
              <h2 className="font-display text-3xl font-bold md:text-5xl">
                이런 걸 만들었어요
              </h2>
            </div>
            <p className="font-hand mb-12 text-xl text-ink-soft">
              전부 지금도 잘 돌아가고 있는 사이트예요.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item, i) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group border-2 border-ink bg-paper-2 shadow-[6px_6px_0_0_var(--ink)] transition-all hover:-translate-y-1 hover:shadow-[6px_10px_0_0_var(--ink)] ${
                    i % 2 === 0 ? "md:rotate-[-0.6deg]" : "md:rotate-[0.6deg]"
                  } hover:rotate-0`}
                >
                  <div className="relative h-48 w-full overflow-hidden border-b-2 border-ink bg-paper">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-baseline justify-between gap-2">
                      <h3 className="font-display text-lg font-bold">
                        {item.title}
                      </h3>
                      <span className="font-mono text-xs text-ink-soft">
                        ↗
                      </span>
                    </div>
                    <p className="mb-3 font-mono text-xs text-ink-soft">
                      {item.domain}
                    </p>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="border-t-2 border-ink py-20">
            <div className="border-2 border-ink bg-forest p-10 text-paper shadow-[8px_8px_0_0_var(--ink)] md:p-14">
              <div className="mb-2">
                <p className="font-mono mb-2 text-sm tracking-[0.25em] text-gold">
                  No. 03
                </p>
                <h2 className="font-display text-3xl font-bold md:text-5xl">
                  한번 얘기해 볼까요?
                </h2>
              </div>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-paper/85">
                만들고 싶은 걸 편하게 적어 보내 주세요. 예산이 정해져 있으면 같이
                알려 주시면, 거기 맞춰 정직하게 방법을 찾아 드려요.
              </p>
              <p className="font-hand mt-3 text-lg text-gold">
                메일함은 24시간 열려 있어요
              </p>

              <a
                href="mailto:ekankr2@gmail.com"
                className="mt-8 inline-flex items-center gap-3 border-2 border-ink bg-gold px-7 py-3.5 text-lg font-bold text-ink shadow-[6px_6px_0_0_var(--ink)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_0_var(--ink)] active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0_0_var(--ink)]"
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
          </section>

          {/* Footer */}
          <footer className="border-t-2 border-ink py-10 font-mono text-xs leading-relaxed text-ink-soft">
            <p>이케이랩 · 대표 임익환 · 사업자등록번호 520-28-02146</p>
            <p>경기광주세무서장 · ekankr2@gmail.com</p>
            <p className="mt-3">© {new Date().getFullYear()} 이케이랩</p>
          </footer>
        </main>
      </div>
    </>
  );
}
