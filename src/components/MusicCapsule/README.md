# 音乐胶囊组件 (MusicCapsule)

一个漂亮的音乐播放器胶囊组件，固定在页面左下角，支持展开/收起功能。

## 功能特性

- 🎵 基于 APlayer 的音乐播放器
- 🎨 现代化胶囊设计，支持毛玻璃效果
- 📱 响应式设计，适配移动端
- 🌙 支持暗色主题自动适配
- ⚡ 平滑的展开/收起动画
- 🎶 播放时的脉冲动画效果
- 🎯 点击切换显示/隐藏播放器

## 组件结构

```
src/components/MusicCapsule/
├── MusicCapsule.astro    # 主组件文件
├── MusicCapsule.less     # 样式文件
└── README.md            # 使用说明
```

## 配置文件

音乐配置位于 `src/config/musicConfig.ts`：

```typescript
export const MUSIC_CONFIG: MusicConfig = {
  // 播放器设置
  autoplay: false,        // 是否自动播放
  theme: '#b7daff',      // 主题色
  loop: 'all',           // 循环模式: 'all' | 'one' | 'none'
  order: 'list',         // 播放顺序: 'list' | 'random'
  volume: 0.7,           // 默认音量 (0-1)
  
  // 播放列表
  playlist: [
    {
      name: '歌曲名',
      artist: '歌手名',
      url: '音频文件URL',
      cover: '封面图片URL',
      lrc: '歌词内容（可选）'
    }
    // ... 更多歌曲
  ]
};
```

## 自定义音乐

### 1. 添加新歌曲

编辑 `src/config/musicConfig.ts` 文件，在 `playlist` 数组中添加新的歌曲对象：

```typescript
{
  name: '你的歌曲名',
  artist: '歌手名',
  url: 'https://example.com/your-music.mp3',
  cover: 'https://example.com/cover.jpg',
  lrc: '[00:00.00] 歌词内容'
}
```

### 2. 修改播放器设置

可以修改以下设置：

- `autoplay`: 设置为 `true` 启用自动播放
- `theme`: 修改主题色，支持十六进制颜色代码
- `loop`: 修改循环模式
- `volume`: 调整默认音量

### 3. 音频文件来源

支持以下音频来源：
- 网易云音乐外链（需要版权支持）
- 自托管的音频文件
- 其他音乐平台的外链

## 样式自定义

### 修改胶囊位置

编辑 `MusicCapsule.less` 中的位置设置：

```less
.music-capsule {
  position: fixed;
  bottom: 20px;    // 距离底部距离
  left: 20px;      // 距离左侧距离
  // 或者改为右下角：
  // right: 20px;
  // left: auto;
}
```

### 修改胶囊样式

可以自定义：
- 胶囊大小和颜色
- 渐变背景
- 阴影效果
- 动画效果

## 移动端适配

组件已经针对移动端进行了优化：

- 在小屏幕设备上调整了位置和大小
- 避免与移动端底部导航冲突
- 支持触摸操作

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 注意事项

1. **音频文件格式**: 建议使用 MP3 格式，确保跨浏览器兼容性
2. **CORS 问题**: 如果使用外部音频文件，确保服务器支持 CORS
3. **版权问题**: 使用音乐时请注意版权问题
4. **性能优化**: 避免添加过多大文件，影响页面加载速度

## 故障排除

### 音乐无法播放
1. 检查音频文件 URL 是否有效
2. 确认服务器支持 CORS
3. 检查浏览器控制台是否有错误信息

### 样式显示异常
1. 确认 Less 文件正确编译
2. 检查 CSS 选择器优先级
3. 验证响应式断点设置

### 移动端问题
1. 检查触摸事件绑定
2. 验证移动端媒体查询
3. 测试不同屏幕尺寸