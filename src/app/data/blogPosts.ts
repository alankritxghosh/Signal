export interface BlogSection {
  heading?: string;
  paragraphs: string[];
  pullQuote?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-founders-stop-reading-email',
    title: 'Why Founders Stop Reading Email',
    subtitle: 'Founders stop reading email at a predictable moment. Not when they get lazy. Not when they lose discipline. They stop when the inbox becomes structurally illegible.',
    date: 'February 7, 2026',
    readTime: '8 min read',
    sections: [
      {
        paragraphs: [
          'Founders stop reading email at a predictable moment. Not when they get lazy. Not when they lose discipline. They stop when the inbox becomes structurally illegible.',
          'The problem is not volume. The problem is that volume destroys judgment.',
        ],
      },
      {
        heading: 'From Tool to Liability',
        paragraphs: [
          'An inbox starts as a tool. Early on, every message carries signal. A customer. A co-founder. A potential hire. A partner. The inbox is a place where decisions happen.',
          'Then scale arrives. Not gradually. Suddenly.',
          'The inbox fills with vendor pitches. Newsletter confirmations. Meeting invites from people you do not know. Calendar reminders. LinkedIn notifications. Automated alerts. Messages that look important but are not. Messages that are important but look like noise.',
          'The inbox stops being a decision surface. It becomes a sorting problem.',
          'Most founders respond the same way. They try harder. They wake up earlier. They add filters. They batch email at the end of the day. They archive aggressively. They tell people to Slack them instead.',
          'None of it works.',
        ],
      },
      {
        heading: 'The Cognitive Cost of Triage',
        paragraphs: [
          'Reading 200 messages is not 200 decisions. It is one exhausting meta-decision repeated 200 times.',
          'Is this worth reading. Is this worth responding to. Is this urgent. Is this real. Is this someone who will be offended if I ignore it. Is this something I said yes to and forgot. Is this a fire.',
          'Every message demands the same cognitive load. Subject line. Sender. First sentence. Judgment call.',
          'Triage is not reading. Triage is evaluation at scale. And evaluation at scale is where judgment breaks down.',
          'After 50 messages, precision collapses. The brain starts optimizing for speed, not accuracy. Important things get skipped. Unimportant things get opened. The distinction stops mattering.',
          'By message 100, the inbox is no longer a communication tool. It is a guilt surface.',
        ],
        pullQuote: 'Triage is not reading. Triage is evaluation at scale.',
      },
      {
        heading: 'Why Filters Fail',
        paragraphs: [
          'Filters operate on metadata. Sender. Subject line. Presence of keywords. Presence of attachments. Domain patterns.',
          'Metadata is not judgment.',
          'A message from a customer might be critical. It might also be a feature request you cannot act on. A message from an investor might be urgent. It might also be a portfolio update you already know about. A message with your name in the subject line might be personal. It might also be automated outreach.',
          'Filters cannot make these distinctions. They can route. They can label. They can quarantine. But they cannot decide what deserves attention, because attention is contextual.',
          'What matters to a founder at 9am on Monday is different from what matters at 6pm on Friday. What matters when fundraising is different from what matters when shipping. What matters when hiring is different from what matters when firefighting.',
          'Metadata does not change with context. Judgment does.',
        ],
      },
      {
        heading: 'The Structural Problem',
        paragraphs: [
          'The inbox was not designed for judgment at scale. It was designed for correspondence.',
          'Correspondence assumes reciprocity. Both parties have context. Both parties have intent. The message exists because both sides agreed it should.',
          'That model collapsed. Email is no longer correspondence. It is broadcast with a reply button.',
          'Most messages in a founder\'s inbox were not sent because of a relationship. They were sent because of a pattern. Someone scraped LinkedIn. Someone bought a list. Someone set up a drip campaign. Someone automated outreach.',
          'The inbox treats all of it the same. A message from your co-founder sits next to a message from a marketing automation platform. A contract from your lawyer sits next to a webinar invitation. A critical customer issue sits next to a newsletter you signed up for three years ago.',
          'There is no hierarchy. There is no triage. There is only chronology.',
        ],
        pullQuote: 'Chronology is not judgment.',
      },
      {
        heading: 'What Breaks',
        paragraphs: [
          'Founders do not stop reading email because they are irresponsible. They stop because continuation is irrational.',
          'If you cannot trust that the important things will surface, you cannot afford to ignore anything. If you cannot ignore anything, you cannot process everything. If you cannot process everything, you stop processing altogether.',
          'This is not failure. This is structural collapse.',
          'The inbox becomes a place where things go to be forgotten. Founders check it out of guilt, not intention. They skim. They archive in bulk. They search only when someone follows up.',
          'The tool became a liability.',
        ],
      },
      {
        heading: 'Judgment Cannot Be Automated',
        paragraphs: [
          'The obvious response is automation. Let an algorithm decide what matters. Let AI summarize. Let filters prioritize. Let something else make the call.',
          'This is a category error.',
          'Judgment cannot be automated. Judgment is the application of context, intent, and priority to a decision. Those things are not static. They shift based on what the founder is working on, what stage the company is in, what just broke, what just closed.',
          'An algorithm does not know that the deck is due tomorrow. It does not know that this investor passed last year. It does not know that this customer is at risk. It does not know that this vendor relationship is about to end.',
          'It can guess. It can pattern-match. It can optimize for what worked before. But it cannot judge.',
        ],
      },
      {
        heading: 'Judgment Can Be Assisted',
        paragraphs: [
          'Assistance is different from automation.',
          'Automation replaces. Assistance amplifies.',
          'A tool that assists judgment does not decide what matters. It removes what definitively does not. It surfaces what might. It provides structure without imposing conclusions.',
          'The founder still decides. But the decision surface is legible again.',
          'Signal does not automate judgment. It removes the noise that makes judgment impossible. It operates locally. It processes metadata and, when necessary, validates with context. It does not decide. It clarifies.',
          'The inbox does not become smaller. It becomes readable.',
          'Founders stop reading email because the inbox became a place where judgment could not happen. The solution is not to read harder. The solution is to restore the conditions under which judgment becomes possible again.',
          'That requires restraint, not capability.',
        ],
        pullQuote: 'Most tools add. Signal removes.',
      },
    ],
  },
];
