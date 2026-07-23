const whatsapp = 'https://wa.me/249912404581';

const icon = (name, size = 18) => {
  const paths = {
    arrow: '<path d="M19 12H5m7 7-7-7 7-7"/>', check: '<path d="m5 12 4 4L19 6"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    plane: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="m22 2-11 11"/>', map: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.4"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>', message: '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.5 9.5 0 0 1-4-.9L3 21l1.7-4.5A8 8 0 1 1 21 11.5Z"/>',
    award: '<circle cx="12" cy="8" r="5"/><path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5"/>', globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    handshake: '<path d="m11 17 2 2a2 2 0 0 0 3-3l-4-4"/><path d="m8 14-1 1a2 2 0 0 0 3 3l1-1"/><path d="m6 12-1 1a2 2 0 0 0 3 3l1-1"/><path d="m4 10-1 1a2 2 0 0 0 3 3l1-1"/><path d="m3 7 4-4 5 5 3-3 6 6-4 4"/>',
    building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h1m3 0h1m3 0h1M8 11h1m3 0h1m3 0h1M8 15h1m3 0h1m3 0h1M10 21v-3h4v3"/>',
    briefcase: '<rect x="3" y="7" width="18" height="12" rx="2"/><path d="M8 7V5h8v2m-13 5h18"/>', home: '<path d="m3 10 9-7 9 7v10H3Z"/><path d="M9 20v-6h6v6"/>', landmark: '<path d="m3 21h18M5 18V9m4 9V9m3 9V9m4 9V9M2 9h20L12 3Z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', spark: '<path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8Z"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="m22 2-11 11"/>', menu: '<path d="M4 7h16M4 12h16M4 17h16"/>', x: '<path d="m6 6 12 12M18 6 6 18"/>', external: '<path d="M14 3h7v7M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/>'
  };
  return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.spark}</svg>`;
};

const services = [
  { key:'travel', id:'services-travel', image:'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1000&auto=format&fit=crop', category:'سياحة دينية وترفيهية', icon:'plane', title:'خدمات السفر والحج والعمرة', subtitle:'رحلات إيمانية منظمة برعاية شاملة', description:'نلتزم بتقديم أرقى مستويات الخدمة لضيوف الرحمن والمسافرين، مع توفير كافة سبل الراحة والأمان طوال الرحلة.', features:['سكن فندقي VIP فاخر لا يتعدى 200 متر عن الحرم المكي الشريف.','إشراف إداري وطبي متكامل ومرافق طوال فترة الحج والعمرة.','تأمين تأشيرات الحج والعمرة والزيارات بأسرع الإجراءات الرسمية.','حجز تذاكر الطيران على أفضل الخطوط الجوية وبأسعار تفضيلية.'] },
  { key:'visas', id:'services-visas', image:'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1000&auto=format&fit=crop', category:'استقدام وتوظيف', icon:'briefcase', title:'التأشيرات والاستقدام الخارجي', subtitle:'استقطاب الكفاءات وتسهيل المعاملات الدولية', description:'نوفر حلول استقدام متكاملة للشركات والأفراد من مختلف الدول، بموثوقية عالية وإجراءات قانونية موثقة.', features:['توفير عقود عمل رسمية وموثقة في دول الخليج العربي والشرق الأوسط.','تسهيل معاملات تأشيرات العمل والزيارات التجارية والعائلية.','تفويض واستقدام العمالة المنزلية والمهنية المؤهلة.','تخليص وتوثيق المستندات والشهادات من السفارات والخارجية.'] },
  { key:'local', id:'services-local', image:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop', category:'معاملات حكومية', icon:'landmark', title:'الخدمات المحلية وتجديد الإقامة', subtitle:'حلول إدارية وتخليص معاملات متكاملة', description:'نهتم بكافة الإجراءات القانونية والمستندية للوافدين والمقيمين والشركات لتسهيل العمل والاستقرار بإنتاجية.', features:['إصدار وتجديد الإقامات وبطاقات العمل للوافدين والمؤسسات.','تخليص تأشيرات الزيارة العائلية وتأشيرات المرور والعودة.','تعديل المهن ونقل الكفالات وفك الارتباط القانوني.','متابعة وتسوية القضايا العمالية لدى مكاتب العمل والجهات المختصة.'] },
  { key:'realestate', id:'services-realestate', image:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop', category:'إعمار واستثمار', icon:'home', title:'التطوير والتسويق العقاري', subtitle:'استثمارات عقارية آمنة وواعدة', description:'شريكك العقاري الموثوق في تخطيط، بيع، وشراء الأراضي والعقارات السكنية والاستثمارية برؤية مستقبلية.', features:['شراء وبيع الأراضي السكنية والزراعية والاستثمارية بعوائد ممتازة.','تطوير وإعمار المجمعات السكنية والمباني التجارية الحديثة.','تسجيل وترخيص العقارات وتوثيق الملكيات لدى السجل العقاري.','تسويق المشاريع الاستثمارية والوساطة العقارية بنظام احترافي.'] }
];

const branches = [
  { name:'فرع بورتسودان', tag:'المقر الرئيسي', address:'سوق بورتسودان الكبير، تقاطع البلدية والشرق، السودان.', phone:'+249 112 705 718', hours:'السبت - الخميس: 8:00 ص - 4:00 م', maps:'https://maps.app.goo.gl/Yh5tK4hNyY8USjhN7', embed:'embed: 'https://maps.google.com/maps?q=Port%20Sudan,%20Sudan&t=&z=13&ie=UTF8&iwloc=&output=embed' },
  { name:'مكتب تنسيق الخرطوم', tag:'مكتب التنسيق', address:'شارع محمد نجيب، جنوب مركز السودان للعيون وشمال جهاز المغتربين، الخرطوم، السودان.', phone:'+249 999 458 145', hours:'السبت - الخميس: 8:00 ص - 4:00 م', maps:'https://maps.app.goo.gl/ZJmAdWEfLijREvKeA', embed:'https://maps.google.com/maps?q=Mohamed%20Najib%20Street,%20Khartoum,%20Sudan&t=&z=15&ie=UTF8&iwloc=&output=embed' }
];

const logo = (light = false) => `<div class="brand"><div class="logo-wrap"><img src="https://i.postimg.cc/PpLMFxD7/image.jpg" alt="شعار مجموعة الحراز"></div><div class="brand-text ${light ? 'light' : ''}"><strong>مجموعة الحراز</strong><span>للخدمات المتكاملة</span></div></div>`;
const serviceOptions = () => `<option value="">اختر الخدمة التي تهمك</option>${services.map(s => `<option value="${s.title}">${s.title}</option>`).join('')}<option value="استشارة عامة">استشارة عامة</option>`;
const form = (compact = false) => `<form class="lead-form ${compact ? 'compact' : ''}" data-lead-form novalidate>
  <div class="success-message" hidden>${icon('shield',19)} تم تسجيل طلبك بنجاح. سنتواصل معك خلال 24 ساعة.</div>
  <div class="form-grid"><label>الاسم بالكامل <em>*</em><input name="name" placeholder="اكتب اسمك الكريم" autocomplete="name"><small></small></label><label>رقم الهاتف / واتساب <em>*</em><input name="phone" dir="ltr" placeholder="+249 9XX XXX XXX" autocomplete="tel"><small></small></label></div>
  <label>البريد الإلكتروني <span>(اختياري)</span><input name="email" dir="ltr" type="email" placeholder="name@example.com" autocomplete="email"></label>
  <label>الخدمة المطلوبة <em>*</em><span class="select-wrap"><select name="service">${serviceOptions()}</select>${icon('arrow',18)}</span><small></small></label>
  ${compact ? '' : '<label>تفاصيل الاستفسار <span>(اختياري)</span><textarea name="message" placeholder="أخبرنا كيف يمكننا مساعدتك..." rows="4"></textarea></label>'}
  <button type="submit" class="button primary submit-button">${icon('send',18)}إرسال الطلب الآن</button><p class="form-note">${icon('shield',15)} بياناتك تعامل بسرية تامة ولا تُستخدم إلا للتواصل معك.</p></form>`;

const serviceCards = services.map(s => `<article class="service-card service-${s.key}" id="${s.id}"><div class="service-image"><img src="${s.image}" alt="${s.title}"><div class="image-shade"></div><span class="service-category">${s.category}</span><div class="service-icon">${icon(s.icon,24)}</div></div><div class="service-content"><h3>${s.title}</h3><h4>${s.subtitle}</h4><p>${s.description}</p><ul>${s.features.map(f => `<li>${icon('check',17)}${f}</li>`).join('')}</ul><button class="service-button" data-service="${s.title}">طلب الخدمة والاستشارة ${icon('arrow',17)}</button></div></article>`).join('');

document.getElementById('root').innerHTML = `
<header class="header"><nav class="nav container">${logo()}<div class="nav-links"><button data-scroll="home">الرئيسية</button><button data-scroll="services">خدماتنا</button><button data-scroll="contact">اتصل بنا</button><button data-scroll="branches">مواقع الفروع</button><button class="mobile-consult" data-modal>طلب استشارة فورية</button></div><button class="button nav-consult" data-modal>${icon('message',18)}طلب استشارة فورية</button><button class="menu-button" aria-label="فتح القائمة">${icon('menu',22)}</button></nav></header>
<main>
  <section id="home" class="hero section-pad"><div class="hero-orb orb-one"></div><div class="hero-orb orb-two"></div><div class="container hero-grid"><div class="hero-copy"><div class="trust-pill"><span class="pulse-dot"></span>شريكك الاستراتيجي الموثوق في السودان والخليج</div><h1>حلول متكاملة <span>لأعمالك ورحلاتك،</span> برؤية احترافية</h1><p>مجموعة الحراز خيارك الأول والموثوق لخدمات السفر والحج، الاستقدام والتأشيرات، والتطوير العقاري داخل وخارج السودان. نعمل بمعايير جودة عالمية لنلبي تطلعاتك.</p><div class="hero-actions"><button class="button primary" data-scroll="services">اكتشف خدماتنا ${icon('arrow',18)}</button><button class="button outline" data-modal>طلب استشارة فورية</button></div><div class="hero-tags"><span>${icon('plane',17)}السياحة والحج</span><span>${icon('briefcase',17)}التأشيرات والاستقدام</span><span>${icon('building',17)}التطوير العقاري</span></div></div><div class="hero-art"><div class="art-main"><img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=90&w=1600&auto=format&fit=crop" alt="الحرم المكي الشريف في مكة المكرمة"><div class="art-gradient"></div></div><div class="art-small"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="مبنى أعمال حديث"></div><div class="floating-card approval"><div class="float-icon">${icon('shield',18)}</div><div><strong>معدل الاعتماد</strong><span>حكومي وموثوق 100%</span></div></div><div class="floating-card vip">${icon('spark',18)}<div><strong>حج وعمرة</strong><span>إقامة VIP فندقية</span></div></div></div></div></section>
  <section class="metrics-wrap"><div class="container metrics"><article class="metric"><div class="metric-icon">${icon('award')}</div><div><strong dir="ltr">15+</strong><h3>عاماً من الخبرة</h3><p>تقديم الخدمات المتكاملة وتسهيل المعاملات الرسمية.</p></div></article><article class="metric"><div class="metric-icon">${icon('globe')}</div><div><strong dir="ltr">50+</strong><h3>دولة شريكة</h3><p>شبكة علاقات دولية واسعة لتسهيل الاستقدام والسفر.</p></div></article><article class="metric"><div class="metric-icon">${icon('shield')}</div><div><strong dir="ltr">100%</strong><h3>موثوقية قانونية</h3><p>تراخيص رسمية معتمدة من كافة الجهات الحكومية ذات الصلة.</p></div></article><article class="metric"><div class="metric-icon">${icon('handshake')}</div><div><strong dir="ltr">24/7</strong><h3>دعم ومتابعة</h3><p>فريق عمل متفرغ لخدمتكم ومرافقة وفود الحجيج والمسافرين.</p></div></article></div></section>
  <section id="services" class="services section-pad"><div class="container"><div class="section-heading centered"><span class="eyebrow">${icon('spark',16)} خبرات نضعها بين يديك</span><h2>خدمات متكاملة، <i>تجربة استثنائية</i></h2><p>نصمم كل خدمة حول احتياجك، وندير التفاصيل بدقة لتمنحك راحة البال.</p></div><div class="services-grid">${serviceCards}</div></div></section>
  <section id="contact" class="contact section-pad"><div class="container contact-grid"><div class="contact-info"><span class="eyebrow light">${icon('message',16)} تواصل معنا اليوم</span><h2>لنبدأ حديثاً يصنع <i>الفرق.</i></h2><p>سواء كنت تخطط لرحلة، أو تحتاج إلى إجراءات موثوقة، أو تبحث عن فرصتك العقارية القادمة — فريقنا جاهز لخدمتك.</p><div class="contact-list"><a href="https://maps.app.goo.gl/Yh5tK4hNyY8USjhN7" target="_blank" rel="noreferrer"><span>${icon('map')}</span><div><small>العنوان الرئيسي</small><b>بورتسودان، جمهورية السودان</b></div>${icon('external',16)}</a><a class="numbers" href="tel:+249112705718"><span>${icon('phone')}</span><div><small>اتصل بفريق المبيعات</small><b dir="ltr">+249 112 705 718</b><b dir="ltr">+249 900 740 722</b></div></a><a href="mailto:alharrazgroup@gmail.com"><span>${icon('mail')}</span><div><small>البريد الإلكتروني المعتمد</small><b dir="ltr">alharrazgroup@gmail.com</b></div></a></div><a class="whatsapp-link" href="${whatsapp}" target="_blank" rel="noreferrer">${icon('message',20)} محادثة فورية على واتساب ${icon('arrow',17)}</a><div class="commitment">${icon('shield',25)}<p><strong>التزامنا لك</strong><span>خدمة آمنة وموثوقة، ورد أولي على طلبك خلال 24 ساعة.</span></p></div></div><div class="form-card"><div class="form-title"><span class="number-mark">01</span><div><h3>اطلب استشارتك الآن</h3><p>املأ البيانات التالية وسنصل إليك.</p></div></div>${form()}</div></div></section>
  <section id="branches" class="branches section-pad"><div class="container"><div class="section-heading"><span class="eyebrow">${icon('map',16)} قربك يهمنا</span><h2>فروعنا، <i>في خدمتك</i></h2><p>اختر أقرب نقطة تواصل، واحصل على الاتجاهات مباشرة.</p></div><div class="branches-layout"><div class="branch-list">${branches.map((b,i) => `<button class="branch-item ${i === 0 ? 'active' : ''}" data-branch="${i}"><span class="branch-number">0${i+1}</span><div><small>${b.tag}</small><h3>${b.name}</h3><p>${b.address}</p><span class="branch-meta">${icon('clock',15)}${b.hours}</span></div>${icon('arrow',20)}</button>`).join('')}</div><div class="map-wrap"><iframe title="خريطة فرع بورتسودان" src="${branches[0].embed}" loading="lazy"></iframe><div class="map-caption"><div><span class="map-pin">${icon('map',18)}</span><p><small>فرع بورتسودان</small><b dir="ltr">+249 112 705 718</b></p></div><a href="${branches[0].maps}" target="_blank" rel="noreferrer">فتح في الخرائط ${icon('external',15)}</a></div></div></div></div></section>
