
const navi_list = [
  { icon: "/img/main-img/github.png", url: "https://github.com/HelTecAutomation" },
  { icon: "/img/main-img/reddit.png", url: "https://www.reddit.com/user/Heltec Automation6/" },
  { icon: "/img/main-img/facebook.png", url: "https://www.facebook.com/profile.php?id=61580053774905" },
  { icon: "/img/main-img/twitter.png", url: "https://x.com/Heltec Auto" },
  { icon: "/img/main-img/youtube.png", url: "https://www.youtube.com/@HeltecAutomation" },
  { icon: "/img/main-img/instagram.png", url: "https://www.instagram.com/heltec automation" },
  { icon: "/img/main-img/tiktok.png", url: "https://www.tiktok.com/@heltec.automation" },
];

export default function FooterSocials() {
  return (
    <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
      {navi_list.map((item, index) => (
        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
          <img src={item.icon} alt="" style={{ width: 24, height: 24 }} />
        </a>
      ))}
    </div>
  );
}
