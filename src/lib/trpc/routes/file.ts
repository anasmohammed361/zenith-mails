import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { publicProcedure, t } from '..';
import { z } from 'zod';
import { randomUUID } from 'crypto';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { BUCKET_NAME } from '$env/static/private';

export const fileRouter = t.router({
	getSignedUrl: publicProcedure
		.input(z.object({ key: z.string().optional() }))
		.mutation(async ({ input }) => {
			const command = new PutObjectCommand({
				Key: input.key || randomUUID(),
				Bucket: BUCKET_NAME
			});
			const url = await getSignedUrl(new S3Client({}), command);
			return { url };
		})
});
