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
      philosophyTitle: '一番身近で、一番小さな地球環境。',
      philosophyBody: '庭の緑が陽ざしに輝く朝。雨が大地を潤す午後。家の中から眺める景色は、私たちにとって最も身近な自然です。大自然の息遣いを肌で感じ、五感に浸透する空間を。MZT & Associatesは、いつもあなたの心を刺激します。',
      featuredEyebrow: 'Selected work',
      featuredTitle: '素材と時間が育てる家。',
      stats: [
        ['1921', 'ものづくりの始まり'],
        ['200+', '携わった住宅'],
        ['Japan', '全国で設計・施工'],
      ],
    },
    services: {
      atelier: { name: 'Atelier LEMON', label: '住宅設計・施工', description: '土地の風土と素材を読み、設計から施工まで一貫してつくる住まい。', image: '/assets/img/services/atelier.jpg' },
      'bird-in-hand': { ...sharedServices['bird-in-hand'], label: 'みつばち・養蜂', description: '自然とともに営む、小さく豊かな養蜂の仕事。' },
      'fire-control': { ...sharedServices['fire-control'], label: 'ストーブ・ペチカ', description: '炎のある暮らしを、住まいの性能と美しさに調和させます。' },
      'kiwas-trading': { ...sharedServices['kiwas-trading'], label: '輸出入', description: '世界の良質な素材と道具を、必要な場所へつなぎます。' },
    },
    atelier: {
      eyebrow: 'Residential design & construction',
      title: 'Atelier LEMON',
      lead: '土地の個性を受け止め、素材を選び、長く愛される住まいをつくる。機能・性能・デザインをひとつに考えます。',
      sections: [
        { title: 'ものづくりの原点', text: '1921年、水谷和吉により建設業としての水谷の歴史が始まりました。戦前はレンガを焼いてペチカをつくり、蚕や農業など手仕事によるものづくりが中心でした。土木から建築へと発展しても、五感で素材に触れ、人と向き合う姿勢が私たちの原点です。', image: '/assets/img/lemon/1.jpg' },
        { title: 'MZT & Associatesの仕事', text: '県産材を使った住宅から、日本古来の伝統技術を生かした古民家移築まで。独自の建築方法で、ひとつだけの空間をつくります。アメリカンハウスや納屋を移築したバーンハウスにも取り組み、必要な素材は国内外から選びます。', image: '/assets/img/lemon/2.jpg' },
        { title: '日本全国で設計・施工', text: '設計と施工のスタッフが現地へ赴き、地域の素材やつくり手と協働します。同じ工法でも気候や風土は場所ごとに異なります。その土地の特性を生かし、長く安心して住み続けられる環境をつくります。', image: '/assets/img/lemon/3.jpg' },
        { title: '機能・性能・デザイン', text: '高い性能だけでなく、使いやすさと美しさのバランスを大切にしています。資産価値を保ち、持続可能な生活を支える家。時間が経っても色あせない素材と、徹底的に練り上げたプランを届けます。', image: '/assets/img/lemon/4.jpg' },
      ],
      storyTitle: '受け継ぎ、つくり続ける。',
      story: '1992年に設計事務所から父の建設会社へ入り、公共建築から住宅まで幅広く経験。2000年から住宅建築に特化し、これまで200棟を超える建築に携わってきました。先人の教えを守りながら現代の建築様式を取り入れ、誠実に目の前の仕事と向き合っています。',
    },
    servicePage: {
      note: 'この事業について',
      closing: '自然、素材、暮らしのつながりを大切にしながら、丁寧に取り組んでいます。詳しいご相談はお問い合わせください。',
    },
    contact: {
      eyebrow: 'Start a conversation',
      title: '一緒に、これからの\n暮らしを考えませんか。',
      intro: '住宅、素材、養蜂、火のある暮らしについて。まだ形になっていないアイデアでも、お気軽にお聞かせください。',
      email: 'メール', address: '住所', mobile: '携帯電話', phone: '電話・FAX',
      addressValue: '長野県',
    },
    cta: { eyebrow: 'Your idea, our craft', title: 'まだ言葉にならない想いから。', body: '土地のこと、素材のこと、暮らしのこと。対話から一緒に考えます。', button: 'お問い合わせ' },
    footer: '自然と暮らしに、誠実なものづくりを。',
  },
  en: {
    locale: 'en_US',
    languageName: 'English',
    nav: { home: 'Home', atelier: 'Atelier LEMON', services: 'Services', contact: 'Contact' },
    home: {
      eyebrow: 'Architecture · Craft · Nature',
      title: 'Spaces shaped by\nnature and life.',
      intro: 'Protect, restore, create. We listen to the character of materials to make homes and experiences that engage all five senses.',
      heroAlt: 'Timber house set within a forest',
      workEyebrow: 'What we do',
      workTitle: 'Four practices, one way of living.',
      philosophyEyebrow: 'Our philosophy',
      philosophyTitle: 'Our smallest, closest environment.',
      philosophyBody: 'Morning light across a green garden. Afternoon rain returning to the earth. The landscape seen from home is our most immediate connection to nature. We create spaces where you can feel the rhythm of the natural world and let it settle into all five senses.',
      featuredEyebrow: 'Selected work',
      featuredTitle: 'Homes that grow richer with time.',
      stats: [
        ['1921', 'A legacy of making'],
        ['200+', 'Homes contributed to'],
        ['Japan', 'Design & build nationwide'],
      ],
    },
    services: {
      atelier: { name: 'Atelier LEMON', label: 'Residential design & build', description: 'Homes designed and built in response to their landscape, climate, and materials.', image: '/assets/img/services/atelier.jpg' },
      'bird-in-hand': { ...sharedServices['bird-in-hand'], label: 'Beekeeping', description: 'Small-scale beekeeping practiced in conversation with the surrounding landscape.' },
      'fire-control': { ...sharedServices['fire-control'], label: 'Stoves & masonry heaters', description: 'Bringing the warmth of fire into balance with a home’s performance and beauty.' },
      'kiwas-trading': { ...sharedServices['kiwas-trading'], label: 'Import & export', description: 'Connecting well-made materials and tools from around the world with the places that need them.' },
    },
    atelier: {
      eyebrow: 'Residential design & construction',
      title: 'Atelier LEMON',
      lead: 'We respond to the character of the land, choose honest materials, and create homes made to be loved for generations—uniting function, performance, and design.',
      sections: [
        { title: 'A tradition of making', text: 'The Mizutani building story began in 1921 with Wakichi Mizutani. Before the war, the family fired bricks for masonry heaters and worked by hand in sericulture and agriculture. As the work evolved from civil engineering to architecture, that direct relationship with materials and people remained our foundation.', image: '/assets/img/lemon/1.jpg' },
        { title: 'Our approach', text: 'From homes built with locally sourced timber to the relocation of traditional kominka houses, we create singular spaces through a broad range of building traditions. We also work with American package houses and barn conversions, sourcing the right materials from Japan and abroad.', image: '/assets/img/lemon/2.jpg' },
        { title: 'Building throughout Japan', text: 'Our design and construction teams travel to each site and collaborate with local materials and makers. Climate and culture change from place to place, even when a method remains the same. We design around those local qualities to create enduring, comfortable homes.', image: '/assets/img/lemon/3.jpg' },
        { title: 'Function, performance, design', text: 'Performance matters, but only as part of a larger balance with usability and beauty. Our homes are planned to retain their value, support a sustainable way of life, and age gracefully through lasting materials and carefully resolved details.', image: '/assets/img/lemon/4.jpg' },
      ],
      storyTitle: 'Carrying the craft forward.',
      story: 'After beginning in an architecture office, our principal joined his father’s construction company in 1992 and worked across public and residential projects. Since specializing in homes in 2000, he has contributed to more than 200 buildings—honoring lessons from earlier generations while thoughtfully applying contemporary methods.',
    },
    servicePage: {
      note: 'About the practice',
      closing: 'We approach this work carefully, guided by the relationships between nature, materials, and daily life. Contact us to discuss the details of your project or idea.',
    },
    contact: {
      eyebrow: 'Start a conversation',
      title: 'Let’s imagine a better\nway to live.',
      intro: 'Homes, materials, beekeeping, or life around a fire—your idea does not need to be fully formed. We would be glad to hear it.',
      email: 'Email', address: 'Address', mobile: 'Mobile', phone: 'Telephone & fax',
      addressValue: 'Nagano, Japan',
    },
    cta: { eyebrow: 'Your idea, our craft', title: 'Begin before everything is defined.', body: 'Land, materials, and the shape of daily life—we explore them together through conversation.', button: 'Start a conversation' },
    footer: 'Thoughtful making for nature and everyday life.',
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
