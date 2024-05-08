// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: 'ZenithMails',
			removal: input?.stage === 'prod' ? 'retain' : 'remove',
			home: 'aws',
			providers: {
				aws: {
					profile: 'default',
					region: 'us-east-1',
				},
				
			},
			
		};
	},
	async run() {
		new sst.aws.SvelteKit('ZenithWeb', {
			domain:{
				name:'mail.webzenith.tech',
				dns:false,
				cert:'arn:aws:acm:us-east-1:120710952431:certificate/3c5546c2-6182-4663-9241-23335eea0d58'
			}
		});
	}
});
