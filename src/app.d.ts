// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
        interface Platform {
            env: {
                TURNSTILEKEY: String;
            };
            cf: CfProperties
            ctx: ExecutionContext
            context: {
                waitUntil(promise: Promise<any>): void;
            };
        }
    }
}

export {};