const img = (name) => `/assets/images/${name}`;
const bg = (name) => `/assets/backgrounds/${name}`;

/** Fundos animados: MP4 (bem mais leve que GIF) + primeiro quadro como placeholder. */
export const backdrops = {
  home: { video: bg('home.mp4'), poster: bg('home-poster.gif') },
  boston01: { video: bg('boston01.mp4'), poster: bg('boston01-poster.gif') },
  usa01: { video: bg('usa01.mp4'), poster: bg('usa01-poster.gif') },
  usa02: { video: bg('usa02.mp4'), poster: bg('usa02-poster.gif') },
  // sem versão em vídeo disponível na fonte: segue como GIF externo, com placeholder local
  duke01: {
    gif: 'https://platform.sbnation.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/7962225/tat.0.gif?quality=90&strip=all&crop=0,0,100,100',
    poster: bg('duke01-poster.gif'),
  },
};

/**
 * Conteúdo de cada seção interna. Cada item de `seasons` vira uma rota:
 *   /boston/1 ... /boston/8, /duke, /usa/1, /usa/2
 */
const sections = {
  boston: {
    title: 'JT Boston',
    navIcon: { className: 'navigatorIconUSA', src: img('bostonlogo1.png'), alt: 'Boston Celtics Logo' },
    navListClassName: '',
    logo: { className: 'logoBoston', src: img('bostonname1.png'), alt: 'Boston Celtics', title: 'Boston' },
    pillsClassName: 'BostonPills',
    galleryClassName: 'galleryBoston',
    highlightsUrl: 'https://www.youtube.com/watch?v=uJD7gcpc4lg',
    gallery: [1, 2, 3].map((n) => ({
      full: `/assets/images/spiderman-tobey/movie-01/gallery/image-0${n}-full.jpg`,
      thumb: `/assets/images/spiderman-tobey/movie-01/gallery/image-0${n}.png`,
      alt: '',
    })),
    seasons: [
      {
        backdrop: backdrops.boston01,
        label: 'Year: 2017-18',
        stats: { points: '13.9', assists: '1.6', rebounds: '5.0', steals: '1.0', blocks: '0.7' },
        paragraphs: [
          "Jayson Tatum made an immediate impact upon arriving in the NBA. Selected with the third overall pick in the 2017 NBA Draft, he quickly earned a spot in the starting lineup thanks to his maturity, offensive efficiency, and defensive consistency. Despite being a rookie, he became a key contributor throughout the regular season and delivered several standout performances in the playoffs. With important players such as Kyrie Irving and Gordon Hayward sidelined by injuries, Tatum took on a larger role and helped lead the Celtics to the Eastern Conference Finals. His impressive debut season established him as one of the NBA's brightest young stars and one of the top rookies in the league.",
        ],
      },
      {
        backdrop: backdrops.boston01,
        label: 'Year: 2018-19',
        stats: { points: '15.7', assists: '2.1', rebounds: '6.0', steals: '1.1', blocks: '0.7' },
        paragraphs: [
          "In his second NBA season, Jayson Tatum continued to develop as an important player for the Boston Celtics. He improved his offensive production and gained more experience playing alongside the team's stars. His performance showed that he had the potential to become one of the league's best young players.",
        ],
      },
      {
        backdrop: backdrops.boston01,
        label: 'Year: 2019-20',
        stats: { points: '23.4', assists: '3.0', rebounds: '7.0', steals: '1.4', blocks: '0.9' },
        paragraphs: [
          "The 2019–20 season was a major turning point in Tatum's career. He became an All-Star for the first time and established himself as one of Boston's main offensive leaders. His scoring ability and confidence helped the Celtics reach the Eastern Conference Finals.",
        ],
      },
      {
        backdrop: backdrops.boston01,
        label: 'Year: 2020-21',
        stats: { points: '26.4', assists: '4.3', rebounds: '7.4', steals: '1.2', blocks: '0.5' },
        paragraphs: [
          "Tatum continued to grow as a scorer and playmaker during the 2020–21 season. He averaged more than 26 points per game and became increasingly important to the Celtics' offense. His performances confirmed his status as one of the NBA's rising stars.",
        ],
      },
      {
        backdrop: backdrops.boston01,
        label: 'Year: 2021-22',
        stats: { points: '26.9', assists: '4.4', rebounds: '8.0', steals: '1.0', blocks: '0.6' },
        paragraphs: [
          'In the 2021–22 season, Tatum reached another level as a player. He helped lead the Celtics to the NBA Finals, earning All-NBA First Team honors for the first time. His scoring, rebounding, and defensive contributions made him one of the most important players on the team.',
        ],
      },
      {
        backdrop: backdrops.boston01,
        label: 'Year: 2022-23',
        stats: { points: '30.1', assists: '4.6', rebounds: '8.8', steals: '1.1', blocks: '0.7' },
        paragraphs: [
          "The 2022–23 season was one of the best regular seasons of Tatum's career. He averaged over 30 points per game, becoming a more complete offensive player and earning another All-NBA First Team selection. He continued to establish himself as one of the NBA's elite stars.",
        ],
      },
      {
        backdrop: backdrops.boston01,
        label: 'Year: 2023-24',
        stats: { points: '26.9', assists: '4.9', rebounds: '8.1', steals: '1.0', blocks: '0.6' },
        paragraphs: [
          'In the 2023–24 season, Tatum helped the Boston Celtics win their 18th NBA championship. He maintained his high level of performance throughout the regular season and playoffs, contributing as a scorer, rebounder, and playmaker. This title was the first NBA championship of his career.',
        ],
      },
      {
        backdrop: backdrops.boston01,
        label: 'Year: 2024-25',
        stats: { points: '26.8', assists: '6.0', rebounds: '8.7', steals: '1.1', blocks: '0.5' },
        paragraphs: [
          "During the 2024–25 season, Tatum continued to be one of the Celtics' leading players. He maintained his scoring production while improving his playmaking, averaging a career-best six assists per game. His consistency helped Boston remain competitive at the highest level of the NBA.",
        ],
      },
    ],
  },

  duke: {
    title: 'Jayson Tatum - Duke',
    navIcon: { className: 'navigatorIcon', src: img('dukelogo.png'), alt: 'Duke Icon' },
    navListClassName: '',
    hideSeasonLinks: true,
    logo: { className: 'logo', src: img('dukename.png'), alt: 'Duke Name', title: 'Duke Name' },
    pillsClassName: 'DukePills',
    galleryClassName: 'galleryDuke',
    highlightsUrl: 'https://www.youtube.com/watch?v=gjyN-aGHr2o',
    gallery: [1, 2, 3].map((n) => ({
      full: img(`duke${n}.png`),
      thumb: img(`duke${n}.png`),
      alt: 'Playing for the Duke',
    })),
    seasons: [
      {
        backdrop: backdrops.duke01,
        label: 'Year: 2016-17',
        stats: { points: '16.8', assists: '2.1', rebounds: '7.3', steals: '1.3', blocks: '1.1' },
        paragraphs: [
          'Jayson Tatum played one season of college basketball for the Duke Blue Devils during the 2016–2017 season. Under the legendary coach Mike Krzyzewski, Tatum quickly became one of the team’s top players. Despite missing the first eight games of the season due to a foot injury, he returned and made an immediate impact with his scoring, rebounding, and defensive skills.',
          'After just one season, Tatum declared for the 2017 NBA Draft and was selected third overall by the Boston Celtics, marking the beginning of what would become an outstanding professional career.',
        ],
      },
    ],
  },

  usa: {
    title: 'Jayson Tatum - USA',
    navIcon: { className: 'navigatorIcon', src: img('usalogo1.png'), alt: 'USA Logo' },
    navListClassName: 'usaActive',
    logo: { className: 'logoUsa', src: img('usaescrita.png'), alt: 'USA', title: 'USA' },
    pillsClassName: 'UsaPills',
    galleryClassName: 'galleryUSA',
    highlightsUrl: 'https://www.youtube.com/watch?v=QbG2fBRtcuM&t=0s',
    gallery: [1, 2, 3].map((n) => ({
      full: img(`usafoto${n}.png`),
      thumb: img(`usafoto${n}.png`),
      alt: 'USA Basketball',
    })),
    seasons: [
      {
        backdrop: backdrops.usa01,
        label: 'U-17 and U-19',
        stats: { points: '12.6', assists: '2.1', rebounds: '3.8', steals: '1.9', blocks: '0.9' },
        paragraphs: [
          'The trajectory of Jayson Tatum in the United States youth national teams was marked by early success. He participated in major competitions organized by USA Basketball, helping the country win titles at the U-17 and U-19 levels. With strong performances and consistency, Tatum stood out as one of the top players of his generation. This international experience was essential for his development and helped pave the way for his arrival in the NBA.',
        ],
      },
      {
        backdrop: backdrops.usa02,
        label: 'Year: 2019-now',
        stats: { points: '10.6', assists: '1.3', rebounds: '4.3', steals: '0.9', blocks: '1.2' },
        paragraphs: [
          'The trajectory of Jayson Tatum with the United States senior national team highlights his importance on the international stage. Representing USA Basketball, he won the gold medal at the Tokyo 2020 Olympic Games and also played in the 2019 FIBA Basketball World Cup. In addition, Tatum also won gold at the Paris 2024 Olympic Games, further reinforcing his successful journey with the national team. With consistent performances, he has established himself as an important player, contributing on both offense and defense.',
        ],
      },
    ],
  },
};

export default sections;

/** Cards do carrossel da home, na ordem em que aparecem. */
export const homeCards = [
  { id: 'JTBoston', to: '/boston/1', background: img('bostonstadium.png'), backgroundAlt: 'Boston Stadium', image: img('bostonpage.png'), imageAlt: 'Jayson Tatum - Boston' },
  { id: 'JTDuke', to: '/duke', background: img('dukestadium2.png'), backgroundAlt: 'Duke Stadium', image: img('dukepage.png'), imageAlt: 'Jayson Tatum - Duke' },
  { id: 'JTUSA', to: '/usa/1', background: img('usastadium.png'), backgroundAlt: 'USA Stadium', image: img('usapage.png'), imageAlt: 'Jayson Tatum - USA' },
];
