// Cấu hình ngôn ngữ
export const languages = {
  vi: {
    code: 'vi',
    name: 'Tiếng Việt',
    flag: '🇻🇳'
  },
  zh: {
    code: 'zh',
    name: '中文',
    flag: '🇨🇳'
  }
};

// Nội dung đa ngôn ngữ
export const translations = {
  vi: {
    hero: {
      title: 'Chúc Mừng Năm Mới 2026',
      subtitle: 'Gửi đến {name} - một người đặc biệt',
      iphoneBadge: 'Được tối ưu cho iPhone 12 Pro Max của {name}!',
      iphoneBadgeNormal: 'Được tối ưu cho iPhone của {name}!'
    },
    countdown: {
      title: 'Đếm Ngược Đến Năm Mới 2026',
      days: 'Ngày',
      hours: 'Giờ',
      minutes: 'Phút',
      seconds: 'Giây'
    },
    loveMessage: {
      title: 'Những Lời Chân Thành',
      messages: [
        '{name} là một người đặc biệt và tuyệt vời trong cuộc đời {sender}',
        'Mỗi lần được trò chuyện với {name} đều làm {sender} cảm thấy vui vẻ',
        '{sender} rất thích được ở bên cạnh và tìm hiểu thêm về {name}',
        '{name} là một món quà quý giá mà cuộc đời đã ban tặng',
        'Chúc {name} một năm mới tràn đầy niềm vui và hạnh phúc'
      ],
      letterTitle: 'Gửi {name} ❤️',
      letterContent: 'Năm mới 2026 đã đến, {sender} muốn gửi đến {name} những lời chúc tốt đẹp nhất. Chúc {name} luôn khỏe mạnh, hạnh phúc và thành công trong mọi việc. {sender} hy vọng năm mới này chúng ta sẽ có thêm nhiều cơ hội để hiểu nhau hơn và tạo nên những kỷ niệm đẹp.',
      signature: 'Với sự chân thành,',
      senderName: 'Anh'
    },
    interactiveWishes: {
      button: 'Click để nhận lời chúc!',
      wishes: [
        {
          title: 'Chúc {name} Năm Mới',
          message: 'Chúc {name} một năm mới 2026 tràn đầy hạnh phúc, sức khỏe và thành công! {sender} rất vui khi được quen biết {name}! ❤️'
        },
        {
          title: 'Nguyện Ước Đầu Năm',
          message: '{sender} ước rằng năm mới này chúng ta sẽ có thêm nhiều cơ hội để trò chuyện và hiểu nhau hơn. {name} là một người đặc biệt! ✨'
        },
        {
          title: 'Món Quà Nhỏ',
          message: 'Website này là món quà nhỏ {sender} dành tặng {name} nhân dịp năm mới. Mong {name} sẽ thích và cảm thấy vui vẻ khi xem! 💝'
        },
        {
          title: 'Lời Mong Ước',
          message: '{sender} mong rằng năm mới này {name} sẽ luôn vui vẻ, hạnh phúc và gặp nhiều may mắn trong cuộc sống! 🌸'
        },
        {
          title: 'Sự Quan Tâm',
          message: 'Dù năm mới hay năm cũ, {sender} luôn mong {name} được hạnh phúc và thành công trong mọi việc! 💕'
        },
        {
          title: 'Khởi Đầu Mới',
          message: 'Năm mới là khởi đầu mới cho những ước mơ và hoài bão. Chúc {name} sẽ đạt được tất cả những gì {name} mong muốn! 🥰'
        }
      ],
      hint: '💡 Click vào nút để xem lời chúc tiếp theo!',
      prev: '← Trước',
      next: 'Sau →'
    },
    wish: {
      title: 'Lời Chúc Năm Mới',
      wishes: [
        'Sức khỏe dồi dào',
        'Hạnh phúc tràn đầy',
        'Thành công trong công việc',
        'Luôn xinh đẹp và rạng rỡ',
        'Nhiều niềm vui mỗi ngày',
        'Gia đình hạnh phúc',
        'Gặp nhiều may mắn',
        'Thành công trong mọi việc'
      ],
      finalMessage: 'Chúc {name} một năm mới 2026 đầy ắp niềm vui và hạnh phúc! ❤️',
      signature: 'Với sự chân thành,'
    },
    fireworks: {
      title: '🎆 Chúc Mừng Năm Mới 2026! 🎆',
      subtitle: 'Năm mới đã đến rồi! Chúc {name} một năm mới đầy hạnh phúc và thành công! ✨',
      celebration: 'Happy New Year 2026!'
    },
    iphone: {
      title12ProMax: '{sender} biết {name} đang dùng iPhone 12 Pro Max! 📱✨',
      titleNormal: '{sender} biết {name} đang dùng iPhone! 📱',
      message: 'Website này được thiết kế đặc biệt để trông đẹp nhất trên màn hình iPhone của {name}. Màn hình lớn của iPhone 12 Pro Max sẽ làm cho mọi animation và hiệu ứng trở nên tuyệt vời hơn!',
      features: [
        'Tối ưu cho màn hình lớn',
        'Animations mượt mà',
        'Trải nghiệm tuyệt vời'
      ],
      close: 'Đóng'
    }
  },
  zh: {
    hero: {
      title: '新年快乐 2026',
      subtitle: '送给{name} - 一个特别的人',
      iphoneBadge: '专为{name}的iPhone 12 Pro Max优化！',
      iphoneBadgeNormal: '专为{name}的iPhone优化！'
    },
    countdown: {
      title: '倒计时到2026年新年',
      days: '天',
      hours: '小时',
      minutes: '分钟',
      seconds: '秒'
    },
    loveMessage: {
      title: '真诚的话语',
      messages: [
        '{name}是{sender}生命中一个特别而美好的人',
        '每次与{name}聊天都让{sender}感到快乐',
        '{sender}很喜欢和{name}在一起，想更多地了解{name}',
        '{name}是生活赐予的珍贵礼物',
        '祝{name}新年充满欢乐和幸福'
      ],
      letterTitle: '送给{name} ❤️',
      letterContent: '2026年新年到了，{sender}想送给{name}最美好的祝福。祝{name}永远健康、快乐，事事成功。{sender}希望在新的一年里，我们能有更多机会互相了解，创造美好的回忆。',
      signature: '真诚地，',
      senderName: '我'
    },
    interactiveWishes: {
      button: '点击接收祝福！',
      wishes: [
        {
          title: '祝{name}新年快乐',
          message: '祝{name}2026年新年充满幸福、健康和成功！{sender}很高兴认识{name}！❤️'
        },
        {
          title: '新年愿望',
          message: '{sender}希望在新的一年里，我们能有机会更多地聊天和互相了解。{name}是一个特别的人！✨'
        },
        {
          title: '小礼物',
          message: '这个网站是{sender}在新年送给{name}的小礼物。希望{name}会喜欢，看的时候感到开心！💝'
        },
        {
          title: '美好祝愿',
          message: '{sender}希望在新的一年里，{name}永远快乐、幸福，生活中充满好运！🌸'
        },
        {
          title: '关心',
          message: '无论新年还是旧年，{sender}总是希望{name}幸福，事事成功！💕'
        },
        {
          title: '新的开始',
          message: '新年是梦想和抱负的新开始。祝{name}实现所有愿望！🥰'
        }
      ],
      hint: '💡 点击按钮查看下一个祝福！',
      prev: '← 上一个',
      next: '下一个 →'
    },
    wish: {
      title: '新年祝福',
      wishes: [
        '身体健康',
        '幸福满满',
        '工作顺利',
        '永远美丽',
        '每天开心',
        '家庭幸福',
        '好运连连',
        '事事成功'
      ],
      finalMessage: '祝{name}2026年新年充满欢乐和幸福！❤️',
      signature: '真诚地，'
    },
    fireworks: {
      title: '🎆 新年快乐 2026！🎆',
      subtitle: '新年到了！祝{name}新年充满幸福和成功！✨',
      celebration: '新年快乐 2026！'
    },
    iphone: {
      title12ProMax: '{sender}知道{name}在用iPhone 12 Pro Max！📱✨',
      titleNormal: '{sender}知道{name}在用iPhone！📱',
      message: '这个网站专门为{name}的iPhone屏幕设计，看起来最美。iPhone 12 Pro Max的大屏幕会让所有动画和效果变得非常棒！',
      features: [
        '专为大屏幕优化',
        '流畅的动画',
        '绝佳的体验'
      ],
      close: '关闭'
    }
  }
};

// Hàm thay thế placeholder
export const replacePlaceholders = (text, name, sender, fullName = '') => {
  return text
    .replace(/{name}/g, name)
    .replace(/{sender}/g, sender)
    .replace(/{fullName}/g, fullName);
};

