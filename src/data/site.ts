export type Lang = 'ja' | 'en';

export const serviceSlugs = ['bird-in-hand', 'fire-control', 'kiwas-trading'] as const;
export type ServiceSlug = (typeof serviceSlugs)[number];

const sharedServices = {
  'bird-in-hand': {
    name: 'Bird in Hand',
    image: '/assets/img/services/bees.jpg',
  },
  'fire-control': {
    name: 'Fire Control',
    image: '/assets/img/services/fire.jpg',
  },
  'kiwas-trading': {
    name: "Kiwa's Trading",
    image: '/assets/img/services/trading.jpg',
  },
};

export const copy = {
  ja: {
    locale: 'ja_JP',
    languageName: '日本語',
    nav: { home: 'ホーム', atelier: 'Atelier LEMON', services: '事業', contact: 'お問い合わせ' },
    home: {
      eyebrow: 'Architecture · Craft · Nature',
      title: '自然と暮らしを、\nひとつの空間に。',
      intro: '自然を守り、再生し、創造する。素材の声に耳を澄ませ、五感に残る住まいと営みをつくります。',
      heroAlt: '森の中に佇む木造住宅',
      workEyebrow: 'What we do',
      workTitle: '暮らしをつくる、四つの仕事。',
      philosophyEyebrow: 'Our philosophy',
      philosophyTitle: '住まいは、最も身近で小さな地球環境。',
      philosophyBody: '庭の緑が朝の光に輝き、午後の雨が大地を潤す。住まいの中から眺める景色は、私たちにとって最も身近な自然です。大自然の息遣いを肌で感じ、五感に響く空間を。MZT & Associatesは、暮らす人の感性に静かに働きかける住まいをつくります。',
      featuredEyebrow: 'Selected work',
      featuredTitle: '素材と時間が育てる家。',
      stats: [
        ['1921', 'ものづくりの始まり'],
        ['200+', '携わった住宅数'],
        ['Japan', '全国で設計・施工'],
      ],
    },
    services: {
      atelier: { name: 'Atelier LEMON', label: '住宅設計・施工', description: '土地の風土と素材を読み、設計から施工まで一貫して手がける住まい。', image: '/assets/img/services/atelier.jpg' },
      'bird-in-hand': { ...sharedServices['bird-in-hand'], label: 'みつばち・養蜂', description: '自然環境と調和した、小規模な養蜂。' },
      'fire-control': { ...sharedServices['fire-control'], label: 'ストーブ・ペチカ', description: '炎のある暮らしと、住まいの性能・美しさを調和させます。' },
      'kiwas-trading': { ...sharedServices['kiwas-trading'], label: '輸出入', description: '世界の良質な素材と道具を、必要な場所へつなぎます。' },
    },
    atelier: {
      eyebrow: 'Residential design & construction',
      title: 'Atelier LEMON',
      lead: '土地の個性を受け止め、素材を丁寧に選び、長く愛される住まいをつくる。機能・性能・デザインを一体として考えます。',
      sections: [
        { title: 'ものづくりの原点', text: '1921年、水谷和吉が建設業を始め、水谷のものづくりはここから歩みを重ねてきました。戦前はレンガを焼いてペチカをつくるほか、養蚕や農業など、手仕事を中心とした営みに携わっていました。土木から建築へと事業が発展した後も、五感で素材に触れ、人と向き合う姿勢が私たちの原点です。', image: '/assets/img/lemon/1.jpg' },
        { title: 'MZT & Associatesの仕事', text: '県産材を使った住宅から、日本の伝統技術を生かした古民家の移築まで、培ってきた建築技術をもとに、唯一無二の空間をつくります。アメリカンハウスや納屋を移築したバーンハウスにも取り組み、必要な素材を国内外から厳選しています。', image: '/assets/img/lemon/2.jpg' },
        { title: '日本全国で設計・施工', text: '設計・施工のスタッフが現地へ赴き、地域の素材を生かしながら、地元のつくり手と協働します。同じ工法であっても、気候や風土は地域ごとに異なります。その土地の特性を生かし、長く安心して住み続けられる住まいをつくります。', image: '/assets/img/lemon/3.jpg' },
        { title: '機能・性能・デザイン', text: '高い性能だけでなく、使いやすさと美しさのバランスを大切にしています。資産価値を保ちながら、持続可能な暮らしを支える住まいを目指しています。時を経ても色あせない素材と、細部まで練り上げたプランをご提案します。', image: '/assets/img/lemon/4.jpg' },
      ],
      storyTitle: '受け継ぎ、つくり続ける。',
      story: '1992年、設計事務所での勤務を経て父の建設会社に入社し、公共建築から住宅まで幅広い経験を重ねました。2000年からは住宅建築に特化し、これまで200棟を超える建築に携わっています。先人の教えを受け継ぎながら現代の建築技術や様式も取り入れ、目の前の仕事一つひとつに誠実に向き合っています。',
    },
    servicePage: {
      note: 'この事業について',
      closing: '自然、素材、暮らしのつながりを大切に、一つひとつの仕事に丁寧に取り組んでいます。具体的なご相談については、お問い合わせください。',
    },
    contact: {
      eyebrow: 'Start a conversation',
      title: '一緒に、これからの\n暮らしを考えませんか。',
      intro: '住宅、素材、養蜂、火のある暮らしについて。まだ形になっていない構想の段階から、どうぞお気軽にご相談ください。',
      email: 'メール', address: '住所', mobile: '携帯電話', phone: '電話・FAX',
      addressValue: '長野県',
    },
    cta: { eyebrow: 'Your idea, our craft', title: 'まだ言葉にならない想いから。', body: '土地のこと、素材のこと、暮らしのこと。対話を重ねながら、ともに考えます。', button: 'お問い合わせ' },
    footer: '自然と暮らしに、誠実なものづくりを。',
  },
  en: {
    locale: 'en_US',
    languageName: 'English',
    nav: { home: 'Home', atelier: 'Atelier LEMON', services: 'Services', contact: 'Contact' },
    home: {
      eyebrow: 'Architecture · Craft · Nature',
      title: 'Spaces shaped by\nnature and everyday life.',
      intro: 'Protect, restore, create. We listen to the character of materials to shape homes and ways of living that engage all the senses.',
      heroAlt: 'Timber house set within a forest',
      workEyebrow: 'What we do',
      workTitle: 'Four practices, one way of living.',
      philosophyEyebrow: 'Our philosophy',
      philosophyTitle: 'The home is our closest environment.',
      philosophyBody: 'Morning light across a green garden. Afternoon rain returning to the earth. The landscape viewed from home is our most immediate connection to nature. We create spaces that bring the rhythms of the natural world into daily life and engage all the senses.',
      featuredEyebrow: 'Selected work',
      featuredTitle: 'Homes that grow richer with time.',
      stats: [
        ['1921', 'A tradition of craftsmanship'],
        ['200+', 'Homes we have helped create'],
        ['Japan', 'Design and construction nationwide'],
      ],
    },
    services: {
      atelier: { name: 'Atelier LEMON', label: 'Residential design & build', description: 'Homes designed and built in response to the local landscape, climate, and materials.', image: '/assets/img/services/atelier.jpg' },
      'bird-in-hand': { ...sharedServices['bird-in-hand'], label: 'Beekeeping', description: 'Small-scale beekeeping practiced in harmony with the surrounding environment.' },
      'fire-control': { ...sharedServices['fire-control'], label: 'Stoves & masonry heaters', description: 'Integrating the warmth of fire with a home’s performance and beauty.' },
      'kiwas-trading': { ...sharedServices['kiwas-trading'], label: 'Import & export', description: 'Connecting high-quality materials and tools from around the world with the people and projects that need them.' },
    },
    atelier: {
      eyebrow: 'Residential design & construction',
      title: 'Atelier LEMON',
      lead: 'We respond to the character of each site, select materials with care, and create homes designed to endure for generations—uniting function, performance, and design.',
      sections: [
        { title: 'A tradition of making', text: 'The Mizutani family’s history in construction began in 1921 with Wakichi Mizutani. Before World War II, the family fired bricks and built masonry heaters while also engaging in sericulture and agriculture. As the work evolved from civil engineering to architecture, this direct relationship with materials and people remained our foundation.', image: '/assets/img/lemon/1.jpg' },
        { title: 'Our approach', text: 'From homes built with locally sourced timber to the relocation of kominka—traditional Japanese houses—we create singular spaces by drawing on a broad range of building traditions. We also work with American package houses and barn conversions, selecting the right materials from Japan and abroad.', image: '/assets/img/lemon/2.jpg' },
        { title: 'Building throughout Japan', text: 'Our design and construction teams travel to each site, working with local craftspeople and locally sourced materials. Even when the same construction method is used, climate and local conditions vary from place to place. We adapt our approach to these characteristics to create enduring, comfortable homes.', image: '/assets/img/lemon/3.jpg' },
        { title: 'Function, performance, design', text: 'Performance matters, but only as part of a broader balance with usability and beauty. Our homes are designed to retain their value, support a sustainable way of life, and age gracefully through durable materials and carefully resolved details.', image: '/assets/img/lemon/4.jpg' },
      ],
      storyTitle: 'Carrying the craft forward.',
      story: 'After beginning his career at an architectural practice, our principal joined his father’s construction company in 1992 and gained broad experience in public and residential projects. Since focusing on residential construction in 2000, he has contributed to more than 200 buildings, carrying forward the lessons of earlier generations while thoughtfully applying contemporary methods.',
    },
    servicePage: {
      note: 'About this practice',
      closing: 'We approach this work carefully, guided by the relationships between nature, materials, and daily life. Contact us to discuss the details of your project or idea.',
    },
    contact: {
      eyebrow: 'Start a conversation',
      title: 'A better way to live,\nimagined together.',
      intro: 'Whether your inquiry concerns a home, materials, beekeeping, or living with fire, we welcome conversations at any stage of planning.',
      email: 'Email', address: 'Address', mobile: 'Mobile', phone: 'Telephone & Fax',
      addressValue: 'Nagano, Japan',
    },
    cta: { eyebrow: 'Your idea, our craft', title: 'A project can begin before every detail is settled.', body: 'Land, materials, and the shape of daily life—we consider them together through conversation.', button: 'Contact us' },
    footer: 'Thoughtful craftsmanship, grounded in nature and everyday life.',
  },
} as const;

export function href(lang: Lang, path = '') {
  const prefix = lang === 'ja' ? 'jp' : 'en';
  return `/${prefix}/${path}`.replace(/\/+$/, '/') || '/';
}

function optimizedStem(src: string) {
  return src
    .replace(/^\/assets\/img\//, '')
    .replace(/\.[^.]+$/, '')
    .replaceAll('/', '-');
}

export function webpSrc(src: string, width: 480 | 768 | 1200 = 1200) {
  return `/assets/optimized/${optimizedStem(src)}-${width}.webp`;
}

export function webpSrcSet(src: string) {
  return [480, 768, 1200]
    .map((width) => `${webpSrc(src, width as 480 | 768 | 1200)} ${width}w`)
    .join(', ');
}
