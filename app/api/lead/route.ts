import { NextRequest, NextResponse } from 'next/server';

const SHEETS_WEBHOOK = process.env.SHEETS_WEBHOOK!;

export async function POST(req: NextRequest) {
  try {
    const { email, priceChoice, utm, hp } = await req.json();
    if (hp) return NextResponse.json({ ok: true });
    if (typeof email !== 'string' || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '';
    const ua = req.headers.get('user-agent') ?? '';

    const r = await fetch(SHEETS_WEBHOOK + `?ip=${encodeURIComponent(ip)}&ua=${encodeURIComponent(ua)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, priceChoice, utm })
    });
    if (!r.ok) throw new Error('bad');

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
  }
}
