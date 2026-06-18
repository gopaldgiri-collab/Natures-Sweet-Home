import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { v4 as uuid } from 'uuid';

let client;
async function db() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL);
    await client.connect();
  }
  return client.db(process.env.DB_NAME || 'natures_sweet_homes');
}

function cors() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

export async function OPTIONS() { return new NextResponse(null, { status: 204, headers: cors() }); }

export async function GET(_req, { params }) {
  const path = (params?.path || []).join('/');
  try {
    if (path === '' || path === 'health') {
      return NextResponse.json({ ok: true, service: "Natures Sweet Homes API" }, { headers: cors() });
    }
    if (path === 'inquiries') {
      const d = await db();
      const rows = await d.collection('inquiries').find({}).sort({ createdAt: -1 }).limit(200).toArray();
      return NextResponse.json({ success: true, items: rows.map(({_id, ...r}) => r) }, { headers: cors() });
    }
    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: cors() });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500, headers: cors() });
  }
}

export async function POST(req, { params }) {
  const path = (params?.path || []).join('/');
  try {
    const body = await req.json().catch(() => ({}));
    if (path === 'inquiries') {
      if (!body.name || !body.phone) {
        return NextResponse.json({ success: false, error: 'name and phone required' }, { status: 400, headers: cors() });
      }
      const d = await db();
      const doc = { id: uuid(), ...body, createdAt: new Date().toISOString(), status: 'new' };
      await d.collection('inquiries').insertOne(doc);
      const { _id, ...safe } = doc;
      return NextResponse.json({ success: true, inquiry: safe }, { headers: cors() });
    }
    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: cors() });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500, headers: cors() });
  }
}
