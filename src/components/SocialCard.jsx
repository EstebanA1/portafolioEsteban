import { Github, Linkedin, Instagram } from 'lucide-react';

export function SocialCard() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/EstebanA1",
    },
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/3stebaby/",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/esteban-rivas-albornoz-2059b3183/",
    },

  ];

  return (
    <div className="social-card-container rounded-3xl bg-black/40 backdrop-blur-sm p-6 border border-white/10 max-h-[320px] overflow-y-auto scrollbar-thin">
      <h3 className="text-2xl font-bold mb-4">Redes Sociales</h3>
      <div className="hexagon-container">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <div key={index} className="hexagon" onClick={() => window.open(social.link, "_blank")}>
              <div className="hexagon-content">
                <Icon className="icon" />
                <div className="username">{social.username}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
