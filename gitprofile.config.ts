// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'CyberOverload', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: '',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 0, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['user/my-project1', 'user/my-project2']
        },
      },
      manual: {
        projects: [], // List of repository names to display. example: ['user/my-project1', 'user/my-project2']
      },
    },
    external: {
      header: 'Portfolio',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'HenHaven',
          description:
            'Position: Lead Developer (Scripter + Builder) HenHaven is a roblox cartoon simulator in which I was the Lead Developer, primarily focused on scripting but also partaking in a large portion of building.',
          imageUrl:
            'https://media.discordapp.net/attachments/1387912559465594880/1406582412326080512/raw.png?ex=68a2fd74&is=68a1abf4&hm=15a869f2aaf75b6691e8c223a89683e58d311aac6d7f08bd2f8aba759ba88944&=&format=webp&quality=lossless&width=1157&height=1157',
          link: 'https://discord.gg/k56gKUf2Zb',
        },
        {
          title: 'The Royal British Army',
          description:
            'Position: Project Manager - The Royal British Army is a large-scale British Army where I developed there Version 2.0 map completely from scratch, both building and scripting. They have now migrated to a Version 3.0 map using a product developed by the wider Cyber Development Team. This map is known for being visited by ReaperMah to gain ideas for ReaperMah's British Army (V3.0)',
          imageUrl:
            'https://media.discordapp.net/attachments/1387912559465594880/1406582412326080512/raw.png?ex=68a2fd74&is=68a1abf4&hm=15a869f2aaf75b6691e8c223a89683e58d311aac6d7f08bd2f8aba759ba88944&=&format=webp&quality=lossless&width=1157&height=1157',
          link: 'https://www.roblox.com/games/14317195787/British-Army-RBA',
        },
        {
          title: 'United States Naval Academy',
          description:
            'Position: Lead Developer (Builder) - United States Naval Academy was a large-scale project made to design the ideal pre-made map for ROBLOX Military Groups. The map is now widely used, with several large naval groups adopting it on the platform. With over 50 sales the USNA is Cyber Developments most successful project, with dozens of positive reviews.The map is now sold by several major tech stores as officially licensed resellers, with over 150+ combined sales.',
          imageUrl:
            'https://media.discordapp.net/attachments/1387912559465594880/1406582412326080512/raw.png?ex=68a2fd74&is=68a1abf4&hm=15a869f2aaf75b6691e8c223a89683e58d311aac6d7f08bd2f8aba759ba88944&=&format=webp&quality=lossless&width=1157&height=1157',
          link: 'https://payhip.com/b/wK1yq',
        },
        {
          title: 'Simulator Map (V1)',
          description:
            'Position: Lead Developer (Builder) - Simulator Map V1 is Cyber Developments primary project to develop a pre-made simulator map, an area which currently lacks supply.',
          imageUrl:
            'https://media.discordapp.net/attachments/1387912559465594880/1406582412326080512/raw.png?ex=68a2fd74&is=68a1abf4&hm=15a869f2aaf75b6691e8c223a89683e58d311aac6d7f08bd2f8aba759ba88944&=&format=webp&quality=lossless&width=1157&height=1157',
          link: 'https://payhip.com/b/n8bmK',
        },
        {
          title: 'Bondi Beach',
          description:
            'Position: Lead Developer (Builder + Scripter) - Bondi Beach was a practice commission of replicating real life into ROBLOX, please search real life images of Bondi Beach so you can see the realism behind the project',
          imageUrl:
            'https://media.discordapp.net/attachments/1387912559465594880/1406582412326080512/raw.png?ex=68a2fd74&is=68a1abf4&hm=15a869f2aaf75b6691e8c223a89683e58d311aac6d7f08bd2f8aba759ba88944&=&format=webp&quality=lossless&width=1157&height=1157',
          link: 'https://payhip.com/b/JBv3K',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of CyberOverload',
    description: 'test',
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
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
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
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: '',
      degree: '',
      from: '',
      to: '',
    },
    {
      institution: '',
      degree: '',
      from: '',
      to: '',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: '',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: '',
    },
  ],
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
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
