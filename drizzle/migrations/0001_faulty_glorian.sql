CREATE TABLE `mailHistory` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`provider` text NOT NULL,
	`fromAddress` text NOT NULL,
	`toAddresses` text NOT NULL,
	`subject` text NOT NULL,
	`content` text NOT NULL,
	`sentAt` integer NOT NULL,
	`sentUserId` text NOT NULL,
	`attachments` text NOT NULL,
	`type` text NOT NULL,
	FOREIGN KEY (`sentUserId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
