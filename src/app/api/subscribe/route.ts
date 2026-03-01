import { NextResponse } from 'next/server';

const KIT_API_KEY = process.env.KIT_API_KEY!;
const KIT_TAG_ID = '16776536'; // AI-Native tag

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
  }

  // 1. Create (or upsert) subscriber
  const subRes = await fetch('https://api.kit.com/v4/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Kit-Api-Key': KIT_API_KEY,
    },
    body: JSON.stringify({ email_address: email }),
  });

  if (!subRes.ok) {
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
  }

  const { subscriber } = await subRes.json();

  // 2. Tag subscriber with AI-Native
  await fetch(`https://api.kit.com/v4/tags/${KIT_TAG_ID}/subscribers/${subscriber.id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Kit-Api-Key': KIT_API_KEY,
    },
  });

  return NextResponse.json({ success: true });
}
