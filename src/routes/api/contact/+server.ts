import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();

		const response = await fetch('https://pantrypoints.com/api/external', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify(body),
		});

		const text = await response.text();
		let data: unknown;
		try {
			data = JSON.parse(text);
		} catch {
			data = { message: text };
		}

		return new Response(JSON.stringify(data), {
			status: response.status,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (err) {
		console.error('Contact proxy error:', err);
		return new Response(JSON.stringify({ error: 'Failed to send message' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};