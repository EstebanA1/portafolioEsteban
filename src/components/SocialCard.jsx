import { Github, Linkedin, Twitter } from 'lucide-react';

export function SocialCard() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/EstebanA1",
      username: "@EstebanA1"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/esteban-rivas-albornoz-2059b3183/",
      username: "Esteban Rivas"
    },
  ];

  return (
    <div className="rounded-3xl bg-black/40 backdrop-blur-sm p-6 border border-white/10">
      <h3 className="text-2xl font-bold mb-4">Redes Sociales</h3>
      <div className="space-y-3">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-black/30 border border-white/5 hover:bg-black/50 transition-colors"
            >
              <Icon className="w-5 h-5" />
              <div>
                <div className="font-medium">{social.name}</div>
                <div className="text-sm text-gray-400">{social.username}</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}