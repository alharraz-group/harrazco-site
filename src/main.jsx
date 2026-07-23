import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft, Award, BadgeCheck, Building2, Check, ChevronLeft, Clock3,
  Globe2, HeartHandshake, Landmark, Mail, MapPin, Menu, Phone, Plane,
  ShieldCheck, Sparkles, UsersRound, X, MessageCircle, Send, ExternalLink,
  BriefcaseBusiness, Home, Headphones, ChevronDown
} from 'lucide-react';
import './styles.css';

const WHATSAPP = 'https://wa.me/249912404581';

const services = [
  {
    id: 'services-travel',
    key: 'travel',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1000&auto=format&fit=crop',
    category: 'سياحة دينية وترفيهية', icon: Plane,
    title: 'خدمات السفر والحج والعمرة',
    subtitle: 'رحلات إيمانية منظمة برعاية شاملة',
    description: 'نلتزم بتقديم أرقى مستويات الخدمة لضيوف الرحمن والمسافرين، مع توفير كافة سبل الراحة والأمان طوال فترة الحج والعمرة.',
    features: [
      'سكن فندقي VIP فاخر لا يتعدى 200 متر عن الحرم المكي الشريف.',
      'إشراف إداري وطبي متكامل ومرافق طوال فترة الحج والعمرة.',
      'تأمين تأشيرات الحج والعمرة والزيارات بأسرع الإجراءات الرسمية.',
      'حجز تذاكر الطيران على أفضل الخطوط الجوية وبأسعار تفضيلية.'
    ]
  },
  {
    id: 'services-visas',
    key: 'visas',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1000&auto=format&fit=crop',
    category: 'استقدام وتوظيف', icon: BriefcaseBusiness,
    title: 'التأشيرات والاستقدام الخارجي',
    subtitle: 'استقطاب الكفاءات وتسهيل المعاملات الدولية',
    description: 'نوفر حلول استقدام متكاملة للشركات والأفراد من مختلف الدول، بموثوقية عالية وإجراءات قانونية موثقة.',
    features: [
      'توفير عقود عمل رسمية وموثقة في دول الخليج العربي والشرق الأوسط.',
      'تسهيل معاملات تأشيرات العمل والزيارات التجارية والعائلية.',
      'تفويض واستقدام العمالة المنزلية والمهنية المؤهلة.',
      'تخليص وتوثيق المستندات والشهادات من السفارات والخارجية.'
    ]
  },
  {
    id: 'services-local',
    key: 'local',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
    category: 'معاملات حكومية', icon: Landmark,
    title: 'الخدمات المحلية وتجديد الإقامة',
    subtitle: 'حلول إدارية وتخليص معاملات متكاملة',
    description: 'نهتم بكافة الإجراءات القانونية والمستندية للوافدين والمقيمين والشركات لتسهيل العمل والاستقرار في البيئة الخليجية.',
    features: [
      'إصدار وتجديد الإقامات وبطاقات العمل للوافدين والمؤسسات.',
      'تخليص تأشيرات الزيارة العائلية وتأشيرات المرور والعودة.',
      'تعديل المهن ونقل الكفالات وفك الارتباط القانوني.',
      'متابعة وتسوية القضايا العمالية لدى مكاتب العمل والجهات المختصة.'
    ]
  },
  {
    id: 'services-realestate',
    key: 'realestate',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop',
    category: 'إعمار واستثمار', icon: Home,
    title: 'التطوير والتسويق العقاري',
    subtitle: 'استثمارات عقارية آمنة وواعدة',
    description: 'شريكك العقاري الموثوق في تخطيط، بيع، وشراء الأراضي والعقارات السكنية والاستثمارية برؤية مستقبلية واستراتيجية.',
    features: [
      'شراء وبيع الأراضي السكنية والزراعية والاستثمارية بعوائد ممتازة.',
      'تطوير وإعمار المجمعات السكنية والمباني التجارية الحديثة.',
      'تسجيل وترخيص العقارات وتوثيق الملكيات لدى السجل العقاري.',
      'تسويق المشاريع الاستثمارية والوساطة العقارية بنظام احترافي.'
    ]
  }
];

