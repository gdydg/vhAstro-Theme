// 音乐胶囊配置文件
export interface MusicTrack {
  name: string;
  artist: string;
  url: string;
  cover: string;
  lrc?: string;
}

export interface MusicConfig {
  // 播放器设置
  autoplay: boolean;
  theme: string;
  loop: 'all' | 'one' | 'none';
  order: 'list' | 'random';
  volume: number;
  
  // 播放列表
  playlist: MusicTrack[];
}

// 默认音乐配置
export const MUSIC_CONFIG: MusicConfig = {
  // 播放器设置
  autoplay: false,
  theme: '#b7daff',
  loop: 'all',
  order: 'list',
  volume: 0.7,
  
  // 播放列表 - 用户可以在这里添加自己的音乐
  playlist: [
    {
      name: '夜曲',
      artist: '周杰伦',
      url: 'https://music.163.com/song/media/outer/url?id=186016.mp3',
      cover: 'https://p2.music.126.net/UeTuwE7pvjBpypWLudqukA==/18646078767803137.jpg',
      lrc: '[00:00.00] 暂无歌词'
    },
    {
      name: '稻香',
      artist: '周杰伦',
      url: 'https://music.163.com/song/media/outer/url?id=186017.mp3',
      cover: 'https://p1.music.126.net/oy4-SFIgfGGjoGLwZZrJJw==/18590542604286213.jpg',
      lrc: '[00:00.00] 暂无歌词'
    },
    {
      name: '青花瓷',
      artist: '周杰伦',
      url: 'https://music.163.com/song/media/outer/url?id=186018.mp3',
      cover: 'https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg',
      lrc: '[00:00.00] 暂无歌词'
    },
    {
      name: '晴天',
      artist: '周杰伦',
      url: 'https://music.163.com/song/media/outer/url?id=186019.mp3',
      cover: 'https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
      lrc: '[00:00.00] 暂无歌词'
    }
  ]
};

// 获取音乐配置的函数
export function getMusicConfig(): MusicConfig {
  return MUSIC_CONFIG;
}