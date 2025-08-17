// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'CyberOverload', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: '',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars',
        limit: 0,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'Portfolio',
      projects: [
        {
          title: 'HenHaven',
          description:
            'Lead Developer (Scripter + Builder) for HenHaven, a Roblox cartoon simulator. Focused primarily on scripting while contributing significantly to building.',
          imageUrl:
            'https://media.discordapp.net/attachments/1387912559465594880/1406582412326080512/raw.png?ex=68a2fd74&is=68a1abf4&hm=15a869f2aaf75b6691e8c223a89683e58d311aac6d7f08bd2f8aba759ba88944&=&format=webp&quality=lossless&width=1157&height=1157',
          link: 'https://discord.gg/k56gKUf2Zb',
        },
        {
          title: 'The Royal British Army',
          description:
            'Project Manager for The Royal British Army. Developed Version 2.0 map from scratch, handling both building and scripting. Map inspired other groups, including ReaperMah\'s British Army V3.0.',
          imageUrl:
            'https://media.discordapp.net/attachments/1387912559465594880/1406582412326080512/raw.png?ex=68a2fd74&is=68a1abf4&hm=15a869f2aaf75b6691e8c223a89683e58d311aac6d7f08bd2f8aba759ba88944&=&format=webp&quality=lossless&width=1157&height=1157',
          link: 'https://www.roblox.com/games/14317195787/British-Army-RBA',
        },
        {
          title: 'United States Naval Academy',
          description:
            'Lead Developer (Builder) for USNA, a pre-made map widely adopted by Roblox military groups. Over 150 combined sales through multiple resellers, making it Cyber Development\'s most successful project.',
          imageUrl:
            'https://media.discordapp.net/attachments/1387912559465594880/1406582412326080512/raw.png?ex=68a2fd74&is=68a1abf4&hm=15a869f2aaf75b6691e8c223a89683e58d311aac6d7f08bd2f8aba759ba88944&=&format=webp&quality=lossless&width=1157&height=1157',
          link: 'https://payhip.com/b/wK1yq',
        },
        {
          title: 'Simulator Map (V1)',
          description:
            'Lead Developer (Builder) for Simulator Map V1, a pre-made simulator map developed to fill a gap in available simulator environments on Roblox.',
          imageUrl:
            'https://media.discordapp.net/attachments/1387912559465594880/1406582412326080512/raw.png?ex=68a2fd74&is=68a1abf4&hm=15a869f2aaf75b6691e8c223a89683e58d311aac6d7f08bd2f8aba759ba88944&=&format=webp&quality=lossless&width=1157&height=1157',
          link: 'https://payhip.com/b/n8bmK',
        },
        {
          title: 'Bondi Beach',
          description:
            'Lead Developer (Builder + Scripter) for Bondi Beach, a practice commission replicating real-life locations on Roblox. The project emphasizes realism and attention to detail.',
          imageUrl:
            'https://media.discordapp.net/attachments/1387912559465594880/1406582412326080512/raw.png?ex=68a2fd74&is=68a1abf4&hm=15a869f2aaf75b6691e8c223a89683e58d311aac6d7f08bd2f8aba759ba88944&=&format=webp&quality=lossless&width=1157&height=1157',
          link: 'https://payhip.com/b/JBv3K',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of CyberOverload',
    description: 'CyberOverload Roblox development projects and portfolio.',
    imageURL:
      'https://media.discordapp.net/attachments/1387912559465594880/1406582412326080512/raw.png?ex=68a2fd74&is=68a1abf4&hm=15a869f2aaf75b6691e8c223a89683e58d311aac6d7f08bd2f8aba759ba88944&=&format=webp&quality=lossless&width=1157&height=1157',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: 'CyberOverload',
    telegram: '',
    website: '',
    phone: '',
    email: 'cyberdevelopmentstudio@gmail.com',
  },
  resume: {
    fileUrl: '',
  },
  skills: ['Skills:', 'Programming', 'Building', 'Animation', 'Specialisations:', 'MILSIM'],
  experiences: [
    {
      company: 'Cyber Network',
      position: 'Network President',
      from: 'August 2023',
      to: 'Present',
      companyLink: 'https://discord.gg/9dH7gWnK7t',
    },
    {
      company: 'The Royal British Army',
      position: 'Lead Developer',
      from: 'July 2023',
      to: 'Present',
      companyLink: 'https://discord.gg/QkRDYWSePm',
    },
  ],
  certifications: [{ name: '', body: '', year: '', link: '' }],
  educations: [
    { institution: '', degree: '', from: '', to: '' },
    { institution: '', degree: '', from: '', to: '' },
  ],
  publications: [
    { title: '', conferenceName: '', journalName: '', authors: '', link: '', description: '' },
    { title: '', conferenceName: '', journalName: '', authors: '', link: '', description: '' },
  ],
  blog: { source: '', username: '', limit: 0 },
  googleAnalytics: { id: '' },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
    themes: ['dark', 'lofi'],
  },
  footer: `CyberOverload's Roblox Development Portfolio`,
  enablePWA: true,
};

export default CONFIG;
