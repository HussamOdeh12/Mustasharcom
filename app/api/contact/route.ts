import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, entity, email, phone, service, message, honeypot } = body;

    // Honeypot check for bots
    if (honeypot) {
      return NextResponse.json(
        { success: false, error: 'Spam detected' },
        { status: 400 }
      );
    }

    // Basic validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Full name is required (at least 2 characters)' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Please provide a project or inquiry scope of at least 10 characters' },
        { status: 400 }
      );
    }

    // Structured logging for business inquiry
    console.info('[Mustasharcom Contact Form Submission]', {
      name: name.trim(),
      entity: entity ? String(entity).trim() : 'N/A',
      email: email.trim().toLowerCase(),
      phone: phone ? String(phone).trim() : 'N/A',
      service: service || 'General IT Consultancy',
      messageLength: message.trim().length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been successfully received. A senior consultant will respond within 24 business hours.',
    });
  } catch (error) {
    console.error('[Contact API Error]', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please contact info@mustasharcom.ae directly.' },
      { status: 500 }
    );
  }
}