</main>
<footer class="footer"><div class="container footer-grid"><div>${logo(true)}<p class="footer-copy">نحوّل الإجراءات المعقدة إلى تجارب سهلة، ونبني علاقات طويلة الأمد قائمة على الثقة والجودة.</p><p class="registry">${icon('shield',17)} سجل تجاري معتمد رقم <b dir="ltr">2984</b></p></div><div><h4>خدماتنا</h4>${services.map(s=>`<button data-scroll="${s.id}">${s.title}</button>`).join('')}</div><div><h4>روابط سريعة</h4><button data-scroll="home">الرئيسية</button><button data-scroll="contact">طلب استشارة</button><button data-scroll="branches">مواقع الفروع</button><a href="mailto:alharrazgroup@gmail.com">alharrazgroup@gmail.com</a></div><div class="footer-contact"><h4>تواصل مباشر</h4><a href="tel:+249112705718" dir="ltr">${icon('phone',16)}+249 112 705 718</a><a href="${whatsapp}" target="_blank" rel="noreferrer">${icon('message',16)}واتساب خدمة العملاء</a><span>${icon('map',16)}بورتسودان، السودان</span></div></div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} مجموعة الحراز للخدمات المتكاملة. جميع الحقوق محفوظة.</span><div><a href="#">سياسة الخصوصية</a><a href="#">الشروط والأحكام</a></div></div></footer>
<a class="floating-whatsapp" href="${whatsapp}" target="_blank" rel="noreferrer" aria-label="تواصل معنا فوراً على واتساب"><span class="whatsapp-tooltip">تواصل معنا فوراً على واتساب</span>${icon('message',27)}</a>
<div class="modal-backdrop" hidden><div class="modal-card" role="dialog" aria-modal="true" aria-label="طلب استشارة فورية"><button class="modal-close" aria-label="إغلاق">${icon('x',21)}</button><div class="modal-icon">${icon('message',24)}</div><p class="eyebrow">نحن على بُعد رسالة واحدة</p><h2>اطلب استشارة فورية</h2><p class="modal-copy">اترك بياناتك، وسيتواصل معك أحد مستشارينا لمساعدتك في اختيار الحل الأنسب.</p>${form(true)}</div></div>`;

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior:'smooth', block:'start' });
const header = document.querySelector('.header');
window.addEventListener('scroll', () => header.classList.toggle('is-scrolled', window.scrollY > 15), {passive:true});

document.querySelectorAll('[data-scroll]').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.remove('open');
  scrollTo(button.dataset.scroll);
}));

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => {
  const links = document.querySelector('.nav-links'); links.classList.toggle('open');
  menuButton.innerHTML = links.classList.contains('open') ? icon('x',22) : icon('menu',22);
});

const modal = document.querySelector('.modal-backdrop');
const openModal = () => { modal.hidden = false; document.body.style.overflow = 'hidden'; setTimeout(() => modal.querySelector('input')?.focus(), 50); };
const closeModal = () => { modal.hidden = true; document.body.style.overflow = ''; };
document.querySelectorAll('[data-modal]').forEach(button => button.addEventListener('click', openModal));
modal.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', event => { if(event.target === modal || event.target.closest('.modal-close')) closeModal(); });
window.addEventListener('keydown', event => { if(event.key === 'Escape' && !modal.hidden) closeModal(); });

document.querySelectorAll('.service-button').forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.service;
  document.querySelectorAll('select[name="service"]').forEach(select => { select.value = selected; });
  scrollTo('contact');
  setTimeout(() => document.querySelector('#contact input[name="name"]')?.focus({preventScroll:true}), 600);
}));

document.querySelectorAll('[data-lead-form]').forEach(leadForm => leadForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = leadForm.querySelector('[name="name"]'); const phone = leadForm.querySelector('[name="phone"]'); const service = leadForm.querySelector('[name="service"]');
  const fields = [[name,'يرجى كتابة الاسم بالكامل'],[phone,'يرجى كتابة رقم الهاتف أو واتساب'],[service,'يرجى اختيار الخدمة المطلوبة']];
  let valid = true;
  fields.forEach(([field,message]) => { const label = field.closest('label'); const note = label.querySelector('small'); const invalid = !field.value.trim(); label.classList.toggle('has-error', invalid); if(note) note.textContent = invalid ? message : ''; valid = valid && !invalid; });
  if(!valid) return;
  const payload = { id:`lead-${Date.now()}`, createdAt:new Date().toISOString(), name:name.value.trim(), phone:phone.value.trim(), email:leadForm.querySelector('[name="email"]')?.value.trim() || '', service:service.value, message:leadForm.querySelector('[name="message"]')?.value.trim() || '' };
  try { const saved = JSON.parse(localStorage.getItem('alharraz_leads') || '[]'); localStorage.setItem('alharraz_leads', JSON.stringify([...saved,payload])); } catch(e) {}
  leadForm.reset(); const success = leadForm.querySelector('.success-message'); success.hidden = false; setTimeout(() => { success.hidden = true; }, 7000);
}));

document.querySelectorAll('[data-branch]').forEach(button => button.addEventListener('click', () => {
  const index = Number(button.dataset.branch); const branch = branches[index];
  document.querySelectorAll('[data-branch]').forEach(item => item.classList.toggle('active', item === button));
  const iframe = document.querySelector('.map-wrap iframe'); iframe.src = branch.embed; iframe.title = `خريطة ${branch.name}`;
  document.querySelector('.map-caption small').textContent = branch.name; document.querySelector('.map-caption b').textContent = branch.phone;
  document.querySelector('.map-caption a').href = branch.maps;
}));
