import { MigrationInterface, QueryRunner } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Experience } from '../src/experiences/experience.entity';
import { Theme } from 'src/themes/theme.entity';

const experiences = [
  {
    id: uuid(),
    title: 'Getting Things Done',
    author: 'David Allen',
    themeName: 'Getting shit done',
    takeaway: 'My mind is for generating ideas not holding them',
    description:
      'I had many "projects" going on in my life and at one point it started to feel difficult to coop up. I had two options, either cancel some of my commitments or create a system to manage things without stressing much.\n\nThis book helped me create that system. Even though it is not as easy to read, the proposed system was extremely helpful!',
  },
  {
    id: uuid(),
    title: 'The Personal MBA',
    author: 'Josh Kaufman',
    themeName: 'Starting a business',
    takeaway: 'Business" is not rocket science, the basics can take you very far',
    description:
      'Before quitting my job and becoming an entrepeneur. This book introduced me to many "business" concepts that are extremely helpful in starting a business. Starting a business was a scary unknown endevour for me, I was thankful to find a book to explain some of the necessary processes in plain English. I will definitely be revisiting this book several times in the future.',
  },
  {
    id: uuid(),
    title: 'Fluent Forever',
    author: 'Gabriel Wyner',
    themeName: 'Immigrating',
    takeaway: 'Space repetition and visual cues can really make you memorize anything',
    description:
      'This book found me in the right time. I have moved to Finland a year ago and decided to give learning Finnish a try. It felt that a lot of the language books I came across written by linguists for linguists, not for me. \n\nHowever, I found the method recommended in the book very helpful. Learning a language has many factors. Today I am able to work & live using the Finnish and this book definitely have been one factor in my achievement.',
  },
  {
    id: uuid(),
    title: 'Smartcuts',
    author: 'Shane Snow',
    themeName: 'Entering the workforce',
    takeaway: 'Work smarter not harder',
    description:
      'I have just started learning computer programming. This book showed me examples of what it means to work "smarter" and not "harder".\n\n I learnt that it matters where to put energy when it comes to learning. I picked from the book its good to put yourself in a challenging environment. Painful to do in the short-term, but gives amazing results in the long-term.',
  },
  {
    id: uuid(),
    title: 'Anything You Want',
    author: 'Derek Sivers',
    themeName: 'Starting a business',
    takeaway: 'Focus on providing the highest value to your customers and everything else will follow',
    description:
      "I was in the transition phase of starting a business. The story of the author was inspiring. It showed me that people that starts business don't necessary always know what they are doing at the beginning. I could relate to that!",
  },
  {
    id: uuid(),
    title: 'Leadership and Self-deception',
    author: 'The Arbinger Institute',
    themeName: 'Getting better with people',
    takeaway: "Understanding someone else's point of view requires constant awareness",
    description:
      'I had just started a new job and I got this as a "welcoming gift" with the recommendation of reading it. I had quite a bit of stuff going on in my life then with the new work, just started writing my thesis seriously, and also my relationship had ended. I found myself thinking about these changes and my life, and how my decision had led to this point. I felt that reading this book at that time helped me to analyse my own current situtation. It also helped me to prepare for meeting a lot of new people and building relationships at the new job.',
  },
  {
    id: uuid(),
    title: 'Min historia: Petter Northug',
    author: 'Petter Northug, Jonas Forsang',
    themeName: 'Getting mentally fit',
    takeaway: 'Becoming the best requires some degree of obsession',
    description:
      'I am a really competitive person and always been into sports. I\'ve dreamt of becoming a professional in some sport. I\'ve tried many different sports, but never quite found my own "thing". This book thaught me that anything is possible if you just work and practice hard enough. Before I thought that sport superstars are "born with it", but this book gave me one more example that this is not true.',
  },
  {
    id: uuid(),
    title: "So Good They Can't Ignore You: Why Skills Trump Passion in the Quest for Work You Love",
    author: 'Cal Newport',
    themeName: 'Challenge your beliefs',
    takeaway: 'Passion can be created through hard work',
    description:
      'This book thaught me the basic fact that putting down hours into something gives results. Before reading I thought that some people have a passion for something and from that they find the motivation to do what they love. However, this book made me realize that it can also be the other way around; someone can do something to an extent that they build a passion for it',
  },
  {
    id: uuid(),
    title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck',
    themeName: 'Being a mentee',
    takeaway: 'Allowing yourself to make mistakes leads to growth',
    description:
      'I was at the time spending a lot of time by myself and thinking about what I am doing with my career and relationships. I found that this book helped me both in dealing with difficult career related problems, but most importantly it helped me to analyze my current relations with friends and family. It helped me to start seeing the growth mindset where problems and setbacks are something positive from where I can learn and grow as a person',
  },
  {
    id: uuid(),
    title: 'Set for Life',
    author: 'Scott Trench',
    themeName: 'Becoming financially independent',
    takeaway: 'Live frugally, optimise your income and invest the surplus in real estate or stock market.',
    description:
      "I was in my 20s when I read the book and I could relate a lot to the author's ideas as he was quite young himself. \n\nI learnt that there are basically three items where I can optimise things: \n- Spending: Focus on the biggest expenses.\n- Income: Pursue opportunities that can significantly increase your income.\n- Invest: Stock market (passive), real estate (active) or starting a business",
  },
  {
    id: uuid(),
    title: 'Discipline Equals Freedom',
    author: 'Jocko Willink',
    themeName: 'Getting mentally fit',
    takeaway: 'More discipline equals more freedom in life.',
    description:
      'The author\'s mantra was counter-intuitive for me at first. Discipline is something that isn\'t that much discussed around me. But the more I thought about my own life, the more believed it. Whatever positive things I achieved required some sort of discipline. By design everything in life that is good requires discipline.\n\nI found it useful to think of discipline as a muscle that I can train. My ultimate goal is to be smarter, healthier, stronger & leaner.\n\nI really liked the attitde of "good". Whatever happens, there is always a good side to it. Not only that keeps me positive, also it brings enough energy to react to challenging situations.',
  },
  {
    id: uuid(),
    title: 'How to win friends and influence people',
    author: 'Dale Carnegie',
    themeName: 'Getting better with people',
    takeaway: 'Listen more, be interested in others and avoid attacking people verbally',
    description:
      'I loved this book! I was in college when this book found me and it really helped me connect with people better. I wish they taught me these things in school earlier. \n\nIt is is amazing how simple things such as using names, smiling and show interest can radically make people more friendly to you.\n\nI learnt that it is really difficult to influence others by just stating the facts. I need to appeal to both the mind & the heart for me to really influence others.\n\nSeeing things from their point of view is essential.  Also avoiding directly attacking view has been very helpful for both my personal & professional life.',
  },
  {
    id: uuid(),
    title: 'The life-changing magic of tidying up',
    author: 'Marie Kondo',
    themeName: 'Moving out',
    takeaway: 'Create a home for every item in your house. Only keep the items that brings you joy',
    description: '',
  },
  {
    id: uuid(),
    title: 'The courage to be disliked',
    author: 'Ichiro Kishimi',
    themeName: 'Challenge your beliefs',
    takeaway: '',
    description: '',
  },
  {
    id: uuid(),
    title: 'Antifragile',
    author: 'Nassim Taleb',
    themeName: 'Surviving a crisis',
    takeaway: '',
    description: '',
  },
  {
    id: uuid(),
    title: 'How to stop worrying and start living',
    author: 'Dale Carnegie',
    themeName: 'Getting mentally fit',
    takeaway: '',
    description: '',
  },
  {
    id: uuid(),
    title: 'Essentialism',
    author: 'Greg McKeown',
    themeName: 'Finding yourself',
    takeaway: "You can't have it all. Focus on what matters and eliminate everything else.",
    description: '',
  },
  {
    id: uuid(),
    title: 'How to write seductive web copy',
    author: 'Henneke Duistermaat',
    themeName: 'Starting a business',
    takeaway: 'Write short clear content that focus on benefits to your customers',
    description: '',
  },
  {
    id: uuid(),
    title: 'Total Recall',
    author: 'Arnold Schwarzenegger',
    themeName: 'Getting mentally fit',
    takeaway: 'Adjust your vision with your goals and put in the hours to achieve these goals',
    description: '',
  },
  {
    id: uuid(),
    title: 'Money Master the Game',
    author: 'Tony Robbins',
    themeName: 'Learning personal finance',
    takeaway: 'Invest your money in low cost funds. Favor moderate growth with less volatility.',
    description: '',
  },
  {
    id: uuid(),
    title: 'Deep Work',
    author: 'Cal Newport',
    themeName: 'Getting shit done',
    takeaway: 'Multi-tasking is a myth. Systematically eliminate distractions to get anything meaningful done',
    description: '',
  },
  {
    id: uuid(),
    title: 'Never Split the difference',
    author: 'Chris Voss',
    themeName: 'Getting better with people',
    takeaway:
      'Negotation is not a zero-sum game. Gather information to reach an agreement where both parties get the highest value possible',
    description: '',
  },
  {
    id: uuid(),
    title: 'The subtle art of not giving a fuck',
    author: 'Mark Manson',
    themeName: 'Getting mentally fit',
    takeaway: 'You have limited energy, spend it on what matters',
    description: '',
  },
  {
    id: uuid(),
    title: 'Shoe Dog',
    author: 'Phil Knight',
    themeName: 'Starting a business',
    takeaway: 'If you are passionate enough, stay long enough in the game and you will get lucky.',
    description: '',
  },
  {
    id: uuid(),
    title: 'A guide to the good life',
    author: 'William Irvine',
    themeName: 'Getting mentally fit',
    takeaway: "Focus on what you can control and don't take things for granted",
    description: '',
  },
  {
    id: uuid(),
    title: 'A guide to the good life',
    author: 'William Irvine',
    themeName: 'Dealing with grief',
    takeaway: 'Main goal in life is to become an excellent human being so that you can benefit OTHERS',
    description:
      "This book helped me during a crisis in which I had suicidal thoughts. It made me realize that there is a limit until which it is OK to live and also NOT ok to live, and that you're free to walk away anytime by calling it a day. But, until then, absolutely make the best out of life and try to become an excellent human because that'll benefit yourself and also more importantly others. Others are the main goal in life.",
  },
  {
    id: uuid(),
    title: 'Millionaire Fastlane',
    author: 'DeMarco, M.J.',
    themeName: 'Becoming financially independent',
    takeaway: 'You must PRODUCE to become wealth.',
    description:
      'This book helped me understand that I will be forever poor, and rightly so, if I always consume and never produce something. And this "production" should not be selfish either, it should be for OTHERS. And if you do produce for others, you\'ll accumulate wealth as a side effect and it won\'t be an issue.',
  },
  {
    id: uuid(),
    title: 'How to win friends and influence people',
    author: 'Dale Carnegie',
    themeName: 'Building friendships',
    takeaway: 'People are EMOTIONAL, NOT RATIONAL.',
    description:
      'Once I understood that humans are mainly, primarily, and almost exclusively operate based on various emotions, everything else started to make sense for me. I realized for example that why it is that if I win an argument based on logic, nonetheless the person would dislike me. Because, emotions, not rational.',
  },
  {
    id: uuid(),
    title: 'Tuesdays with Morrie',
    author: 'Mitch Albom',
    themeName: 'Finding yourself',
    takeaway:
      "It's okay if life does not go your way, you have to learn to adapt and once you know what's important and what's not, you will enjoy it more and it will bring you peace",
    description:
      "People insulted you? it's okay. Person you like doesn't know you exist? it's okay. Want be a better person? Be nice, be kind, be compassionate.",
  },
];

export class ExperienceSeed1592922206469 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const entityManager = queryRunner.manager;
    await Promise.all(
      experiences.map(async (experience) => {
        const theme = await entityManager.findOne(Theme, { where: { name: experience.themeName } });
        await entityManager.save(Experience, {
          author: experience.author,
          description: experience.description,
          id: experience.id,
          takeaway: experience.takeaway,
          title: experience.title,
          theme: [theme],
        });
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const entityManager = queryRunner.manager;
    await entityManager.clear(Experience);
  }
}