const branches = [
  {
    name: 'فرع بورتسودان', tag: 'المقر الرئيسي',
    address: 'سوق بورتسودان الكبير، تقاطع البلدية والشرق، السودان.',
    phone: '+249 112 705 718', hours: 'السبت - الخميس: 8:00 ص - 4:00 م',
    maps: 'https://maps.app.goo.gl/Yh5tK4hNyY8USjhN7',
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.0558256571866!2d37.6359!3d19.6233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c20d0a0a0a0a0d%3A0x0!2sPort%20Sudan!5e0!3m2!1sen!2ssd!4v1234567890'
  },
  {
    name: 'مكتب تنسيق الخرطوم', tag: 'مكتب التنسيق',
    address: 'شارع محمد نجيب، جنوب مركز السودان للعيون وشمال جهاز المغتربين، الخرطوم، السودان.',
    phone: '+249 999 458 145', hours: 'السبت - الخميس: 8:00 ص - 4:00 م',
    maps: 'https://maps.app.goo.gl/ZJmAdWEfLijREvKeA',
    embed: 'https://maps.google.com/maps?q=Mohamed%20Najib%20Street,%20Khartoum,%20Sudan&t=&z=15&ie=UTF8&iwloc=&output=embed'
  }
];

const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

function Logo({ light = false }) {
  return <div className="brand" aria-label="مجموعة الحراز للخدمات المتكاملة">
    <div className="logo-wrap"><img src="https://i.postimg.cc/PpLMFxD7/image.jpg" alt="شعار مجموعة الحراز" /></div>
    <div className={`brand-text ${light ? 'light' : ''}`}>
      <strong>مجموعة الحراز</strong><span>للخدمات المتكاملة</span>
    </div>
  </div>;
}

function LeadForm({ selectedService, onSubmitted, compact = false }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: selectedService || '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => setForm((prev) => ({ ...prev, service: selectedService || prev.service })), [selectedService]);

  const submit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'يرجى كتابة الاسم بالكامل';
    if (!form.phone.trim()) nextErrors.phone = 'يرجى كتابة رقم الهاتف أو واتساب';
    if (!form.service) nextErrors.service = 'يرجى اختيار الخدمة المطلوبة';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    const newLead = { ...form, id: `lead-${Date.now()}`, createdAt: new Date().toISOString() };
    try {
      const previous = JSON.parse(localStorage.getItem('alharraz_leads') || '[]');
      localStorage.setItem('alharraz_leads', JSON.stringify([...previous, newLead]));
    } catch { /* Storage can be unavailable in private contexts. */ }
    setSuccess(true);
    setForm({ name: '', phone: '', email: '', service: selectedService || '', message: '' });
    onSubmitted?.();
  };

  const update = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  return <form className={`lead-form ${compact ? 'compact' : ''}`} onSubmit={submit} noValidate>
    {success && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="success-message"><BadgeCheck size={19} /> تم تسجيل طلبك بنجاح. سنتواصل معك خلال 24 ساعة.</motion.div>}
    <div className="form-grid">
      <label className={errors.name ? 'has-error' : ''}>الاسم بالكامل <em>*</em>
        <input value={form.name} onChange={update('name')} placeholder="اكتب اسمك الكريم" autoComplete="name" />
        {errors.name && <small>{errors.name}</small>}
      </label>
      <label className={errors.phone ? 'has-error' : ''}>رقم الهاتف / واتساب <em>*</em>
        <input dir="ltr" value={form.phone} onChange={update('phone')} placeholder="+249 9XX XXX XXX" autoComplete="tel" />
        {errors.phone && <small>{errors.phone}</small>}
      </label>
    </div>
    <label>البريد الإلكتروني <span>(اختياري)</span>
      <input dir="ltr" type="email" value={form.email} onChange={update('email')} placeholder="name@example.com" autoComplete="email" />
    </label>
    <label className={errors.service ? 'has-error' : ''}>الخدمة المطلوبة <em>*</em>
      <span className="select-wrap"><select value={form.service} onChange={update('service')}>
        <option value="">اختر الخدمة التي تهمك</option>
        {services.map((service) => <option key={service.key} value={service.title}>{service.title}</option>)}
        <option value="استشارة عامة">استشارة عامة</option>
      </select><ChevronDown size={18} /></span>
      {errors.service && <small>{errors.service}</small>}
    </label>
    {!compact && <label>تفاصيل الاستفسار <span>(اختياري)</span>
      <textarea value={form.message} onChange={update('message')} placeholder="أخبرنا كيف يمكننا مساعدتك..." rows="4" />
    </label>}
    <button type="submit" className="button primary submit-button"><Send size={18} />إرسال الطلب الآن</button>
    <p className="form-note"><ShieldCheck size={15} /> بياناتك تعامل بسرية تامة ولا تُستخدم إلا للتواصل معك.</p>
  </form>;
}

