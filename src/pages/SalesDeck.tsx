import { CheckCircle2 } from "lucide-react";

const SalesDeck = () => {
  return (
    <div className="sales-deck bg-white text-gray-900 min-h-screen">
      {/* Print styles */}
      <style>{`
        @media print {
          body { 
            background: white !important; 
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .sales-deck { 
            background: white !important; 
          }
          .slide { 
            page-break-after: always; 
            page-break-inside: avoid;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .slide:last-child { 
            page-break-after: auto; 
          }
          .no-print { 
            display: none !important; 
          }
          .print-bg {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
        @page {
          size: A4 landscape;
          margin: 0.5in;
        }
      `}</style>

      {/* Print instructions banner */}
      <div className="no-print bg-purple-600 text-white py-3 px-4 text-center sticky top-0 z-50">
        <p className="text-sm">
          <strong>To save as PDF:</strong> Press Ctrl+P (Cmd+P on Mac) → Select "Save as PDF" → Choose Landscape orientation
        </p>
      </div>

      {/* SLIDE 1: Title */}
      <div className="slide p-12 flex flex-col justify-center items-center text-center">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-purple-700">Elara</h1>
          <p className="text-2xl text-gray-600">Kosovo's Employer of Record</p>
          <div className="h-1 w-24 bg-purple-600 mx-auto my-8"></div>
          <p className="text-xl max-w-2xl">
            Hire full-time employees in Kosovo in 7–14 days.<br />
            No entity required. Full compliance guaranteed.
          </p>
          <div className="mt-8 inline-block bg-purple-100 print-bg px-6 py-3 rounded-lg">
            <span className="text-purple-700 font-bold text-2xl">£250–£450</span>
            <span className="text-gray-600 ml-2">per employee/month</span>
          </div>
        </div>
      </div>

      {/* SLIDE 2: The Problem */}
      <div className="slide p-12">
        <h2 className="text-4xl font-bold text-purple-700 mb-8">The Problem</h2>
        <p className="text-xl text-gray-600 mb-8">Hiring internationally is broken.</p>
        <div className="grid grid-cols-2 gap-6">
          {[
            { title: "Entity setup takes 6–12 months", desc: "Legal fees, ongoing compliance burden, local accountants needed" },
            { title: "Contractor misclassification risk", desc: "IR35 and EU directives mean penalties, back-taxes, and legal exposure" },
            { title: "HR overhead scales with headcount", desc: "Unfamiliar labor laws, tax codes, and termination rules" },
            { title: "UK hiring costs £3–4k/month", desc: "Fully-loaded costs are 5–6x higher than comparable talent elsewhere" },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 print-bg p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SLIDE 3: The Solution */}
      <div className="slide p-12">
        <h2 className="text-4xl font-bold text-purple-700 mb-4">The Solution</h2>
        <p className="text-xl text-gray-600 mb-8">Elara becomes the legal employer. You manage the work.</p>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-purple-50 print-bg p-6 rounded-lg border border-purple-200">
            <h3 className="font-bold text-lg mb-4 text-purple-700">What Elara Handles</h3>
            <ul className="space-y-2">
              {["Employment contracts & legal employer status", "Payroll processing & tax filings", "Social contributions & compliance", "Onboarding & offboarding", "HR admin & documentation"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 print-bg p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-4">What You Handle</h3>
            <ul className="space-y-2">
              {["Day-to-day work management", "Performance reviews", "Team communication", "Compensation strategy", "Project assignments"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-purple-700">Result: Full-time employees, zero compliance headaches.</p>
        </div>
      </div>

      {/* SLIDE 4: Why Kosovo? */}
      <div className="slide p-12">
        <h2 className="text-4xl font-bold text-purple-700 mb-8">Why Kosovo?</h2>
        <p className="text-xl text-gray-600 mb-8">Europe's hidden talent advantage.</p>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gray-50 print-bg p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-4">🎓 Young, Educated</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Europe's youngest population</li>
              <li>• 30%+ graduates in STEM</li>
              <li>• Strong C-1 English & German</li>
            </ul>
          </div>
          <div className="bg-gray-50 print-bg p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-4">🌍 EU Time Zone</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• GMT+1 (Central European)</li>
              <li>• 2–3hr flight from EU hubs</li>
              <li>• Uses Euro (€) currency</li>
            </ul>
          </div>
          <div className="bg-gray-50 print-bg p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-4">💰 50% Cost Savings</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Support: €650/mo</li>
              <li>• SDR: €700–800/mo</li>
              <li>• Engineer: €1,300/mo</li>
            </ul>
          </div>
        </div>
      </div>

      {/* SLIDE 5: Market Opportunity */}
      <div className="slide p-12">
        <h2 className="text-4xl font-bold text-purple-700 mb-8">Market Opportunity</h2>
        <p className="text-xl text-gray-600 mb-8">The EOR market is exploding.</p>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-purple-100 print-bg p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-purple-700">$5B → $20B</p>
              <p className="text-gray-600 mt-2">Global EOR market growth by 2036</p>
            </div>
            <div className="bg-purple-100 print-bg p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-purple-700">14.8% CAGR</p>
              <p className="text-gray-600 mt-2">One of fastest-growing HR categories</p>
            </div>
          </div>
          <div className="bg-gray-50 print-bg p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-4">Key Drivers</h3>
            <ul className="space-y-3">
              {[
                "Remote work is the default",
                "IR35 & EU contractor crackdowns",
                "Companies need speed + compliance",
                "Few EORs specialize in Kosovo",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* SLIDE 6: How It Works */}
      <div className="slide p-12">
        <h2 className="text-4xl font-bold text-purple-700 mb-8">How It Works</h2>
        <p className="text-xl text-gray-600 mb-8">Three steps. 7–14 days to hire.</p>
        <div className="grid grid-cols-3 gap-6">
          {[
            { step: "01", title: "Define the Role", time: "Day 1", desc: "Share job requirements, compensation, and timeline. We guide you through Kosovo's talent landscape." },
            { step: "02", title: "We Employ & Onboard", time: "Days 7–14", desc: "Elara becomes the legal employer. We handle contracts, tax registration, and compliant onboarding." },
            { step: "03", title: "You Manage, We Run Payroll", time: "Ongoing", desc: "You manage day-to-day work. We handle monthly payroll, tax filings, and ongoing compliance." },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 print-bg p-6 rounded-lg border border-gray-200 relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-purple-600 print-bg text-white rounded-lg flex items-center justify-center font-bold">
                {item.step}
              </div>
              <div className="mt-4">
                <span className="inline-block bg-purple-100 print-bg text-purple-700 text-sm px-3 py-1 rounded-full mb-3">{item.time}</span>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-purple-700">No entity. No legal exposure. No HR overhead.</p>
        </div>
      </div>

      {/* SLIDE 7: Pricing */}
      <div className="slide p-12">
        <h2 className="text-4xl font-bold text-purple-700 mb-4">Pricing</h2>
        <p className="text-xl text-gray-600 mb-8">Simple. Transparent. No hidden fees.</p>
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 print-bg p-8 rounded-lg border border-gray-200">
            <h3 className="font-bold text-xl mb-2">Growth</h3>
            <p className="text-4xl font-bold text-purple-700 mb-6">£250<span className="text-lg text-gray-500 font-normal">/month</span></p>
            <ul className="space-y-2">
              {["Legal employment contracts", "Payroll & tax filings", "Social contributions", "Compliant onboarding"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-purple-50 print-bg p-8 rounded-lg border-2 border-purple-300 relative">
            <span className="absolute -top-3 right-4 bg-purple-600 print-bg text-white text-sm px-3 py-1 rounded-full">Popular</span>
            <h3 className="font-bold text-xl mb-2">Enterprise</h3>
            <p className="text-4xl font-bold text-purple-700 mb-6">£450<span className="text-lg text-gray-500 font-normal">/month</span></p>
            <ul className="space-y-2">
              {["Everything in Growth", "Priority onboarding (7 days)", "Benefits administration", "Dedicated account manager", "Quarterly compliance reviews", "Equipment leasing", "Workforce analytics"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600">No long-term contracts. Cancel anytime. No exit penalties.</p>
        </div>
      </div>

      {/* SLIDE 8: Salary Benchmarks */}
      <div className="slide p-12">
        <h2 className="text-4xl font-bold text-purple-700 mb-8">Salary Benchmarks</h2>
        <p className="text-xl text-gray-600 mb-8">Typical Kosovo gross salaries by role.</p>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-purple-100 print-bg">
              <th className="text-left p-4 font-bold">Role</th>
              <th className="text-left p-4 font-bold">Kosovo (Gross/mo)</th>
              <th className="text-left p-4 font-bold">UK Equivalent</th>
              <th className="text-left p-4 font-bold">Savings</th>
            </tr>
          </thead>
          <tbody>
            {[
              { role: "Customer Support Rep", kosovo: "€650", uk: "£2,500+", savings: "~75%" },
              { role: "SDR / Inside Sales", kosovo: "€700–800", uk: "£3,000+", savings: "~75%" },
              { role: "Account Executive", kosovo: "€900–1,000", uk: "£4,000+", savings: "~75%" },
              { role: "Customer Success Manager", kosovo: "€900–1,000", uk: "£3,500+", savings: "~70%" },
              { role: "Software Engineer", kosovo: "€1,300", uk: "£5,000+", savings: "~75%" },
              { role: "Product Manager", kosovo: "€1,700", uk: "£6,000+", savings: "~70%" },
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50 print-bg" : "bg-white"}>
                <td className="p-4 border-b border-gray-200">{row.role}</td>
                <td className="p-4 border-b border-gray-200 font-semibold text-purple-700">{row.kosovo}</td>
                <td className="p-4 border-b border-gray-200 text-gray-500">{row.uk}</td>
                <td className="p-4 border-b border-gray-200 text-green-600 font-semibold">{row.savings}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-sm text-gray-500">Note: German-speaking and night-shift roles command a premium.</p>
      </div>

      {/* SLIDE 9: Why Elara */}
      <div className="slide p-12">
        <h2 className="text-4xl font-bold text-purple-700 mb-8">Why Elara?</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            { icon: "⚡", title: "Fast", desc: "7–14 day onboarding vs 6–12 months for entity setup" },
            { icon: "🛡️", title: "Compliant", desc: "Eliminate misclassification risk with proper employment" },
            { icon: "📋", title: "End-to-End", desc: "Payroll, tax, contracts handled automatically" },
            { icon: "📈", title: "Scalable", desc: "Grow headcount without growing HR team" },
            { icon: "🌍", title: "Nearshore", desc: "EU timezone, strong English, real-time collaboration" },
            { icon: "🇽🇰", title: "Kosovo-First", desc: "Deep local knowledge and relationships" },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 print-bg p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SLIDE 10: CTA */}
      <div className="slide p-12 flex flex-col justify-center items-center text-center">
        <div className="space-y-6 max-w-2xl">
          <h2 className="text-4xl font-bold text-purple-700">Ready to Build Your Kosovo Team?</h2>
          <p className="text-xl text-gray-600">
            Book a 30-minute call to discuss your hiring needs and how Elara can help.
          </p>
          <div className="bg-purple-100 print-bg p-8 rounded-lg mt-8">
            <p className="font-bold text-lg mb-4">Book a 30-min Hiring Plan Call</p>
            <p className="text-purple-700 font-mono">calendar.app.google/ZgtedFMv5cXSefYU9</p>
          </div>
          <div className="flex justify-center gap-8 mt-8 text-gray-600">
            <span>📅 Free consultation</span>
            <span>⏱️ 30 minutes</span>
            <span>✅ No commitment</span>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-500">www.elara.co • hello@elara.co</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesDeck;
