export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: React.ReactNode;
  points?: string[];
  beta?: boolean;
}

export interface Integration {
  name: string;
  logo: string;
  href: string;
}

export interface CustomerStory {
  author: {
    name: string;
    handle: string;
    avatar: string;
    role: string;
    company: string;
  };
  content: string;
  date: string;
}