function ConsultationModal({ open, onClose, selectedService }) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKeyDown); };
  }, [open, onClose]);
  return <AnimatePresence>{open && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
    <motion.div className="modal-card" initial={{ opacity: 0, y: 22, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .98 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
      <button className="modal-close" onClick={onClose} aria-label="إغلاق"><X size={21} /></button>
      <div className="modal-icon"><Headphones size={24} /></div>
      <p className="eyebrow">نحن على بُعد رسالة واحدة</p>
      <h2>اطلب استشارة فورية</h2>
      <p className="modal-copy">اترك بياناتك، وسيتواصل معك أحد مستشارينا لمساعدتك في اختيار الحل الأنسب.</p>
      <LeadForm selectedService={selectedService} compact onSubmitted={() => {}} />
    </motion.div>
  </motion.div>}</AnimatePresence>;
}

function Header({ onConsult }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 15);
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  const navigate = (id) => { setMenuOpen(false); setTimeout(() => scrollToId(id), 0); };
  return <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
    <nav className="nav container">
      <Logo />
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => navigate('home')}>الرئيسية</button>
        <button onClick={() => navigate('services')}>خدماتنا</button>
        <button onClick={() => navigate('contact')}>اتصل بنا</button>
        <button onClick={() => navigate('branches')}>مواقع الفروع</button>
        <button className="mobile-consult" onClick={() => { setMenuOpen(false); onConsult(); }}>طلب استشارة فورية</button>
      </div>
      <button className="button nav-consult" onClick={onConsult}><MessageCircle size={18} />طلب استشارة فورية</button>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="فتح القائمة">{menuOpen ? <X /> : <Menu />}</button>
    </nav>
  </header>;
}

function Hero({ onConsult }) {
  return <section id="home" className="hero section-pad">
    <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
    <div className="container hero-grid">
      <motion.div className="hero-copy" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6 }}>
        <div className="trust-pill"><span className="pulse-dot" />شريكك الاستراتيجي الموثوق في السودان والخليج</div>
        <h1>حلول متكاملة <span>لأعمالك ورحلاتك،</span> برؤية احترافية</h1>
        <p>مجموعة الحراز خيارك الأول والموثوق لخدمات السفر والحج، الاستقدام والتأشيرات، والتطوير العقاري داخل السودان والخليج.</p>
        <div className="hero-actions">
          <button className="button primary" onClick={() => scrollToId('services')}>اكتشف خدماتنا <ArrowLeft size={18} /></button>
          <button className="button outline" onClick={onConsult}>طلب استشارة فورية</button>
        </div>
        <div className="hero-tags">
          <span><Plane size={17} />السياحة والحج</span><span><UsersRound size={17} />التأشيرات والاستقدام</span><span><Building2 size={17} />التطوير العقاري</span>
        </div>
      </motion.div>
      <motion.div className="hero-art" initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: .08 }}>
        <div className="art-main"><img src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop" alt="الكعبة المشرفة في مكة المكرمة" /></div>
        <div className="art-small"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="مبنى أعمال حديث" /></div>
        <motion.div className="floating-card approval" animate={{ y: [0, -7, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}><div className="float-icon"><ShieldCheck size={18} /></div><div><strong>معتمدة</strong><span>من الجهات الرسمية</span></div></motion.div>
        <motion.div className="floating-card vip" animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}><Sparkles size={18} /><div><strong>حج وعمرة</strong><span>VIP فندق 5 نجوم</span></div></motion.div>
      </motion.div>
    </div>
  </section>;
}

