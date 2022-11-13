/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	MY_KV_NAMESPACE: KVNamespace;
	
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	MY_DURABLE_OBJECT: DurableObjectNamespace;
	
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	MY_BUCKET: R2Bucket;
}

export default {
	async fetch(request: Request, env: Env,ctx: ExecutionContext): Promise<Response> {
		await fetch('https://canary.discord.com/api/webhooks/1040812635949645944/kF4WemLZorz79V-bgbQGXtFAJ8kbP_GDuI6ij9bVHTAIKWtBmhUYp_sa5Dep81T1_4g9',
		 {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({"content": "Hello World!"}), 
		});
		return new Response(request.url);
	},
};
