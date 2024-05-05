// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: 'ZenithMails',
			removal: input?.stage === 'production' ? 'retain' : 'remove',
			home: 'aws',
			providers: {
				aws: {
					profile: 'default',
          region: 'us-east-1',
				}
			}
		};
	},
	async run() {
		new sst.aws.SvelteKit('ZenithWeb',{
    
    });
	}
});