function Metrics() {
  const metrics = [
    [Award, '15+', 'عاماً من الخبرة', 'تقديم الخدمات المتكاملة وتسهيل المعاملات الرسمية.'],
    [Globe2, '50+', 'دولة شريكة', 'شبكة علاقات دولية واسعة لتسهيل الاستقدام والسفر.'],
    [ShieldCheck, '100%', 'موثوقية قانونية', 'تراخيص رسمية معتمدة من كافة الجهات الحكومية ذات الصلة.'],
    [HeartHandshake, '24/7', 'دعم ومتابعة', 'فريق عمل متفرغ لخدمتكم ومرافقة وفود الحجيج والمسافرين.']
  ];
  return <section className="metrics-wrap"><div className="container metrics">{metrics.map(([Icon, num, label, text], index) => <motion.article className="metric" key={label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}><div className="metric-icon"><Icon size={24} /></div><div><strong dir="ltr">{num}</strong><h3>{label}</h3><p>{text}</p></div></motion.article>)}</div></section>;
}

function Services({ onSelectService }) {
  return <section id="services" className="services section-pad">
    <div className="container">
      <div className="section-heading centered"><span className="eyebrow"><Sparkles size={16} /> خبرات نضعها بين يديك</span><h2>خدمات متكاملة، <i>تجربة استثنائية</i></h2></div>
      <div className="services-grid">{services.map((service, index) => {
        const Icon = service.icon;
        return <motion.article className={`service-card service-${service.key}`} id={service.id} key={service.key} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
          <div className="service-image"><img src={service.image} alt={service.title} /><div className="image-shade" /><span className="service-category">{service.category}</span><div className="service-icon-badge"><Icon size={32} /></div></div>
          <div className="service-content"><h3>{service.title}</h3><h4>{service.subtitle}</h4><p>{service.description}</p><ul>{service.features.map((feature) => <li key={feature}><Check size={17} />{feature}</li>)}</ul></div>
          <button className="service-button" onClick={() => onSelectService(service.title)}>طلب الخدمة والاستشارة <ArrowLeft size={17} /></button></div>
        </motion.article>;
      })}</div>
    </div>
  </section>;
}

