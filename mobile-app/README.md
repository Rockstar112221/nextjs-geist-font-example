# Melooha-like Mobile App

This is a React Native mobile app that blends astrological predictions, psychological insights, and AI interpretation into a unified experience.

## Features

- Phone number login using Firebase Auth OTP
- User onboarding to collect personal and birth details
- Daily horoscope, lucky color/number, Rahu Kaal, auspicious time
- Ask a question with AI interpretation (one free question, paywall after)
- Paid PDF reports on wealth, love, career, full life profile
- Profile management with purchased reports and question history
- Backend integration with Prokerala API and OpenAI GPT-4
- Payment integration with Razorpay (placeholder)
- Push notifications and streaks (to be implemented)

## Tech Stack

- Frontend: React Native with Expo
- Backend: Node.js + Express (to be created)
- Database: Firebase Firestore
- Authentication: Firebase Phone OTP
- AI: OpenAI GPT-4
- Astrology: Prokerala API
- Payments: Razorpay

## Setup

1. Install dependencies:

```bash
cd mobile-app
npm install
```

2. Configure Firebase in `src/lib/firebaseConfig.ts` with your project credentials.

3. Run the app:

```bash
npm start
```

4. Backend server to be created separately.

## Notes

- API keys and tokens are placeholders and should be replaced.
- Payment and notification features are placeholders and need implementation.
- TypeScript errors related to missing modules require installing React Native and Firebase types.

## Next Steps

- Create backend Node.js + Express server with API routes.
- Implement payment and notification flows.
- Add admin dashboard.
- Improve UI/UX and error handling.
