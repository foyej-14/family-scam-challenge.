export const MESSAGES = [
  {
    id: 1,
    sender: 'Kurier Contoh',
    text: 'Your parcel is held at customs. Pay RM3.50 within 24 hours or it is sent back. Pay here: (short link)',
    correct: 'scam',
    reasons: [
      'A fee to release a parcel.',
      'A deadline pressing you to act fast.',
      'A short link instead of the courier\'s own app.',
    ],
  },
  {
    id: 2,
    sender: 'Bank Contoh',
    text: 'RM250.00 was spent on your card ending 4321 at Kedai Contoh. If this was not you, call the number on the back of your card.',
    correct: 'legit',
    reasons: [
      'No link to press.',
      'It tells you to use a number you already have.',
    ],
  },
  {
    id: 3,
    sender: 'Kedai Contoh',
    text: 'Tahniah! You won a RM500 voucher. Claim before midnight: (short link)',
    correct: 'scam',
    reasons: [
      'A prize you never entered.',
      'A deadline before midnight.',
      'A short link.',
    ],
  },
  {
    id: 4,
    sender: 'SK Taman Contoh',
    text: 'Reminder: school is closed on Friday for the term break. Classes start again on Monday.',
    correct: 'legit',
    reasons: [
      'Information only.',
      'No link, no money.',
    ],
  },
  {
    id: 5,
    sender: 'Syarikat Elektrik Contoh',
    text: 'Your bill is overdue. Your power will be cut in 2 hours. Call this number now to pay.',
    correct: 'scam',
    reasons: [
      'A threat.',
      'A two-hour deadline.',
      'A number given in the message.',
    ],
  },
  {
    id: 6,
    sender: 'Unknown number',
    text: 'Join our investment group. Guaranteed 20% return every month. Many members already earned RM10,000.',
    correct: 'scam',
    reasons: [
      'A guaranteed high return.',
      'Other people\'s winnings used as bait.',
    ],
  },
  {
    id: 7,
    sender: 'Unknown number',
    text: 'Hi Mak, my phone fell in the water, this is my new number. Can you transfer RM800 to my friend\'s account now? I explain later.',
    correct: 'scam',
    reasons: [
      'A new number.',
      'Money to someone else\'s account.',
      'A hurry.',
      'No call.',
    ],
  },
  {
    id: 8,
    sender: 'Klinik Contoh',
    text: 'Your appointment is on Tuesday at 10.00am. Reply 1 to confirm, or call the clinic to change it.',
    correct: 'legit',
    reasons: [
      'A message you expected.',
      'No link, no money.',
    ],
  },
  {
    id: 9,
    sender: 'Unknown number',
    text: 'Part-time job: like 10 videos a day, earn RM300 daily. Pay RM50 to register first.',
    correct: 'scam',
    reasons: [
      'Easy money.',
      'A fee before you earn anything.',
    ],
  },
  {
    id: 10,
    sender: 'Kedai Contoh',
    text: 'Your order 48213 has been shipped and will arrive in 2 to 3 days.',
    correct: 'legit',
    reasons: [
      'An order you made.',
      'No link, nothing to pay.',
    ],
  },
]

export const MESSAGE_COUNT = MESSAGES.length