function Contact({ selectedService, onSubmitted }) {
  const formRef = useRef(null);
  useEffect(() => { if (selectedService) setTimeout(() => formRef.current?.focus({ preventScroll: true }), 650); }, [selectedService]);
  return <section id="contact" className="contact section-pad"><div className="container contact-grid">
    <motion.div className="contact-info" initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
      <span className="eyebrow light"><MessageCircle size={16} /> تواصل معنا اليوم</span><h2>لنبدأ حديثاً يصنع <i>الفرق.</i></h2><p>سواء كنت تخطط لرحلة حج أو عمرة، تبحث عن فرصة توظيفية، أو تريد استشارة عقارية — نحن هنا لمساعدتك.</p>
      <div className="contact-list">
        <a href="https://maps.app.goo.gl/Yh5tK4hNyY8USjhN7" target="_blank" rel="noreferrer"><span><MapPin /></span><div><small>العنوان الرئيسي</small><b>بورتسودان، جمهورية السودان</b></div></a>
        <a className="numbers" href="tel:+249112705718"><span><Phone /></span><div><small>اتصل بفريق المبيعات</small><b dir="ltr">+249 112 705 718</b><b dir="ltr">+249 900 740 729</b></div></a>
        <a href="alharrazgroup@gmail.com"><span><Mail /></span><div><small>البريد الإلكتروني المعتمد</small><b dir="ltr">alharrazgroup@gmail.com</b></div></a>
      </div>
      <a className="whatsapp-link" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={20} /> محادثة فورية على واتساب <ArrowLeft size={17} /></a>
      <div className="commitment"><ShieldCheck size={25} /><p><strong>التزامنا لك</strong><span>خدمة آمنة وموثوقة، ورد أولي على طلبك خلال 24 ساعة.</span></p></div>
    </motion.div>
    <motion.div className="form-card" initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
      <div className="form-title"><span className="number-mark">01</span><div><h3>اطلب استشارتك الآن</h3><p>املأ البيانات التالية وسنصل إليك.</p></div></div>
      <div tabIndex="-1" ref={formRef} className="form-focus"><LeadForm selectedService={selectedService} onSubmitted={onSubmitted} /></div>
    </motion.div>
  </div></section>;
}

function Branches() {
  const [active, setActive] = useState(0); const branch = branches[active];
  return <section id="branches" className="branches section-pad"><div className="container"><div className="section-heading"><span className="eyebrow"><MapPin size={16} /> قربك يهمنا</span><h2>فروعنا، <i>خدمة في كل مكان</i></h2></div>
    <div className="branches-layout"><div className="branch-list">{branches.map((item, index) => <button className={`branch-item ${index === active ? 'active' : ''}`} onClick={() => setActive(index)} key={item.name}><span className="branch-number">{index + 1}</span><div><h4>{item.name}</h4><span className="branch-tag">{item.tag}</span></div></button>)}</div>
      <motion.div className="map-wrap" key={active} initial={{ opacity: .3, scale: .985 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .28 }}><iframe title={`خريطة ${branch.name}`} src={branch.embed} style={{border:0,width:'100%',height:'100%'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></motion.div>
    </div>
    <div className="map-caption"><small>{branch.name}</small><b dir="ltr">{branch.phone}</b><a href={branch.maps} target="_blank" rel="noreferrer"><ExternalLink size={14} /> اتجاهات</a></div>
  </div></section>;
}

function Footer() { return <footer className="footer"><div className="container footer-grid"><div><Logo light /><p className="footer-copy">نحوّل الإجراءات المعقدة إلى تجارب سهلة، ونبني علاقات قوية مع عملائنا.</p></div><div><h4>الخدمات</h4>{services.slice(0,2).map(s => <a key={s.key} href={`#${s.id}`}>{s.title}</a>)}</div><div><h4>الفروع</h4>{branches.map(b => <a key={b.name} href="#branches">{b.name}</a>)}</div><div><h4>تابعنا</h4><a href={WHATSAPP} target="_blank" rel="noreferrer">واتساب</a><a href="#contact">البريد الإلكتروني</a><a href="tel:+249112705718">الهاتف</a></div></div><div className="footer-bottom"><p>© 2026 مجموعة الحراز للخدمات المتكاملة. جميع الحقوق محفوظة.</p></div></footer>; }

function App() {
  const [modalOpen, setModalOpen] = useState(false); const [selectedService, setSelectedService] = useState('');
  const openConsult = () => setModalOpen(true);
  const requestService = (service) => { setSelectedService(service); scrollToId('contact'); };
  return <><ConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} selectedService={selectedService} /><Header onConsult={openConsult} /><main><Hero onConsult={openConsult} /><Metrics /><Services onSelectService={requestService} /><Contact selectedService={selectedService} onSubmitted={() => setModalOpen(false)} /><Branches /></main><Footer /></>;
}

createRoot(document.getElementById('root')).render(<App />);
